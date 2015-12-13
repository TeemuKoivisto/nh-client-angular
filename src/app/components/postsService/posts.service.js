(function() {
    'use strict';

    angular
    .module('nhClientAngular')
    .service('postsService', postsService);

    function postsService(apiService) {
        this.posts = [
            {
                title: 'Näin Venäjä hyötyy Suomen pakolaiskriisistä – Tutkija: Kremlissä mietitty, voidaanko kaataa bensaa liekkeihin',
                url: 'http://www.iltasanomat.fi/kotimaa/art-1446092580173.html',
                feed: 'Ilta-Sanomat'
            },
            {
                title: 'Ihmiset levittävät tietämättään virusta – klikkasitko tätä linkkiä Facebookissa?',
                url: 'http://www.iltasanomat.fi/digi/art-1446091738032.html',
                feed: 'Yle'
            },
            {
                title: 'Brittilehti: Tällaista kuntoa Venäjän armeija vaatii varusmiehiltä',
                url: 'http://www.iltasanomat.fi/ulkomaat/art-1446184289362.html',
                feed: 'Ilta-Sanomat'
            },
            {
                title: 'Näin toimii kannustinloukku: siivousyrityksen 1540 e/kk ei kelvannut työttömille – palkkaa saatava enemmän',
                url: 'http://www.iltasanomat.fi/tyoelama/art-1446187266708.html',
                feed: 'Helsingin Sanomat'
            }
        ];

        this.getPosts = function() {
            return apiService.getLatest();
            // return this.posts;
        };
    }
})();
