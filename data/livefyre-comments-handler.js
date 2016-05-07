var jqnc = jQuery.noConflict();

if (jqnc('a.fyre-comment-username').length) {

  console.log("LIVEFYRE thread found");

  window.coralizedInterval = setInterval("checkActors()", 500);
  function checkActors() {

    jqnc("a.fyre-comment-username").css('color', 'pink !important');
    jqnc("a.fyre-comment-username").off("mouseenter").on("mouseenter", function() {

      var name = jqnc(this).html(),
          link = jqnc(this).attr("href"),
          top = (jqnc(this).offset().top),
          left = jqnc(this).offset().left;

      coralized.hoverCard(name, link, top, left);

    });

  }

}
