(function() {
  'use strict';

  angular
    .module('nhClientAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    $scope.posts = [
      {
        title: 'Näin Venäjä hyötyy Suomen pakolaiskriisistä – Tutkija: Kremlissä mietitty, voidaanko kaataa bensaa liekkeihin',
        url: 'http://www.iltasanomat.fi/kotimaa/art-1446092580173.html'
      },
      {
        title: 'Ihmiset levittävät tietämättään virusta – klikkasitko tätä linkkiä Facebookissa?',
	url: 'http://www.iltasanomat.fi/digi/art-1446091738032.html'
      }
  }
})();
