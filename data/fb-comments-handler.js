if (/facebook\.com\/plugins\/comments.php/.test(document.location.href)) {

  console.log("FACEBOOK thread found");

  var jqnc = jQuery.noConflict();

  window.coralizedInterval = setInterval("checkActors()", 500);
  function checkActors() {

    //clearInterval(window.coralizedInterval);

    jqnc("a.UFICommentActorName").css('color', 'pink');
    jqnc("a.UFICommentActorName").off("mouseenter").on("mouseenter", function() {

      var name = jqnc(this).html(),
          link = jqnc(this).attr("href"),
          top = (jqnc(this).offset().top),
          left = jqnc(this).offset().left;

      coralized.hoverCard(name, link, top, left);

    });

  }

}
