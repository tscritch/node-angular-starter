describe('Starter', function() {

  var $controller;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('starter'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Home Controller', function() {

    var Home;

    beforeEach(function() {
      Home = $controller('homeController');
    });

    it('should exist', function() {
      expect(Home).toBeDefined();
    });


  });

});
