myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.enquiryheader = true;
        console.log("home ctrl called" + $scope.enquiryheader);

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
        $scope.gotoFun = function () {
            $state.go('customdestination', {
                id: $scope.goTo
            })

        }
        $scope.search = function (name) {
            $scope.goTo = name;

        }

        $scope.allplaces = [{
            name: "Amritsar Chandigarh"
        }, {
            name: "Andaman And Nicobar Island"
        }, {
            name: "Coorg Kabini"
        }, {
            name: "Darjeeling"
        }, {
            name: "Delhi Agra"
        }, {
            name: "Goa"
        }, {
            name: "Jaipur"
        }, {
            name: "Jaisalmer"
        }, {
            name: "Jammu and Kashmir"
        }, {
            name: "Kovalam"
        }, {
            name: "Kumarakom"
        }, {
            name: "Leh and Ladakh"
        }, {
            name: "Madurai"
        }, {
            name: "Manali"
        }, {
            name: "Munnar"
        }, {
            name: "Mussourie Rishikesh"
        }, {
            name: "Pondicherry"
        }, {
            name: "Shimla"
        }, {
            name: "Sikkim Gangtok"
        }, {
            name: "Thekkady"
        }, {
            name: "Udaipur"
        }, {
            name: "Vythiri"
        }];

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
                name: "Amritsar Chandigarh",
                image: "img/popular/chandigarh.jpg"
            },
            {
                name: "Goa",
                image: "img/popular/goa.jpg"
            },
            {
                name: "Manali",
                image: "img/popular/manali.jpg"
            },
            {
                name: "Udaipur",
                image: "img/popular/udaipur.jpg"
            }
        ];

        $scope.popularAttraction = [{
                name: "Delhi Agra",
                image1: "img/attraction/agra.jpg"
            },
            {
                name: "Darjeeling",
                image1: "img/attraction/darjeeling.jpg"
            },
            {
                name: "Jaisalmer",
                image1: "img/attraction/jaisalmer.jpg"
            }, {
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
    .controller('headerctrl', function ($scope, $rootScope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);

        });

        $scope.HeaderAllDest = _.chunk(TemplateService.allplaces, 8);
        var temp = _.filter(TemplateService.allplaces, ['popular', true]);
        console.log(temp);
        console.log(TemplateService.allplaces);
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
                name: "Amritsar Chandigarh",
                image: "img/india/amritsar_chandigarh/2.jpg"
            }, {
                name: "Andaman And Nicobar Island",
                image: "img/india/andaman and nicobar island/2.jpg"
            }, {
                name: "Coorg Kabini",
                image: "img/india/coorg  kabini/2.jpg"
            }, {
                name: "Darjeeling",
                image: "img/india/darjeeling/2.jpg"
            }, {
                name: "Delhi Agra",
                image: "img/india/delhi agra/2.jpg"
            }, {
                name: "Goa",
                image: "img/india/goa/2.jpg"
            }, {
                name: "Jaipur",
                image: "img/india/jaipur/2.jpg"
            }, {
                name: "Jaisalmer",
                image: "img/india/jaisalmer/2.jpg"
            }, {
                name: "Jammu and Kashmir",
                image: "img/india/jammu and Kashmir/2.jpg"
            }, {
                name: "Kovalam",
                image: "img/india/kovalam/2.jpg"
            }, {
                name: "Kumarakom",
                image: "img/india/kumarakom/2.jpg"
            }, {
                name: "Leh and Ladakh",
                image: "img/india/leh and ladakh/2.jpg"
            }, {
                name: "Madurai",
                image: "img/india/madurai/2.jpg"
            }, {
                name: "Manali",
                image: "img/india/manali/2.jpg"
            }, {
                name: "Munnar",
                image: "img/india/munnar/2.jpg"
            }, {
                name: "Mussourie Rishikesh",
                image: "img/india/mussourie rishikesh/2.jpg"
            }, {
                name: "Pondicherry",
                image: "img/india/pondicherry/2.jpg"
            }, {
                name: "Shimla",
                image: "img/india/shimla/2.jpg"
            }, {
                name: "Sikkim Gangtok",
                image: "img/india/sikkim gangtok/2.jpg"
            },
            {
                name: "Thekkady",
                image: "img/india/thekkady/2.jpg"
            },
            {
                name: "Udaipur",
                image: "img/india/udaipur/2.jpg"
            },
            {
                name: "Vythiri",
                image: "img/india/vythiri/2.jpg"
            }

        ];

        $scope.six_dest = [{
                name: "Amritsar Chandigarh",
                image: "img/india/amritsar_chandigarh/1.jpg"
            }, {
                name: "Andaman And Nicobar Island",
                image: "img/india/andaman and nicobar island/1.jpg"
            }, {
                name: "Coorg Kabini",
                image: "img/india/coorg  kabini/1.jpg"
            }, {
                name: "Darjeeling",
                image: "img/india/darjeeling/1.jpg"
            }, {
                name: "Delhi Agra",
                image: "img/india/delhi agra/1.jpg"
            },
            {
                name: "Goa",
                image: "img/india/goa/1.jpg"
            }
        ]

        $scope.allDestination = $scope.six_dest;
        $scope.popularDestination = [
            [{
                    name: "Goa",
                    image: "img/destination/popular/goa.jpg"
                },
                {
                    name: "Kovalam",
                    image: "img/destination/popular/kovalam.jpg"
                }
            ],
            [{
                    name: "Amritsar Chandigarh",
                    image: "img/destination/popular/chandigarh.jpg"
                },
                {
                    name: "Manali",
                    image: "img/destination/popular/manali.jpg"
                }
            ],
            [{
                    name: "Udaipur",
                    image: "img/destination/popular/udaipur.jpg"
                },
                {
                    name: "Kumarakom",
                    image: "img/destination/popular/kumarakom.jpg"
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
    .controller('CustomDestCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, toastr, $http, $uibModal) {
        $scope.template = TemplateService.getHTML("content/customdestination.html");
        $scope.currentStateId = $stateParams.id;
        TemplateService.title = $scope.currentStateId; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        console.log($stateParams);
        //default
        switch ($scope.currentStateId) {
            case "Amritsar Chandigarh":
                //code
                $scope.getCustom = {
                    "banner": "img/india/amritsar_chandigarh/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/amritsar_chandigarh/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/amritsar_chandigarh/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/amritsar_chandigarh/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/amritsar_chandigarh/5.jpg",
                        },
                        {
                            "number": 4,
                            "image": "img/india/amritsar_chandigarh/6.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/amritsar_chandigarh/7.jpg",
                        }
                    ],
                }
                break;
            case "Andaman And Nicobar Island":
                $scope.getCustom = {
                    "banner": "img/india/andaman and nicobar island/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/andaman and nicobar island/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/andaman and nicobar island/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/andaman and nicobar island/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/andaman and nicobar island/4.jpg",
                        }
                    ],
                }
                break;
            case "Coorg Kabini":
                $scope.getCustom = {
                    "banner": "img/india/coorg  kabini/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/coorg  kabini/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/coorg  kabini/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/coorg  kabini/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/coorg  kabini/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/coorg  kabini/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/coorg  kabini/6.jpg",
                        }
                    ],
                }
                break;
            case "Darjeeling":
                $scope.getCustom = {
                    "banner": "img/india/darjeeling/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/darjeeling/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/darjeeling/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/darjeeling/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/darjeeling/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/darjeeling/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/darjeeling/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/darjeeling/7.jpg",
                        }
                    ],
                }
                break;
            case "Delhi Agra":
                $scope.getCustom = {
                    "banner": "img/india/delhi agra/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/delhi agra/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/delhi agra/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/delhi agra/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/delhi agra/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/delhi agra/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/delhi agra/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/delhi agra/7.jpg",
                        }, {
                            "number": 7,
                            "image": "img/india/delhi agra/8.jpg",
                        },
                        {
                            "number": 8,
                            "image": "img/india/delhi agra/9.jpg",
                        },
                        {
                            "number": 9,
                            "image": "img/india/delhi agra/10.jpg",
                        }, {
                            "number": 10,
                            "image": "img/india/delhi agra/11.jpg",
                        },
                        {
                            "number": 11,
                            "image": "img/india/delhi agra/12.jpg",
                        }, {
                            "number": 12,
                            "image": "img/india/delhi agra/13.jpg",
                        }
                    ],
                }
                break;
            case "Goa":
                $scope.getCustom = {
                    "banner": "img/india/goa/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/goa/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/goa/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/goa/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/goa/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/goa/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/goa/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/goa/7.jpg",
                        }, {
                            "number": 7,
                            "image": "img/india/goa/8.jpg",
                        }
                    ],
                }
                break;
            case "Jaipur":
                $scope.getCustom = {
                    "banner": "img/india/jaipur/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/jaipur/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/jaipur/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/jaipur/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/jaipur/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/jaipur/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/jaipur/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/jaipur/7.jpg",
                        }, {
                            "number": 7,
                            "image": "img/india/jaipur/8.jpg",
                        }
                    ],
                }
                break;
            case "Jaisalmer":
                $scope.getCustom = {
                    "banner": "img/india/jaisalmer/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/jaisalmer/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/jaisalmer/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/jaisalmer/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/jaisalmer/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/jaisalmer/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/jaisalmer/6.jpg",
                        }
                    ],
                }
                break;
            case "Jammu and Kashmir":
                $scope.getCustom = {
                    "banner": "img/india/jammu and Kashmir/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/jammu and Kashmir/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/jammu and Kashmir/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/jammu and Kashmir/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/jammu and Kashmir/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/jammu and Kashmir/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/jammu and Kashmir/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/jammu and Kashmir/7.jpg",
                        },
                        {
                            "number": 7,
                            "image": "img/india/jammu and Kashmir/8.jpg",
                        }, {
                            "number": 8,
                            "image": "img/india/jammu and Kashmir/9.jpg",
                        },
                        {
                            "number": 9,
                            "image": "img/india/jammu and Kashmir/10.jpg",
                        }
                    ],
                }
                break;
            case "Kovalam":
                $scope.getCustom = {
                    "banner": "img/india/kovalam/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/kovalam/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/kovalam/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/kovalam/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/kovalam/4.jpg",
                        }
                    ],
                }
                break;
            case "Kumarakom":
                $scope.getCustom = {
                    "banner": "img/india/kumarakom/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/kumarakom/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/kumarakom/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/kumarakom/3.jpg",
                        },
                        {
                            "number": 3,
                            "image": "img/india/kumarakom/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/kumarakom/5.jpg",
                        }
                    ],
                }
                break;
            case "Leh and Ladakh":
                $scope.getCustom = {
                    "banner": "img/india/leh and ladakh/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/leh and ladakh/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/leh and ladakh/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/leh and ladakh/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/leh and ladakh/5.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/leh and ladakh/6.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/leh and ladakh/7.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/leh and ladakh/8.jpg",
                        }, {
                            "number": 7,
                            "image": "img/india/leh and ladakh/9.jpg",
                        }
                    ],
                }
                break;
            case "Madurai":
                $scope.getCustom = {
                    "banner": "img/india/madurai/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/madurai/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/madurai/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/madurai/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/madurai/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/madurai/5.jpg",
                        }, {
                            "number": 5,
                            "image": "img/india/madurai/6.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/madurai/7.jpg",
                        }
                    ],
                }
                break;
            case "Manali":
                $scope.getCustom = {
                    "banner": "img/india/manali/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/manali/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/manali/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/manali/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/manali/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/manali/5.jpg",
                        }, {
                            "number": 5,
                            "image": "img/india/manali/6.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/manali/7.jpg",
                        },
                        {
                            "number": 7,
                            "image": "img/india/manali/8.jpg",
                        }
                    ],
                }
                break;
            case "Munnar":
                $scope.getCustom = {
                    "banner": "img/india/munnar/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/munnar/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/munnar/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/munnar/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/munnar/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/munnar/5.jpg",
                        }
                    ],
                }
                break;
            case "Mussourie Rishikesh":
                $scope.getCustom = {
                    "banner": "img/india/mussourie rishikesh/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/mussourie rishikesh/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/mussourie rishikesh/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/mussourie rishikesh/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/mussourie rishikesh/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/mussourie rishikesh/5.jpg",
                        }, {
                            "number": 5,
                            "image": "img/india/mussourie rishikesh/6.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/mussourie rishikesh/7.jpg",
                        },
                        {
                            "number": 7,
                            "image": "img/india/mussourie rishikesh/8.jpg",
                        }, {
                            "number": 8,
                            "image": "img/india/mussourie rishikesh/9.jpg",
                        },
                        {
                            "number": 9,
                            "image": "img/india/mussourie rishikesh/10.jpg",
                        }
                    ],
                }
                break;
            case "Pondicherry":
                $scope.getCustom = {
                    "banner": "img/india/pondicherry/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/pondicherry/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/pondicherry/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/pondicherry/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/pondicherry/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/pondicherry/5.jpg",
                        }
                    ],
                }
                break;
            case "Shimla":
                $scope.getCustom = {
                    "banner": "img/india/shimla/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/shimla/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/shimla/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/shimla/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/shimla/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/shimla/5.jpg",
                        }, {
                            "number": 5,
                            "image": "img/india/shimla/6.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/shimla/7.jpg",
                        },
                        {
                            "number": 7,
                            "image": "img/india/shimla/8.jpg",
                        }, {
                            "number": 8,
                            "image": "img/india/shimla/9.jpg",
                        }, {
                            "number": 9,
                            "image": "img/india/shimla/10.jpg",
                        }, {
                            "number": 10,
                            "image": "img/india/shimla/11.jpg",
                        }
                    ],
                }
                break;
            case "Sikkim Gangtok":
                $scope.getCustom = {
                    "banner": "img/india/sikkim gangtok/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/sikkim gangtok/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/sikkim gangtok/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/sikkim gangtok/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/sikkim gangtok/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/sikkim gangtok/5.jpg",
                        }, {
                            "number": 5,
                            "image": "img/india/sikkim gangtok/6.jpg",
                        },
                        {
                            "number": 6,
                            "image": "img/india/sikkim gangtok/7.jpg",
                        },
                        {
                            "number": 7,
                            "image": "img/india/sikkim gangtok/8.jpg",
                        }, {
                            "number": 8,
                            "image": "img/india/sikkim gangtok/9.jpg",
                        }, {
                            "number": 9,
                            "image": "img/india/sikkim gangtok/10.jpg",
                        }
                    ],
                }
                break;
            case "Thekkady":
                $scope.getCustom = {
                    "banner": "img/india/thekkady/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/thekkady/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/thekkady/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/thekkady/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/thekkady/4.jpg",
                        }
                    ],
                }
                break;
            case "Udaipur":
                $scope.getCustom = {
                    "banner": "img/india/udaipur/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/udaipur/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/udaipur/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/udaipur/3.jpg",
                        }, {
                            "number": 3,
                            "image": "img/india/udaipur/4.jpg",
                        }, {
                            "number": 4,
                            "image": "img/india/udaipur/5.jpg",
                        },
                        {
                            "number": 5,
                            "image": "img/india/udaipur/6.jpg",
                        }, {
                            "number": 6,
                            "image": "img/india/udaipur/7.jpg",
                        }
                    ],
                }
                break;
            case "Vythiri":
                $scope.getCustom = {
                    "banner": "img/india/vythiri/banner.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
                    images: [{
                            "number": 0,
                            "image": "img/india/vythiri/1.jpg",
                        },
                        {
                            "number": 1,
                            "image": "img/india/vythiri/2.jpg",
                        },
                        {
                            "number": 2,
                            "image": "img/india/vythiri/3.jpg",
                        }
                    ],
                }
                break;
        }
        // $scope.getCustom = {
        //     banner: "img/banner.jpg",
        //     images: [{
        //             image: "img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         },
        //         {
        //             image: "../img/manali.jpg",
        //             name: "Manali"
        //         }
        //     ],
        //     accordion: [{
        //             icon: "../img/accordion/the_city.png",
        //             heading: "tab1",
        //             content: "description"
        //         },
        //         {
        //             icon: "../img/accordion/the_city.png",
        //             heading: "tab2",
        //             content: "description"
        //         },
        //         {
        //             icon: "../img/accordion/the_city.png",
        //             heading: "tab3",
        //             content: "description"
        //         },
        //         {
        //             icon: "../img/accordion/the_city.png",
        //             heading: "tab4",
        //             content: "description"
        //         }
        //     ]


        // }

        $scope.Image = function (number) {
            $scope.number = number;
            $scope.galleryImage = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/gallery.html",
                scope: $scope,
                // windowClass: 'modalWidth',
                backdropClass: 'black-drop'
            });
            $scope.closeModal = function () { // to close modals for ALL OTP
                $scope.galleryImage.close();
            };
        };
        // custom destination code here
    })
    .controller('ActivityCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/activity.html");
        TemplateService.title = "Activities"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.allactiv = [{
            "name": "BICYCLE TOUR",
            "image": "img/activities/bicycle_tour.jpg"
        }, {
            "name": "FOOTBALL",
            "image": "img/activities/football.jpg"
        }, {
            "name": "ROULETTE",
            "image": "img/activities/roulette.jpg"
        }, {
            "name": "NIGHT CLUB/DISCO",
            "image": "img/activities/nightclub.jpg"
        }, {
            "name": "PARAGLIDING",
            "image": "img/activities/parasailing.jpg"
        }, {
            "name": "SCUBA DIVING",
            "image": "img/activities/scuba_diving.jpg"
        }, {
            "name": "SKY DIVING",
            "image": "img/activities/sky_diving.jpg"
        }, {
            "name": "TRECKING",
            "image": "img/activities/trecking.jpg"
        }, {
            "name": "SNOW SKIING",
            "image": "img/activities/skiing.jpg"
        }];

    })
    .controller('WhatsHotCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/whats-hot.html");
        TemplateService.title = "Whats Hot"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.allDestination = [{
            "name": "Hat Rin Full Moon Party",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Armenia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img1.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Australia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img2.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img3.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img4.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img5.jpg",
            "location": "Koh Phangan"
        }]
        $scope.allDestination1 = [{
            "name": "Hat Rin Full Moon Party",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Armenia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img1.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Australia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img2.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img3.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img4.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img5.jpg",
            "location": "Koh Phangan"
        }]
        $scope.mySlidesss = [{
            "banner": "img/whats_hot/bachelor.jpg",
            "banner": "img/whats_hot/bachelorette.jpg"
        }]
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })
    .controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {

    })
    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });