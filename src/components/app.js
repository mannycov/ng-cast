angular.module('video-player')
  .component('app', {
    controller: function($window, youTube) {
      this.provider = youTube;

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      };

      this.result = () => {

      };

      this.provider.search('Game of Thrones', this.searchResults);
    },
    templateUrl: 'src/templates/app.html'
  });