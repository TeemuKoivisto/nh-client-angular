(function() {
  'use strict';

  angular
    .module('nhClientAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
