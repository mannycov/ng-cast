angular.module('video-player')
  .component('search', {
    controller: function() {
      this.search = () => {
        this.provider.search(this.input, this.onClick);
      };
    },
    bindings: {
      provider: '<',
      onClick: '<',
      result: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
