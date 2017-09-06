angular.module('video-player')
  .component('videoListEntry', {
    controller: function() {
      this.video = window.exampleVideoData;
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
