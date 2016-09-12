var mainApp = angular.module("mainApp", ["ngRoute", "ngCookies", "ui.router"]);
mainApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "parts/home.htm",
      controller: mainCtrl
    })
    .state('resume', {
      url: "/resume",
      templateUrl: "parts/resume.htm",
      controller: mainCtrl
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "parts/projects.htm",
      controller: mainCtrl
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "parts/contact.htm",
      controller: mainCtrl
    });

    //$locationProvider.html5Mode(true);
});

mainApp.controller("mainCtrl", mainCtrl);

function mainCtrl($scope, $state){
  var state = $state.current.name;

  /*  For the home state we want the nav menu
  to be more transparent than for the other
  pages. */
  if(state != "home"){
    $(document).ready(function(){
      $('.navbar').css('background-color', 'rgba(0,0,0,0.9)');
    });
  }
  else{
    $(document).ready(function(){
      $('.navbar').css('background-color', 'rgba(0,0,0,0.2)');
    });
  }

  $scope.state = $state;

}
