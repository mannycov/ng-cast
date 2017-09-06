angular.module('video-player')
  .component('search', {
    controller: function() {
      this.result = function() {
        console.log('results console');
      };
    },
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
