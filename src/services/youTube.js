angular.module('video-player')
  .service('youTube', function($http, $window) {
    this.search = (query, callback) => {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then(function({data}) {
          if (callback) {
            callback(data.items);
          }
        })
        .catch(function({data}) {
          data.error.errors.each(function(err) {
            console.error(err.message);
          });
        });
    };
  });