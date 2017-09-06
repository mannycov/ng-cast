angular.module('video-player')
  .component('videoPlayer', {
    controller: function() {
      this.video = window.exampleVideoData[0];
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
