var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

// http://localhost:8080/fbcomments.html

// Using FB comments
// http://techcrunch.com/2016/04/30/according-to-its-cofounder-and-ceo-snapchat-is-mainly-a-camera-company/?ncid=rss&cps=gravity_1462_8920122057020491658

// Using Disqus
// http://www.poynter.org/2016/heres-what-the-ap-stylebook-needs-to-change-in-its-2016-edition/409782/

// One with Livefyre
// http://www.blogher.com/introducing-comments-powered-livefyre


// Question with some good insights
// http://stackoverflow.com/questions/22382201/pagemod-attaching-worker-to-same-url-multiple-times

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [
    data.url("jquery-1.12.3.min.js"),
    data.url("fb-comments-handler.js")
  ]
});

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}
exports.dummy = dummy;
