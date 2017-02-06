
app = angular.module('vod', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/html/video_library.html"
    })
    .when("/views", {
        templateUrl : "src/html/view_views.html"
    })
    .otherwise("/", {
        templateUrl : "src/html/video_library.html"
    });
});

