describe('Home Coontroller', function() {

  var Home;

  beforeEach(angular.mock.module('starter'));

  beforeEach(inject(function(_Home_) {
    Home = _Home_;
  }));

  it('should exist', function() {
    expect(Home).toBeDefined();
  });

});
