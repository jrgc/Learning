

require.config({
    
    paths: {
        angular: '../node_modules/angular/angular.min',
        angularAnimate: '../node_modules/angular-animate/angular-animate',
        angularCookies: '../node_modules/angular-cookies/angular-cookies',
        angularRoute: '../node_modules/angular-route/angular-route',
        angularTouch: '../node_modules/angular-touch/angular-touch',
        sweetalert: '../node_modules/sweetalert/dist/sweetalert.min',
        jquery: '../bower_components/jquery/dist/jquery',
        myController: 'Controllers/myController',
        app: 'app',

    },

    shim: {
        angular: {
            deps: ['jquery']
        },
        app: {
            deps: ['angular', 'sweetalert']
        },        
        myController: {
            deps: ['app']
        }
    }   

});

//require([
//	'angular',
//	'app'
//], function (angular, app) {
//    var $html = angular.element(document.getElementsByTagName('html')[0]);
//    angular.element().ready(function () {
//        // bootstrap the app manually
//        angular.bootstrap(document, ['app']);
//    });
//}
//);

require(['app'], function () {
    angular.bootstrap(angular.element('body'), ['app']);
});