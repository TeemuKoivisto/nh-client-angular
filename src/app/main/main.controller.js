(function() {
    'use strict';

    angular
    .module('nhClientAngular')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, postsService, apiService) {
        var vm = this;
        // vm.posts = postsService.getPosts();
        apiService.getLatest()
        .then(function(posts) {
            vm.posts = posts;
        });
        
        vm.feeds = [
            {
                name: 'Ilta-Sanomat',
                url: 'is.fi',
                toggle: true
            },
            {
                name: 'Helsingin Sanomat',
                url: 'hs.fi',
                toggle: true
            },
            {
                name: 'Yle',
                url: 'yle.fi',
                toggle: true
            }
        ];

        vm.toggleFeed = function(index) {
            vm.feeds[index].toggle = !vm.feeds[index].toggle;
        }
        
        vm.logPosts = function() {
            console.log('', vm.posts);
        }
        
        vm.refresh = function() {
            apiService.getLatest()
            .then(function(posts) {
                vm.posts = posts;
            });
        }
    }
})();
