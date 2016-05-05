console.log("Running");
console.log(document.location.href);

if (/facebook\.com\/plugins\/comments.php/.test(document.location.href)) {

  var jqnc = jQuery.noConflict();

  window.cursorX;
  window.cursorY;
  document.onmousemove = function(e){
    window.cursorX = e.pageX;
    window.cursorY = e.pageY;
  }

  /*setInterval("checkCursor()", 4000);
  function checkCursor(){
      console.log("Cursor at: " + window.cursorX + ", " + window.cursorY);
  }*/

  setInterval("checkActors()", 500);
  function checkActors() {
    jqnc("a.UFICommentActorName").css('color', 'pink');
    jqnc("a.UFICommentActorName").on("mouseenter", function() {
      var card = jqnc("<DIV>");
      card.attr("data-href", (jqnc(this).attr("href")));
      card.html("<h1>" + jqnc(this).attr("href") + "</h1><button>Block</button><button>Action 2</button><button>Action 3</button><button>Action 4</button>");
      var cardTop = (jqnc(this).offset().top + 20) + "px";
      var cardLeft = jqnc(this).offset().left + "px";
      card.css({
        "position": "absolute",
        "padding": "20px",
        "background-color": "#eee",
        "border": "1px solid #ccc",
        "top": cardTop,
        "left": cardLeft
      });
      jqnc("body").append(card);
      jqnc(this).on("mouseleave", function() {
        card.remove();
      })
    });

  }

  /*jqnc("a.UFICommentActorName").on('mousemove', function(e) {
    console.log("Link usuario");
    console.log(e);
  });*/

  var overlayExists = jqnc("div#coralEnhancerOverlay").length;

  if (!overlayExists) {
    console.log('no existe');
    var newDiv = jqnc("<DIV>");
    newDiv.attr("id", "coralEnhancerOverlay");
    newDiv.css("background-color", "#f77160");
    newDiv.css("padding", "5px");
    newDiv.css("position", "fixed");
    newDiv.css("top", "0px");
    newDiv.css("right", "10px");
    newDiv.css("width", "auto");
    newDiv.css("color", "white");
    newDiv.css("font-weight", "bold");
    newDiv.css("font-size", "18pt");
    newDiv.css("border-radius", "0 0 5px 5px");
    newDiv.css("box-shadow", "0 1px 4px #aaa");
    newDiv.html("Coralized");
    jqnc("body").append(newDiv);
  }

}
