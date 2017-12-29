// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'ui.select',
    'angulartics.google.analytics',
    'ui.bootstrap',
    // 'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr',
    'angular-loading-bar'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, cfpLoadingBarProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
    // cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div class="spinner-overlay"><img class="spinner" src="img/loader.gif" /></div>';

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        })
        .state('destination', {
            url: "/destination",
            templateUrl: tempateURL,
            controller: 'DestinationCtrl'
        })
        .state('customdestination', {
            url: "/customdestination/:id",
            templateUrl: tempateURL,
            controller: "CustomDestCtrl"
        })
        .state('activity', {
            url: "/activity",
            templateUrl: tempateURL,
            controller: "ActivityCtrl"
        })
        .state('whats-hot', {
            url: "/whats-hot",
            templateUrl: tempateURL,
            controller: 'WhatsHotCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: tempateURL,
            controller: 'AboutusCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});