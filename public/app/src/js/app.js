
app = angular.module('vod', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/src/html/video_library.html"
    })
    .when("/views", {
        templateUrl : "app/src/html/view_views.html"
    })
    .otherwise("/", {
        templateUrl : "app/src/html/video_library.html"
    });
});

