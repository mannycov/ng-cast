angular.module('video-player')
  .component('videoPlayer', {
    controller: function() {
      this.videoUrl = function() {
        if (!this.video) {
          return 'Please wait';
        } else {
          return `https://www.youtube.com/embed/${this.video.id.videoId}`;
        }
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
