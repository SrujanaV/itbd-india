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
                _id: 1,
                name: "Amritsar Chandigarh",
                image: "img/popular/chandigarh.jpg"
            },
            {
                _id: 2,
                name: "Goa",
                image: "img/popular/goa.jpg"
            },
            {
                _id: 3,
                name: "Manali",
                image: "img/popular/manali.jpg"
            },
            {
                _id: 4,
                name: "Udaipur",
                image: "img/popular/udaipur.jpg"
            }
        ];

        $scope.popularAttraction = [{
                _id: 1,
                name: "Delhi Agra",
                image1: "img/attraction/agra.jpg"
            },
            {
                _id: 2,
                name: "Darjeeling",
                image1: "img/attraction/darjeeling.jpg"
            },
            {
                _id: 3,
                name: "Jaisalmer",
                image1: "img/attraction/jaisalmer.jpg"
            }, {
                _id: 4,
                name: "Munnar",
                image1: "img/attraction/munnar.jpg"
            }
        ];
        $scope.mySlidesss = [{
                _id: 1,
                banner: "img/india/banner2.jpg"
            },
            {
                _id: 2,
                banner: "img/india/banner2.jpg"
            },
            {
                _id: 3,
                banner: "img/india/banner2.jpg"
            }

        ];

    })
    .controller('headerctrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);

        });
        $scope.HeaderAllDest = [
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
                _id: "amritsar",
                name: "Amritsar Chandigarh",
                image: "../img/destination/all/amritsar chandigarh/1.jpg"
            }, {
                _id: "andaman",
                name: "Andaman And Nicobar Island",
                image: "../img/destination/all/andaman and nicobar island/1.jpg"
            }, {
                _id: "coorg",
                name: "Coorg Kabini",
                image: "../img/destination/all/coorg  kabini/1.jpg"
            }, {
                _id: "darjeeling",
                name: "Darjeeling",
                image: "../img/destination/all/darjeeling/1.jpg"
            }, {
                _id: "delhi_agra",
                name: "Delhi Agra",
                image: "../img/destination/all/delhi  agra/1.jpg"
            }, {
                _id: "goa",
                name: "Goa",
                image: "../img/destination/all/goa/1.jpg"
            }, {
                _id: 1,
                name: "Jaipur",
                image: "../img/destination/all/jaipur/1.jpg"
            }, {
                _id: 1,
                name: "Jaisalmer",
                image: "../img/destination/all/jaisalmer/1.jpg"
            }, {
                _id: 1,
                name: "Jammu and Kashmir",
                image: "../img/destination/all/jammu and Kashmir/1.jpg"
            }, {
                _id: 1,
                name: "Kovalam",
                image: "../img/destination/all/kovalam/1.jpg"
            }, {
                _id: 1,
                name: "Kumarakom",
                image: "../img/destination/all/kumarakom/1.jpg"
            }, {
                _id: 1,
                name: "Leh and Ladakh",
                image: "../img/destination/all/leh and ladakh/1.jpg"
            }, {
                _id: 1,
                name: "Madurai",
                image: "../img/destination/all/madurai/1.jpg"
            }, {
                _id: 1,
                name: "Manali",
                image: "../img/destination/all/manali/1.jpg"
            }, {
                _id: 1,
                name: "Munnar",
                image: "../img/destination/all/munnar/1.jpg"
            }, {
                _id: 1,
                name: "Mussourie  Rishikesh",
                image: "../img/destination/all/mussourie  rishikesh/1.jpg"
            }, {
                _id: 1,
                name: "Pondicherry",
                image: "../img/destination/all/pondicherry/1.jpg"
            }, {
                _id: 1,
                name: "Shimla",
                image: "../img/destination/all/shimla/1.jpg"
            }, {
                _id: 1,
                name: "Sikkim  Gangtok",
                image: "../img/destination/all/sikkim  gangtok/1.jpg"
            },
            {
                _id: 1,
                name: "Thekkady",
                image: "../img/destination/all/thekkady/1.jpg"
            },
            {
                _id: 1,
                name: "Udaipur",
                image: "../img/destination/all/udaipur/1.jpg"
            },
            {
                _id: 1,
                name: "Vythiri",
                image: "../img/destination/all/vythiri/1.jpg"
            }

        ];

        $scope.six_dest = [{
                _id: 1,
                name: "Amritsar Chandigarh",
                image: "../img/destination/all/amritsar chandigarh/1.jpg"
            }, {
                _id: 2,
                name: "Andaman And Nicobar Island",
                image: "../img/destination/all/andaman and nicobar island/1.jpg"
            }, {
                _id: 3,
                name: "Coorg Kabini",
                image: "../img/destination/all/coorg  kabini/1.jpg"
            }, {
                _id: 4,
                name: "Darjeeling",
                image: "../img/destination/all/darjeeling/1.jpg"
            }, {
                _id: 5,
                name: "Delhi Agra",
                image: "../img/destination/all/delhi  agra/1.jpg"
            },
            {
                _id: 6,
                name: "Goa",
                image: "../img/destination/all/goa/1.jpg"
            }
        ]

        $scope.allDestination = $scope.six_dest;
        $scope.popularDestination = [
            [{
                    _id: "1",
                    name: "Goa",
                    image: "../img/destination/popular/goa.jpg"
                },
                {
                    _id: "2",
                    name: "kovalam",
                    image: "../img/destination/popular/kovalam.jpg"
                }
            ],
            [{
                    _id: "3",
                    name: "Chandigarh",
                    image: "../img/destination/popular/chandigarh.jpg"
                },
                {
                    _id: "4",
                    name: "Manali",
                    image: "../img/destination/popular/manali.jpg"
                }
            ],
            [{
                    _id: "5",
                    name: "Udaipur",
                    image: "../img/destination/popular/udaipur.jpg"
                },
                {
                    _id: "6",
                    name: "kumarakom",
                    image: "../img/destination/popular/kumarakom.jpg"
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
    .controller('CustomDestCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/customdestination.html");
        $scope.currentStateId = $stateParams.id;
        TemplateService.title = $scope.currentStateId; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        console.log($stateParams);

        // custom destination code here
    })
    .controller('ActivityCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/activity.html");
        TemplateService.title = "Activity"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.allactiv = [{
                _id: "amritsar",
                name: "Amritsar Chandigarh",
                image: "../img/destination/all/amritsar chandigarh/1.jpg"
            }, {
                _id: "andaman",
                name: "Andaman And Nicobar Island",
                image: "../img/destination/all/andaman and nicobar island/1.jpg"
            }, {
                _id: "coorg",
                name: "Coorg Kabini",
                image: "../img/destination/all/coorg  kabini/1.jpg"
            }, {
                _id: "darjeeling",
                name: "Darjeeling",
                image: "../img/destination/all/darjeeling/1.jpg"
            }, {
                _id: "delhi_agra",
                name: "Delhi Agra",
                image: "../img/destination/all/delhi  agra/1.jpg"
            }, {
                _id: "goa",
                name: "Goa",
                image: "../img/destination/all/goa/1.jpg"
            }, {
                _id: 1,
                name: "Jaipur",
                image: "../img/destination/all/jaipur/1.jpg"
            }, {
                _id: 1,
                name: "Jaisalmer",
                image: "../img/destination/all/jaisalmer/1.jpg"
            }, {
                _id: 1,
                name: "Jammu and Kashmir",
                image: "../img/destination/all/jammu and Kashmir/1.jpg"
            }, {
                _id: 1,
                name: "Kovalam",
                image: "../img/destination/all/kovalam/1.jpg"
            }, {
                _id: 1,
                name: "Kumarakom",
                image: "../img/destination/all/kumarakom/1.jpg"
            }, {
                _id: 1,
                name: "Leh and Ladakh",
                image: "../img/destination/all/leh and ladakh/1.jpg"
            }, {
                _id: 1,
                name: "Madurai",
                image: "../img/destination/all/madurai/1.jpg"
            }, {
                _id: 1,
                name: "Manali",
                image: "../img/destination/all/manali/1.jpg"
            }, {
                _id: 1,
                name: "Munnar",
                image: "../img/destination/all/munnar/1.jpg"
            }, {
                _id: 1,
                name: "Mussourie  Rishikesh",
                image: "../img/destination/all/mussourie  rishikesh/1.jpg"
            }, {
                _id: 1,
                name: "Pondicherry",
                image: "../img/destination/all/pondicherry/1.jpg"
            }, {
                _id: 1,
                name: "Shimla",
                image: "../img/destination/all/shimla/1.jpg"
            }, {
                _id: 1,
                name: "Sikkim  Gangtok",
                image: "../img/destination/all/sikkim  gangtok/1.jpg"
            },
            {
                _id: 1,
                name: "Thekkady",
                image: "../img/destination/all/thekkady/1.jpg"
            },
            {
                _id: 1,
                name: "Udaipur",
                image: "../img/destination/all/udaipur/1.jpg"
            },
            {
                _id: 1,
                name: "Vythiri",
                image: "../img/destination/all/vythiri/1.jpg"
            }

        ];

        $scope.six_activ = [{
                _id: 1,
                name: "Amritsar Chandigarh",
                image: "../img/destination/all/amritsar chandigarh/1.jpg"
            }, {
                _id: 2,
                name: "Andaman And Nicobar Island",
                image: "../img/destination/all/andaman and nicobar island/1.jpg"
            }, {
                _id: 3,
                name: "Coorg Kabini",
                image: "../img/destination/all/coorg  kabini/1.jpg"
            }, {
                _id: 4,
                name: "Darjeeling",
                image: "../img/destination/all/darjeeling/1.jpg"
            }, {
                _id: 5,
                name: "Delhi Agra",
                image: "../img/destination/all/delhi  agra/1.jpg"
            },
            {
                _id: 6,
                name: "Goa",
                image: "../img/destination/all/goa/1.jpg"
            }
        ]

        $scope.allactivity = $scope.six_activ;
        $scope.viewMoreActiv = function () {
            $scope.activeshow = true;
            $scope.allactivity = $scope.allactiv;
        };


        $scope.viewLessActiv = function () {
            $scope.activeshow = false;
            $scope.allactivity = $scope.six_activ;
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