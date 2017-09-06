angular.module('video-player')
  .component('videoList', {
    controller: function() {
      this.videos = window.exampleVideoData;

      this.onClick = function() {
        this.video.push(this.videos.video.snippet.title);
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
