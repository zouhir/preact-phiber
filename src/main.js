require('./style.scss');

var OfflinePlugin = require('offline-plugin/runtime');

OfflinePlugin.install({
  onInstalled: function() {
    openOfflineReady();
  },

  onUpdating: function() {

  },

  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    window.location.reload();
  }
});


(function() {
  var loaded = false; 
  document.addEventListener('readystatechange', function() {
      if (!loaded && (document.readyState === 'interactive' || document.readyState === 'complete')) {
        loaded = true;
        createVideo()
      }
    },
    false
  );
 
  function createVideo () {
    var videoEl = document.createElement("video");
    var sourceMP4 = document.createElement("source"); 
    sourceMP4.type = "video/mp4";
    sourceMP4.src = "/demo.mp4";
    videoEl.setAttribute("controls", "true");
    videoEl.appendChild(sourceMP4);
    document.getElementById('video').appendChild(videoEl); 
  }
}());
