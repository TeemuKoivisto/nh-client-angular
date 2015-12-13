(function() {
  'use strict';

  describe('service postsService', function() {
    var postsService;

    beforeEach(module('nhClientAngular'));
    beforeEach(inject(function(_postsService_) {
      postsService = _postsService_;
    }));

    it('should be registered', function() {
      expect(postsService).not.toEqual(null);
    });

    describe('getPosts function', function() {
      it('should exist', function() {
        expect(postsService.getPosts()).not.toEqual(null);
      });

      it('should return data as JSON', function() {
        var posts = postsService.getPosts();
        expect(posts[0].title).not.toEqual(null);
        expect(posts[0].url).not.toEqual(null);
      });

    });
  });
})();
