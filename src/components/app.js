angular.module('video-player', [])
  .component('app', {
    controller: function() {
      this.selectVideo = () => {

      };
      this.searchResults = () => {

      };

      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;

    },
    templateUrl: 'src/templates/app.html'
  });
