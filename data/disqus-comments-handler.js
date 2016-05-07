if (/disqus\.com\/embed\/comments/.test(document.location.href)) {

  console.log("DISQUS thread found");

  var jqnc = jQuery.noConflict();

  window.coralizedInterval = setInterval("checkActors()", 500);
  function checkActors() {

    jqnc("#posts .author a").css('color', 'pink !important');
    jqnc("#posts .author a").off("mouseenter").on("mouseenter", function() {

      var name = jqnc(this).html(),
          link = jqnc(this).attr("href"),
          top = (jqnc(this).offset().top),
          left = jqnc(this).offset().left;

      coralized.hoverCard(name, link, top, left);

    });

  }

}
