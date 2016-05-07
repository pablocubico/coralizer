var jqnc = jQuery.noConflict();

var coralized = {
  hoverCard: function(userName, link, top, left) {
    var card = jqnc("<DIV>");
    card.html("<div>" +
      "<div style='background-color: #f77160; color: white; padding: 30px'>" +
        "<h1 style='font-weight: bold; color: white; font-size: 14pt; margin: 0'>" + userName + "</h1>" +
        "<h3 style='color: rgba(255,255,255,.7); font-size: 11pt; font-weight: normal; margin: 0'>" + link + "</h3>" +
      "</div>" +
      "<div style='background-color: #eee; padding: 30px'>" +
        "<div style='margin-bottom: 10px'>" +
          "<span style='font-size: 12pt; display: inline-block; padding: 4px; border-radius: 4px; color: white; background-color: #2A2'>Veteran</span>" +
        "</div>" +
        "<button style='padding: 10px; border: 1px solid #aaa; border-radius: none; background: white; font-size: 12pt'>&#9733; Save</button>" +
        "<button style='margin-left: 10px; padding: 10px; border: 1px solid #aaa; border-radius: none; background: white; font-size: 12pt'>&#9751; Add Tag</button>" +
      "</div>" +
    "</div>");
    var cardTop = top + "px";
    var cardLeft = left + "px";
    card.css({
      "position": "absolute",
      "background-color": "#eee",
      "box-shadow": "0px 0px 15px rgba(128, 128, 128, .75)",
      "z-index": "99999",
      "top": cardTop,
      "left": cardLeft
    });
    jqnc("body").append(card);
    jqnc(card).on("mouseleave", function() {
      card.remove();
    })
  }
}
