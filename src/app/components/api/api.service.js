(function() {
    'use strict';

    angular
    .module('nhClientAngular')
    .service('apiService', apiService);

    function apiService($http) {
        this.getLatest = function() {
            // $http.get('https://news-hopper.herokuapp.com/posts') 
            return $http.get('http://localhost:8080/posts')
            .then(function(posts) {
                // console.log('postit tuli ', posts.data);
                return posts.data;
            })
            .catch(function(err) {
                console.log('apiService getLatest produced an error ', err);
            })
        };
    }
})();
