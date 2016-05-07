var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var panel = require("sdk/panel").Panel;
var buttons = require('sdk/ui/button/toggle');
var tabs = require("sdk/tabs");

var coralButton = buttons.ToggleButton({
  id: "coral-button",
  label: "The Coral Project",
  icon: {
    "16": data.url("corallogo.png"),
    "32": data.url("corallogo.png"),
    "64": data.url("corallogo.png")
  },
  onChange: onCoralButtonChange
});

var coralSidebar = panel({
  contentURL: data.url("coralSidebar.html"),
  onHide: onCoralSidebarHide
});

function onCoralButtonChange(state) {
  if (state.checked) {
    coralSidebar.show({
      position: coralButton,
      height: 400
    });
  }
}

function onCoralSidebarHide() {
  coralButton.state('window', { checked: false });
}

coralSidebar.port.on("option-click", function (option) {
  tabs.open(data.url('coralized-tab.html'));
  coralSidebar.hide();
});

// http://localhost:8080/fbcomments.html

// The Guardian Comments
// http://www.theguardian.com/us-news/2016/may/05/paul-ryan-declines-to-support-trump-as-republican-nominee

// Using FB comments
// http://techcrunch.com/2016/05/05/fintech-frenemies/?ncid=rss&cps=gravity_1462_2134325817918268288
// http://www.veteranstoday.com/2009/07/28/the-definition-of-a-vietnam-era-veteran/

// Using Disqus
// http://www.poynter.org/2016/heres-what-the-ap-stylebook-needs-to-change-in-its-2016-edition/409782/

// http://disqus.com/embed/comments/

// One with Livefyre
// http://www.blogher.com/introducing-comments-powered-livefyre

// Question with some good insights
// http://stackoverflow.com/questions/22382201/pagemod-attaching-worker-to-same-url-multiple-times

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [
    data.url("jquery-1.12.3.min.js"),
    data.url("coralized-overlay.js"),
    data.url("coralized-thread.js"),
    data.url("fb-comments-handler.js")
  ]
});

pageMod.PageMod({
  include: "*.disqus.com",
  contentScriptFile: [
    data.url("jquery-1.12.3.min.js"),
    data.url("coralized-overlay.js"),
    data.url("coralized-thread.js"),
    data.url("disqus-comments-handler.js")
  ]
});

pageMod.PageMod({
  include: "*",
  contentScriptFile: [
    data.url("jquery-1.12.3.min.js"),
    data.url("coralized-overlay.js"),
    data.url("coralized-thread.js"),
    data.url("livefyre-comments-handler.js")
  ]
});


// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}
exports.dummy = dummy;
