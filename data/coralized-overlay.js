var jqnc = jQuery.noConflict();

var coralizedOverlayDiv = jqnc("<DIV>");
coralizedOverlayDiv.attr("id", "coralizedOverlay");
coralizedOverlayDiv.css({
  "color": "#fff",
  "background-color": "#f77160",
  "padding": "10px",
  "width": "auto",
  "font-weight": "bold",
  "font-size": "18px",
  "line-height": "24px",
  "border-radius": "0 0 5px 5px",
  "box-shadow": "0 1px 4px #aaa",
  "z-index": "999999"
});
coralizedOverlayDiv.html('<img align="absmiddle" style="border: 2px solid white; background: white; border-radius: 3px" src="https://raw.githubusercontent.com/coralproject/design/gh-pages/img/logos/coralLogoMark-1.5.png" width="30px" /> Coralized');

// Disqus or Facebook iframes
if (/disqus\.com\/embed\/comments/.test(document.location.href) ||
    /facebook\.com\/plugins\/comments.php/.test(document.location.href)) {

  var overlayExists = jqnc("div#coralizedOverlay").length;

  coralizedOverlayDiv.css({
    "position": "fixed",
    "top": "-1px",
    "right": "10px"
  });

  if (!overlayExists) {
    jqnc("body").append(coralizedOverlayDiv);
  }

}

// Livefyre
if (jqnc('a.fyre-comment-username').length) {

  var overlayExists = jqnc("div#coralizedOverlay").length;

  coralizedOverlayDiv.css({
    "position": "absolute",
    "top": "-1px",
    "right": "10px"
  });

  if (!overlayExists) {
    jqnc("div.fyre").append(coralizedOverlayDiv);
  }

}
