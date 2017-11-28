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
    .controller('headerCtrl', function ($scope, $rootScope, TemplateService, NavigationService, $timeout, $uibModal,$state) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        
});
  $scope.showmsg=false;
    $scope.submit = function (data) {
            console.log("submiting...",data)
                 console.log("submiting...")
            console.log("data",data)
            if (data) {
                console.log("cartData")
                    console.log("detailForm.$valid")
                    NavigationService.submitEnquiry(data, function (data) {
                        console.log("data is",data)
                        if (data.data.data=="validationfailed") {
                           $scope.showmsg=true;
                        
                        }else{
                             $scope.mycart=false;
                           $scope.cartData={};
                           $scope.showmsg=false;
                             $state.reload()

                        }
                        console.log(data)
                  });
            
            }
        };

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
                    "description": "Amritsar is home to the spectacular Golden Temple, Sikhism's holiest shrine and one of India’s most serene and humbling sights. The same cannot be said for the hyperactive streets surrounding the temple, but they're a delight to walk through for a sensory overload of sights, sounds and smells. Chandigarh shows itself off to global travellers much like greater India would wish to be seen – prosperous, comfortable and cosmopolitan.",
                    "content": "A glimpse of the popular places to visit in Amritsar Chandigarh",
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
                    "description": "With breathtakingly beautiful coastline, lush forested interior, fantastic diving possibilities and a far-flung location, the Andaman Islands are a perfect place to ramble around or simply chill out on sun-toasted beaches. ",
                    "content": "A glimpse of the popular places to visit in Andaman And Nicobar Island",
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
                    "description": "Blessed with scenic charm and picturesque views, Coorg tourism will present you with some of the best opportunities to enjoy your holidays. This famous wildlife destination has a rich variety of flora and fauna making it a gorgeous tourist spot.  ",
                    "content": "A glimpse of the popular places to visit in Coorg Kabini",
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
                    "description": "Spread in ribbons over a steep mountain ridge, surrounded by emerald-green tea plantations and towered over by majestic Khangchendzonga, Darjeeling is the definitive Indian hill station and is arguably West Bengal’s premier attraction.",
                    "content": "A glimpse of the popular places to visit in Darjeeling",
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
                    "description": "Delhi is a city where time travel is feasible. Step aboard your time machine (the sleek and efficient metro) and you can go from Old Delhi, where labourers haul sacks of spices and jewellers weigh gold on dusty scales, to modern New Delhi, with its colonial-era parliament buildings and penchant for high tea.The magical allure of the Taj Mahal draws tourists to Agra like moths to a wondrous flame. ",
                    "content": "A glimpse of the popular places to visit in Delhi Agra",
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
                    "description": "Pint-sized Goa is more than beaches and trance parties. A kaleidoscopic blend of Indian and Portuguese cultures, sweetened with sun, sea, sand, seafood and spirituality, there's nowhere in India quite like it.",
                    "content": "A glimpse of the popular places to visit in Goa",
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
                    "description": "Enthralling, historical Jaipur, Rajasthan’s capital, is the gateway to India’s most flamboyant state. It is a sea of palace windows. ",
                    "content": "A glimpse of the popular places to visit in Jaipur",
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
                    "description": "The fort of Jaisalmer is a breathtaking sight: a massive sandcastle rising from the sandy plains like a mirage from a bygone era. No place better evokes exotic camel-train trade routes and desert mystery. Beneath the ramparts, particularly to the north, the narrow streets of the old city conceal magnificent havelis, all carved from the same golden-honey sandstone as the fort – hence Jaisalmer’s designation as the Golden City.",
                    "content": "A glimpse of the popular places to visit in Jaisalmer",
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
                    "description": "The state of Jammu & Kashmir (J&K) brings together three incredibly different worlds. Hindu Jammu and Katra, in the south, are the state's rail hubs and a major draw for domestic pilgrims. Muslim Kashmir is India's Switzerland, attracting hordes of local tourists seeking cool summer air, alpine scenery and Srinagar’s romantic houseboat accommodation.",
                    "content": "A glimpse of the popular places to visit in Jammu and Kashmir",
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
                    "description": "Once a calm fishing village clustered around its crescent beaches, Kovalam competes with Varkala as Kerala’s most developed resort. The touristy main stretch, Lighthouse Beach, has hotels and restaurants built up along the shore, while Hawa Beach to the north is usually crowded with day trippers heading straight from the taxi stand to the sand.",
                    "content": "A glimpse of the popular places to visit in Kovalam",
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
                    "description": "Kumarakom, on the shore of vast Vembanad Lake – Kerala's largest lake – is an unhurried backwater village with a smattering of dazzling top-end sleeping options and a renowned bird sanctuary. You can arrange houseboats through Kumarakom’s less-crowded canals, but expect to pay considerably more than in Alleppey.",
                    "content": "A glimpse of the popular places to visit in Kumarakom",
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
                    "description": "Himalayan land of Ladakh, which for most foreigners is J&K’s greatest attraction. Its disarmingly friendly, ethno-linguistically Tibetan people are predominantly Buddhist; their timeless monasteries are set between arid canyons and soaring peaks, while emerald-green villages nestle photogenically in highland deserts. ",
                    "content": "A glimpse of the popular places to visit in Leh and Ladakh",
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
                    "description": "Chennai may be the capital of Tamil Nadu, but Madurai claims its soul. Madurai is Tamil-born and Tamil-rooted, one of the oldest cities in India, a metropolis that traded with ancient Rome and was a great capital long before Chennai was even dreamed of.",
                    "content": "A glimpse of the popular places to visit in Madurai",
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
                    "description": "Surrounded by high peaks in the beautiful green Beas valley, with mountain adventures beckoning from all directions, Manali is a year-round magnet. Backpackers come to hang out in the hippie villages around the main town; adventurers come for trekking, climbing, rafting and skiing; Indian families and honeymooners come for the mountain air and a taste of snow on the Rohtang La pass.",
                    "content": "A glimpse of the popular places to visit in Manali",
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
                    "description": "The rolling hills around Munnar, South India's largest tea-growing region, are carpeted in emerald-green tea plantations, contoured, clipped and sculpted like ornamental hedges. The low mountain scenery is magnificent – you’re often up above the clouds watching veils of mist clinging to the mountaintops. Munnar town itself is a scruffy, traffic-clogged administration centre, not unlike a North Indian hill station, but wander just a few kilometres out of town and you’ll be engulfed in a sea of a thousand shades of green.",
                    "content": "A glimpse of the popular places to visit in Munnar",
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
                    "description": "Perched on a ridge 2km high, the 'Queen of Hill Stations' vies with Nainital as Uttarakhand’s favourite holiday destination. When the mist clears, views of the green Doon Valley and the distant white-capped Himalayan peaks are superb, and in the hot months the cooler temperatures and fresh mountain air make a welcome break from the plains below. Rishikesh has been a magnet for spiritual seekers. Most of this action is north of the main town, where the exquisite setting on the fast-flowing Ganges, surrounded by forested hills, is conducive to meditation and mind expansion. In the evening, an almost supernatural breeze blows down the valley, setting temple bells ringing as sadhus ('holy' men), pilgrims and tourists prepare for the nightly ganga aarti (river worship ceremony). ",
                    "content": "A glimpse of the popular places to visit in Mussourie Rishikesh",
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
                    "description": "Hotels, restaurants and ‘lifestyle’ shops sell a seductive vision of the French-subcontinental aesthetic, enhanced by Gallic creative types and Indian artists and designers. Thus Pondy’s vibe: less faded colonial-era ville, more bohemian-chic, New Age–meets–Old World hang-out on the international travel trail.  ",
                    "content": "A glimpse of the popular places to visit in Pondicherry",
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
                    "description": "Strung out along a 12km ridge, with steep forested hillsides falling away in all directions, the Himachal capital is a good appetite-whetter for the awe-inspiring mountain tracts of the state's interior. Shimla is one of India's most popular hill resorts, buzzing with a happy flow of Indian vacationers and full of relics of its previous life as the summer capital of British India.The long, winding main street, the Mall, runs east and west just below the spine of the hill. South of it, the maze-like alleys of the bustling bazaar cascade steeply down to traffic-infested Cart Rd.   ",
                    "content": "A glimpse of the popular places to visit in Shimla",
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
                    "description": "The meditative, mural-filled traditional monasteries of Tibetan Buddhism coexist with Hindu shrines of the ever-growing Nepali community, both religions creating some astonishing latter-day mega-sculptures to adorn the skyline. Irreverent, cheerful and pleasantly boisterous, Sikkim’s modern capital is layered along a precipitous mountain ridge, descending the hillside in steep tiers.there are countless viewpoints with panoramas that encompass plunging green valleys and, if you're lucky weather-wise, glimpses of Khangchendzonga on the distant skyline.  ",
                    "content": "A glimpse of the popular places to visit in Sikkim Gangtok",
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
                    "description": "It is firmly established on both the Indian and foreigner tourist trails and has a typical boat cruise that doesn't scream 'wildlife experience', but if you dig deeper and do a trek led by a tribal villager, the hills and jungle scenery make for a rewarding visit.  ",
                    "content": "A glimpse of the popular places to visit in Thekkady",
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
                    "description": "Fantastical palaces, temples, havelis and countless narrow, crooked, timeless streets add the human counterpoint to the city’s natural charms. For the visitor there's the tranquillity of boat rides on the lake, the bustle and colour of ancient bazaars, a lively arts scene, the quaint old-world feel of its better hotels, endless tempting shops and some lovely countryside to explore on wheels, feet or horseback.",
                    "content": "A glimpse of the popular places to visit in Udaipur",
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
                    "content": "A glimpse of the popular places to visit in Vythiri",
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