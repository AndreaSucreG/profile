/**
 * Main AngularJS Web Application
 * ngRoute: module routes your application to different pages without reloading the entire application.
 */
var app = angular.module('myCV', ['ngRoute', 'pascalprecht.translate']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "templates/home.html", controller: "commonCtrl"})
    // Pages
   .when("/studies", {templateUrl: "templates/rhombus_center/studies.html", controller: "commonCtrl"})
   .when("/projects", {templateUrl: "templates/rhombus_left/projects.html", controller: "commonCtrl"})
   .when("/courses", {templateUrl: "templates/rhombus_center/courses.html", controller: "commonCtrl"})
   .when("/work_experience", {templateUrl: "templates/rhombus_center/works.html", controller: "commonCtrl"})
   .when("/awards", {templateUrl: "templates/rhombus_left/awards.html", controller: "commonCtrl"})
   .when("/arts", {templateUrl: "templates/list/arts.html", controller: "commonCtrl"})
   .when("/volunteers", {templateUrl: "templates/list/volunteers.html", controller: "commonCtrl"})
   .when("/skills", {templateUrl: "templates/list/skills.html", controller: "commonCtrl"})
   .when("/congresses", {templateUrl: "templates/rhombus_left/congresses.html"})
   
}]);

app.config(['$translateProvider', function($translateProvider) {
	// add translation table
  $translateProvider
  .translations('en', translationsEN)
  .translations('es', translationsES)
  .preferredLanguage('es')
  .fallbackLanguage('es');

 
}]);


/**
 * Controllers
 */
app.controller('commonCtrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
 
}]);