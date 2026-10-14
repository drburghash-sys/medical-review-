package com.burghash.surgreadfresh;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/** New standalone Android host. It loads the maintained GitHub Pages PWA, not a repackaged APK. */
public final class MainActivity extends Activity {
  private static final String HOME = "https://drburghash-sys.github.io/medical-review-/suite/";
  private WebView webView;
  private ValueCallback<Uri[]> pendingFiles;
  private static final int FILE_PICK = 107;

  @Override public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().setStatusBarColor(0xff073d48);
    getWindow().setNavigationBarColor(0xfff8fbfb);
    webView = new WebView(this);
    webView.setBackgroundColor(0xfff8fbfb);
    webView.getSettings().setJavaScriptEnabled(true);
    webView.getSettings().setDomStorageEnabled(true);
    webView.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
    webView.getSettings().setAllowFileAccess(false);
    webView.getSettings().setAllowContentAccess(true);
    webView.setWebViewClient(new WebViewClient() {
      @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        Uri u = request.getUrl();
        if ("drburghash-sys.github.io".equals(u.getHost()) && u.getPath()!=null && u.getPath().startsWith("/medical-review-/suite/")) return false;
        try { startActivity(new Intent(Intent.ACTION_VIEW,u)); } catch(Exception ignored){}
        return true;
      }
    });
    webView.setWebChromeClient(new WebChromeClient() {
      @Override public boolean onShowFileChooser(WebView w, ValueCallback<Uri[]> callback, FileChooserParams p) {
        if(pendingFiles!=null) pendingFiles.onReceiveValue(null);
        pendingFiles=callback;
        try { startActivityForResult(p.createIntent(),FILE_PICK); return true; }
        catch(Exception error) { pendingFiles=null; return false; }
      }
    });
    setContentView(webView);
    webView.loadUrl(HOME);
  }
  @Override protected void onActivityResult(int requestCode, int resultCode, Intent data){
    super.onActivityResult(requestCode,resultCode,data);
    if(requestCode==FILE_PICK && pendingFiles!=null){
      pendingFiles.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(resultCode,data));pendingFiles=null;
    }
  }
  @Override public void onBackPressed(){if(webView!=null && webView.canGoBack()) webView.goBack();else super.onBackPressed();}
  @Override public void onDestroy(){if(webView!=null){webView.destroy();webView=null;}super.onDestroy();}
}
