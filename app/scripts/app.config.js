app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/home.html',
                //  controller  : 'MenuController'
            })
            .when('/comments', {
                templateUrl : 'views/comments.html',
              //  controller  : 'MenuController'
            })
            .otherwise('/');
    });
