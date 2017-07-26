describe('Starter', function() {

  var $controller;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('starter'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Application Controller', function() {

    var App;

    beforeEach(function() {
      App = $controller('applicationController');
    });

    it('should exist', function() {
      expect(App).toBeDefined();
    });


  });

});
