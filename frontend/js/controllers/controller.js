myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };


        $scope.mySlides = [{
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"
        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"
        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"
        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"
        }];
        $scope.mySlidestop = [{
            img: "img/home2.jpg",
        }, {
            img: "img/home2.jpg",
        }, {
            img: "img/home2.jpg",
        }, {
            img: "img/home2.jpg"
        }];

        $scope.popularDestination = [{
                id: 1,
                name: "Goa",
                image: "img/india/goa.jpg"
            },
            {
                id: 2,
                name: "Goa",
                image: "img/india/goa.jpg"
            },
            {
                id: 3,
                name: "Goa",
                image: "img/india/goa.jpg"
            },
            {
                id: 4,
                name: "Goa",
                image: "img/india/goa.jpg"
            }
        ];

        $scope.popularAttraction = [{
                id: 1,
                name: "Goa",
                image1: "img/india/goa.jpg"
            },
            {
                id: 2,
                name: "Goa",
                image1: "img/india/goa.jpg"
            },
            {
                id: 3,
                name: "Goa",
                image1: "img/india/goa.jpg"
            }, {
                id: 4,
                name: "Goa",
                image1: "img/india/goa.jpg"
            }
        ];
        $scope.mySlidesss = [{
                id: 1,
                banner: "img/india/goa.jpg"
            },
            {
                id: 2,
                banner: "img/india/goa.jpg"
            },
            {
                id: 3,
                banner: "img/india/goa.jpg"
            }

        ];

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });