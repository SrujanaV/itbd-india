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
            img: "img/frontbanner/1.jpg",
        }, {
            img: "img/frontbanner/2.jpg",
        }, {
            img: "img/frontbanner/3.jpg",
        }, {
            img: "img/frontbanner/4.jpg"
        }, {
            img: "img/frontbanner/5.jpg"
        }, {
            img: "img/frontbanner/6.jpg"
        }];

        $scope.home_PopularDestination = [{
                id: 1,
                name: "Amritsar Chandigarh",
                image: "img/popular/chandigarh.jpg"
            },
            {
                id: 2,
                name: "Goa",
                image: "img/popular/goa.jpg"
            },
            {
                id: 3,
                name: "Manali",
                image: "img/popular/manali.jpg"
            },
            {
                id: 4,
                name: "Udaipur",
                image: "img/popular/udaipur.jpg"
            }
        ];

        $scope.popularAttraction = [{
                id: 1,
                name: "Delhi Agra",
                image1: "img/attraction/agra.jpg"
            },
            {
                id: 2,
                name: "Darjeeling",
                image1: "img/attraction/darjeeling.jpg"
            },
            {
                id: 3,
                name: "Jaisalmer",
                image1: "img/attraction/jaisalmer.jpg"
            }, {
                id: 4,
                name: "Munnar",
                image1: "img/attraction/munnar.jpg"
            }
        ];
        $scope.mySlidesss = [{
                id: 1,
                banner: "img/india/banner2.jpg"
            },
            {
                id: 2,
                banner: "img/india/banner2.jpg"
            },
            {
                id: 3,
                banner: "img/india/banner2.jpg"
            }

        ];

    })
    .controller('headerctrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);

        });
        $scope.onlyDest = [
            [{
                    _id: "1",
                    name: "Chandigarh"
                }, {
                    _id: "2",
                    name: "Andaman and Nicobar Island"
                },
                {
                    _id: "3",
                    name: "Coorg  Kabini"
                },
                {
                    _id: "4",
                    name: "Darjeeling"
                },
                {
                    _id: "5",
                    name: "Delhi  Agra"
                }, {
                    _id: "6",
                    name: "Goa"
                }
            ],
            [{
                    _id: "7",
                    name: "Jaipur"
                }, {
                    _id: "8",
                    name: "Jaisalmer"
                },
                {
                    _id: "9",
                    name: "Jammu and Kashmir"
                },
                {
                    _id: "10",
                    name: "Kovalam"
                },
                {
                    _id: "11",
                    name: "Kumarakom"
                }, {
                    _id: "12",
                    name: "Leh and Ladakh"
                }
            ],
            [{
                    _id: "13",
                    name: "Madurai"
                }, {
                    _id: "14",
                    name: "Manali"
                },
                {
                    _id: "15",
                    name: "Munnar"
                },
                {
                    _id: "16",
                    name: "Mussourie  Rishikesh"
                },
                {
                    _id: "17",
                    name: "Pondicherry"
                }, {
                    _id: "18",
                    name: "Shimla"
                }
            ],
            [{
                    _id: "19",
                    name: "Sikkim  Gangtok"
                }, {
                    _id: "20",
                    name: "Thekkady"
                },
                {
                    _id: "21",
                    name: "Udaipur"
                },
                {
                    _id: "22",
                    name: "Vythiri"
                }
            ]

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
    .controller('DestinationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/destination.html");
        TemplateService.title = "Destination"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        // $scope.popularDestination = [{
        //         _id: "1",
        //         name: "name",
        //         image: "../img/4.png"
        //     },
        //     {
        //         _id: "2",
        //         name: "name2",
        //         image: "../img/4.png"
        //     }
        // ]
        $scope.alldest = [{
                _id: 1,
                name: "name1",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name2",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name3",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name4",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name5",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name6",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name7",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name8",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name9",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name10",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name11",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name12",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name13",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name14",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name15",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name16",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name17",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name18",
                image: "../img/4.jpg"
            }, {
                _id: 1,
                name: "name19",
                image: "../img/4.jpg"
            }

        ];

        $scope.six_dest = [{
            _id: 1,
            name: "name1",
            image: "../img/4.jpg"
        }, {
            _id: 1,
            name: "name2",
            image: "../img/4.jpg"
        }, {
            _id: 1,
            name: "name3",
            image: "../img/4.jpg"
        }, {
            _id: 1,
            name: "name4",
            image: "../img/4.jpg"
        }, {
            _id: 1,
            name: "name5",
            image: "../img/4.jpg"
        }, {
            _id: 1,
            name: "name6",
            image: "../img/4.jpg"
        }]
        $scope.allDestination = $scope.six_dest;
        $scope.popularDestination = [
            [{
                    _id: "1",
                    name: "name",
                    image: "../img/4.jpg"
                },
                {
                    _id: "2",
                    name: "name2",
                    image: "../img/4.jpg"
                }
            ],
            [{
                    _id: "1",
                    name: "name3",
                    image: "../img/4.jpg"
                },
                {
                    _id: "2",
                    name: "name4",
                    image: "../img/4.jpg"
                }
            ],
            [{
                    _id: "1",
                    name: "name5",
                    image: "../img/4.jpg"
                },
                {
                    _id: "2",
                    name: "name6",
                    image: "../img/4.jpg"
                }
            ]


        ]

        $scope.viewMoreDest = function () {
            $scope.show = true;
            $scope.allDestination = $scope.alldest;
        };


        $scope.viewLessDest = function () {
            $scope.show = false;
            $scope.allDestination = $scope.six_dest;
        }
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