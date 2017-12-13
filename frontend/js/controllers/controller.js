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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
            "img": "img/frontbanner/1.jpg",
            "name":"Munnar"
        }, {
            "img": "img/frontbanner/2.jpg",
            "name":"Udaipur"
        }, {
            "img": "img/frontbanner/3.jpg",
            "name":"Manali"
        }, {
            "img": "img/frontbanner/4.jpg",
            "name":"Delhi Agra"
        }, {
            "img": "img/frontbanner/5.jpg",
            "name":"Kumarakom"
        }, {
            "img": "img/frontbanner/6.jpg",
            "name":"Mussourie Rishikesh"
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
    .controller('headerCtrl', function ($scope, $state, $rootScope, TemplateService, NavigationService, $timeout, $uibModal,$state) {
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
        console.log($stateParams);
        //default
        switch ($scope.currentStateId) {
            case "Amritsar Chandigarh":
                //code
                $scope.getCustom = {
                    "banner": "img/india/amritsar_chandigarh/banner.jpg",
                    "description": "Amritsar is home to the spectacular Golden Temple, Sikhism's holiest shrine and one of India’s most serene and humbling sights. The Golden Temple stands there in simple majesty, the gilded splendor of its paneling, dome and minarets shining in the morning light, silhouetted softly in the water and etched gently across the city escape. Amritsar, literally meaning 'holy pool of nectar' is the spiritual and cultural centre of the Sikh Religion. Baisakhi festival brings out Amritsar's resplendent face with it's finest food, clothes and merry-making. This place is also famous for its Jallianwala Bagh massacre and its proximity to Wagah Border. A popular outing is to the Wagah checkpost on the Indo-Pakistan border where crowds throng to see the change of guards ceremony and the flag hoisting and lowering, all done with great skill and precision. Within an hour's drive from Amritsar are several Sikh religious sites to visit. Several historical Gurdwaras like Baba Bakala, Goindwal Sahib, Tarn Taran, and Baba Sahib, attract the devout. The drive takes one through the heart of rural Punjab with lush green paddy fields, tiny villages, and robust farmers.Chandigarh shows itself off to global travellers much like greater India would wish to be seen – prosperous, comfortable and cosmopolitan. It is counted amongst some of the finest examples of well planned cities with good quality modern architecture. Serenity and a city are two diametrically opposite concepts, which however, get belied in the 'City Beautiful'. Chandigarh is a rare epitome of modernization co-existing with nature's preservation. It is here that the trees and plants are as much a part of the construction plans as the buildings and the roads. The sharp skyline of the Shivalik Hills and the faint image of an old temple dedicated to Goddess Chandi protectively looms over the city. The town is a beautiful blend of architecture, design, natural beauty, gardens, heritage and urbanization. Some of the places that a tourist must visit in Chandigarh include the Rock garden which is an absolute marvel of art and design, Rose garden, Pinjore gardens and the Government Museum and Sukhna Lake along with a few others. Chandigarh is also the starting point for many trips in North India like Dalhousie, Dharamshala, Shimla, Manali as well as Kasauli. Also most people take flight to Chandigarh, spend two days and take off to the cooler climbs of India.",
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
                    "description": "With breathtakingly beautiful coastline, lush forested interior, fantastic diving possibilities and a far-flung location, the Andaman Islands are a perfect place to ramble around or simply chill out on sun-toasted beaches. Shimmering turquoise waters are surrounded by primeval jungle and mangrove forest, and its sugar-white beaches melt under glorious flame-and-purple sunsets. These islands are covered with lush forests and endless varieties of exotic flora and fauna. Incredible corals and marine life, crystal clear water and mangrove-lined creeks lure travellers to these picturesque islands. while the sandy beaches form as nesting homes to turtles. Cellular jail- Once a brutal prison, it has now been converted into a museum that depicts the entire struggle behind Indian Independence. This place is a must visit for everyone - Indian or not. The journey of Indian Independence will fill your heart with patriotism. Andamans have the most exotic beaches. These are Wandoor beach, Elephant Beach, Sitapur Beach, Bharatpur Beach, Laxmanpur Beach and Radhanagar Beach. Each of these beaches offers a peaceful ambience that would make you want to spend days here. These beaches also give the opportunity of trying out a number of water sports such as Scuba Diving, Snorkeling, Sea Walk etc. Havelock island is a picturesque natural paradise with beautiful white sandy beaches, rich coral reefs and lush green forest. Jolly Buoy Island is very famous for under water corals and the pristine clear beach. Visitors can enjoy the underwater coral view through snorkeling, Scuba diving or from the glass bottom boat. Neil is a tiny but a beautiful island. With unexplored coral reefs, brilliant bio-diversity, white sandy beaches and tropical forest and vegetation, it is one of the hot tourist spots in the Andamans.",
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
                    "description": "Coorg has earned itself the rightful title of ‘adventure capital of Karnataka’. It has a diverse topography, with mountains, coffee plantations, thick forests, paddy fields and rivers. These form a suitable backdrop to a number of activities like rafting, kayaking, canoeing, trekking, camping and microlight flying. Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. To enjoy the best views that Coorg has to offer, you must visit Raja's Seat - a small garden adorned with the flowers affording a view of the majestic hills of the Western Ghats. If there is one thing that defines Coorg the best, then it has to be the infinite regal fields of coffee plantations. Dubare Elephant camp is a project undertaken by forest department and Jungle Lodges and Resorts Ltd. This camp has plenty of elephants which are trained under naturalists. The visitor can not only observe and learn but also participate in various activities involving Elephants. As one of Karnataka’s amazing natural attractions, Abbey Falls in Coorg is a destination that you just cannot miss exploring in all seasons. The brilliant view of the waterfall from the hanging bridge running opposite to the waterfall is a sight to cherish. ‘An erstwhile hunting lodge of the Mysore Maharaja’ – this description of the Kabini River Lodge is enough to conjure visions of grandeur and luxury. Once a private hunting area for the British, this famous wildlife destination has a rich variety of flora and fauna making it a gorgeous tourist spot. The nature walk in the forest is a must if you want to reconnect with the surroundings and nature all over again. Plan the boat ride in the morning to catch the misty backwaters of Kabini, as well as for excellent bird sighting. In the afternoon, head out on the jungle safari and count your blessings for that elusive glimpse of the big cats. At the break of dawn, a beautiful blue calm envelopes the horizon, reflecting over the backwaters of Kabini. Every morning, you can choose between a jungle 4×4 safari or a boat ride on the Kabini River backwaters. It’s a tough choice really; given both are such invigorating experiences. The Kabini River’s backwaters and its banks offer stunning landscapes, besides being a birdwatcher’s delight. As the day gets brighter, the hues of pink and blue melt away into fifty (or more!) shades of resplendent, rich green. As the boat heads back to the lodge, after a two-hour-long ride, the jungles gradually give way to fields. ",
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
                    "description": "Spread in ribbons over a steep mountain ridge, surrounded by emerald-green tea plantations and towered over by majestic Khangchendzonga, Darjeeling is the definitive Indian hill station and is arguably West Bengal’s premier attraction. When you aren’t gazing open-mouthed at Khangchendzonga, you can explore colonial-era architecture, visit Buddhist monasteries, and spot snow leopards and red pandas at the nearby zoo. The adventurous can arrange a trek to Singalila Ridge or hire a mountain bike for a guided ride around the hilltops. Here are countless tourist places here including great viewpoints offering magnificent views of Kanchenjunga snow peaks, Buddhist monasteries, historical churches, temples, rolling tea estates on mountain slopes, museums, art galleries, parks & gardens, waterfalls, cable car ride offering you stunning views of the mountain landscapes and tea gardens below, and more.  Meanwhile the steep and winding bazaars below the town bustle with an array of Himalayan products and faces from across Sikkim, Bhutan, Nepal and Tibet. And finally, when energies start to flag, a good, steaming Darjeeling brew is never far away.",
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
                    "description": "Delhi is a city where time travel is feasible. Step aboard your time machine (the sleek and efficient metro) and you can go from Old Delhi, where labourers haul sacks of spices and jewellers weigh gold on dusty scales, to modern New Delhi, with its colonial-era parliament buildings and penchant for high tea. Then on to the future: Gurgaon, a satellite city of skyscraping offices and glitzy malls. New Delhi is a vivid blend of traditions, cultural diversity, political importance as well as architectural brilliance. It bridges its historical glory with the current modern era. It is a popular tourist spot and also houses multiple theatres and centres of performing arts. The Qutub Minar, India Gate, Rashtrapati Bhawan, Delhi has numerous monuments showcasing both architectural and historical magnificence. ISKCON Temple, Akshardham Temple and the Lotus temple are some other beautiful buildings here. However, Delhi's magic lies in the Chandni Chowk area near the Jama Masjid with the old bazaars bustling and chirping with thousands of visitors. Delhi's food is equally important to describe why people keep coming back to this wonderful city. From 5 star hotels and restaurants to the Parathe Wali Gali, Delhi has an amazing food culture.Agra is the majesty of Taj. The magical allure of the Taj Mahal draws tourists to Agra like moths to a wondrous flame. And despite the hype, it’s every bit as good as you’ve heard. But the Taj is not a stand-alone attraction. The legacy of the Mughal empire has left a magnificent fort and a liberal sprinkling of fascinating tombs and mausoleums; and there’s also fun to be had in the bustling chowks (marketplaces). Agra straddles a large bend along the holy Yamuna River. The fort and the Taj, 2km apart, both overlook the river on different parts of the bend. The tomb of the great Mughal emperor Akbar is worth visiting. Akbar's tomb is a mixture of many architectural styles and completely different from earlier Mughal Buildings. Visit to this monuments of Agra is essential to make your Agra tour complete. Built with red sandstone Agra Fort is a mixture of the Islamic and Hindu styles of architecture. Agra Tourism would be incomplete without this monument.",
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
                    "description": "Pint-sized Goa is more than beaches and trance parties. A kaleidoscopic blend of Indian and Portuguese cultures, sweetened with sun, sea, sand, seafood and spirituality, there's nowhere in India quite like it. Goa’s biggest draw is undoubtedly its virtually uninterrupted string of golden-sand beaches. This shimmering strand stretches along the Arabian Sea from the tip to the toe of the state, and each of the various beaches have developed their own personalities and reputations since the hippie days of the sixties. They cater to every tropical whim: choose from backpacker Arambol or bolder, brasher Baga; from the palm-fringed sands of Palolem to hippie market bliss at Anjuna or lovely, laid-back Mandrem; from expansive groomed sands in front of fancy five-star resorts or hidden crescent coves, where the only footprints will be the scuttling crabs' and your own. For many visitors Baga beach is Goa’s party strip, where the ravers and hippies have made way for modern thumping nightclubs and wall-to-wall drinking. To the north, Baga beach consists of jostling shacks, peppered with water sports, and late-night clubs along infamous Tito’s Lane. South Goa is the more serene half of the state, and for many travellers that’s the attraction. South Goa’s coast is a series of resorts that range from the five-star hotel strips of Cavelossim and the village feel of Benaulim, to the backpacker-friendly beach hut bliss of Palolem, Patnem and Agonda.",
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
                    "description": "Enthralling, historical Jaipur, Rajasthan’s capital, is the gateway to India’s most flamboyant state. It is a sea of palace windows. The city’s colourful, chaotic streets ebb and flow with a heady brew of old and new. A trip to one of the most popular cities in this state will encapsulate the entire Rajasthani experience in one go: magnificent forts and palaces, traditional eateries, exotic jewellery, textiles and handicrafts. Jaipur has two distinct parts: The old or walled city – better known as the Pink City – and the New City. At the city’s heart, the City Palace continues to house the former royal family; the Jantar Mantar, the royal observatory, maintains a heavenly aspect; and the honeycomb Hawa Mahal gazes on the bazaar below. The top offers stunning views over Jantar Mantar and the city. And just out of sight, in the arid hill country surrounding the city, is the fairy-tale grandeur of Amber Fort, Jaipur’s star attraction. Your shopping bags will never seem large enough in Jaipur’s Bapu Bazaar. You can’t get the variety of silver jewellery, handmade footwear, or multicoloured leheriya saris anywhere else in the country. Neither can you get the choice of cotton textiles, bangles, blue pottery, bags, cushion covers, bedspreads – the list is endless. The magnificent honey-hued fort-palace of Amer rises from a rocky mountainside about 11km from Jaipur. If you walk or ride an elephant up, you will enter through Suraj Pol, which leads to Jaleb Chowk, where returning armies would display their war booty to the populace.",
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
                    "description": "Jaisalmer is adorned with lakes, ornate Jain temples, havelis and castles clad in golden yellowish sandstone. Climb on to the camel saddle and make your way through this desert or camp under the night sky in this golden land for an unforgettable experience. The fort of Jaisalmer is a breathtaking sight: a massive sandcastle rising from the sandy plains like a mirage from a bygone era. The city’s most prominent landmark is the Jaisalmer Fort, also called Sonar Qila (Golden Fort). Unlike most other forts in India, Jaisalmer Fort is not just a tourist attraction. It houses shops, hotels and ancient havelis (homes) where generations continue to live. No place better evokes exotic camel-train trade routes and desert mystery. Beneath the ramparts, particularly to the north, the narrow streets of the old city conceal magnificent havelis, all carved from the same golden-honey sandstone as the fort – hence Jaisalmer’s designation as the Golden City. One of the largest havelis in Rajasthan, Patwon ki Haveli is a cluster of five small havelis. The haveli is dipped in an enchanting shade of gold and instantly draws your attention to the intricacy of its architecture.",
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
                    "description": "The state of Jammu & Kashmir (J&K) brings together three incredibly different worlds. Jammu and Katra, in the south, are the state's rail hubs and a major draw for domestic pilgrims. Kashmir is India's Switzerland, attracting hordes of local tourists seeking cool summer air, alpine scenery and Srinagar’s romantic houseboat accommodation. Ringed by an arc of green mountains, Srinagar's greatest drawcard is mesmerizingly placid Dal Lake, on which a bright array of stationary houseboats form a colourful scene and a unique opportunity for romantic chill-outs. Famous Mughal gardens are strung out over several kilometres around the lake's less urbanised eastern shore; these contrast with a fascinatingly chaotic old city centre that is topped by a fortress and dotted with historic wooden mosques. If you're looking for extreme skiing in high-altitude powder, Gulmarg might be the dream winter sports destination you've been looking for. In warmer months two-stage gondola is overloaded by Indian tourists. Surrounded by alpine peaks, the Lidder and Sheshnag Rivers tumble down picturesque, deep-cut mountain valleys covered with giant conifers. The surrounding mountains contain many beauty spots and more than 20 lakes, to which countless guides and horsemen are more than keen to take you. This great natural beauty is Pahalgam, sprawling 4km around the river junction. It's a major resort town offering golf and rafting and is a staging point for the midsummer Amarnathji pilgrimage.",
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
                    "description": "Once a calm fishing village clustered around its crescent beaches, Kovalam competes with Varkala as Kerala’s most developed resort. The touristy main stretch, Lighthouse Beach, has hotels and restaurants built up along the shore, while Hawa Beach to the north is usually crowded with day trippers heading straight from the taxi stand to the sand. Neither beach could be described as pristine, but at less than 15km from the capital it's a convenient place to have some fun by the sea, there are some promising waves (and a surf club), and it makes a good base for ayurvedic treatments and yoga courses.",
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
                    "description": "Kumarakom, on the shore of vast Vembanad Lake – Kerala's largest lake – is an unhurried backwater village with a smattering of dazzling top-end sleeping options and a renowned bird sanctuary. You can arrange houseboats through Kumarakom’s less-crowded canals. This place has some of the top brands of Resorts from the Kumarakom Lake Resort, Taj Kumarakom, Zuri and the Coconut Lagoon, this place combines beautiful views of the river along with the backwaters. Waterscapes, the backwater resort of the Kerala Tourism Development Corporation has independent cottages built on stilts, set amidst coconut groves offering a panoramic view of the backwaters. Apart from having a vibrant cultural history, the place is bestowed by a plethora of species of flora and fauna, some of them which can be witnessed in the famous Kumarakom Bird Sanctuary, famous for the visit of the migratory birds during the season. It offers exotic sightseeing, boating and fishing experience.",
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
                    "description": "Himalayan land of Ladakh, which for most foreigners is J&K’s greatest attraction. Its disarmingly friendly, ethno-linguistically Tibetan people are predominantly Buddhist; their timeless monasteries are set between arid canyons and soaring peaks, while emerald-green villages nestle photogenically in highland deserts. Spectacularly jagged, arid mountains enfold this magical Buddhist ex-kingdom. Picture-perfect gompas (Tibetan Buddhist monasteries) dramatically crown rocky outcrops amid whitewashed stupas and mani walls. Colourful fluttering prayer flags share their spiritual messages metaphorically with the mountain breeze. Prayer wheels spun clockwise release more merit-making mantras. Gompa interiors are colourfully awash with the murals and statuary of countless bodhisattvas. Few places in India are at once so traveller-friendly and yet so enchanting and hassle-free as mountain-framed Leh. Dotted with stupas and crumbling mud brick houses, the Old Town is dominated by a dagger of steep rocky ridge topped by an imposing Tibetan-style palace and fort. The beauty and allure of Pangong lake has attracted people from all over the country and beyond. The one factor that makes this Lake so popular is the fact that it keeps changing colors. The best part about the journey is the route that leads to the lake. You have to pass through Ladakh and drive over the world’s third highest motorable mountain pass called the Chang La. The deep-cut Shayok and Nubra River Valleys offer tremendous scenery on a grand scale, with green oasis villages surrounded by thrillingly stark scree slopes, boulder fields and harsh arid mountains. There are sand dunes, monasteries, a ruined palace and – at Turtuk and Bogdang – a whole different culture (Balti) to discover. ",
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
                    "description": "Chennai may be the capital of Tamil Nadu, but Madurai claims its soul. Madurai is Tamil-born and Tamil-rooted, one of the oldest cities in India, a metropolis that traded with ancient Rome and was a great capital long before Chennai was even dreamed of.Tourists, Indian and foreign, come here for the celebrated Meenakshi Amman Temple, a dazzling maze-like structure ranking among India's greatest temples. Otherwise, Madurai, perhaps appropriately given its age, captures many of India’s glaring dichotomies: a centre dominated by a medieval temple and an economy increasingly driven by IT, all overlaid with the hustle, energy and excitement of a big Indian city and slotted into a much more manageable package than Chennai’s sprawl.",
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
                    "description": "Surrounded by high peaks in the beautiful green Beas valley, with mountain adventures beckoning from all directions, Manali is a year-round magnet. Backpackers come to hang out in the hippie villages around the main town; adventurers come for trekking, climbing, rafting and skiing; Indian families and honeymooners come for the mountain air and a taste of snow on the Rohtang La pass. It makes sense to unwind and feed up here for a few days while organising your trip into the mountains.",
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
                    "description": "Perched on a ridge 2km high, the 'Queen of Hill Stations' vies with Nainital as Uttarakhand’s favourite holiday destination. When the mist clears, views of the green Doon Valley and the distant white-capped Himalayan peaks are superb, and in the hot months the cooler temperatures and fresh mountain air make a welcome break from the plains below. Mussoorie has several interesting tourist places like The Mall which extends from Cloud’s End in the west to Rockville in the east. The Mall gives you a feeling of the old world charm. You can take time to enjoy the ropeway on the second highest peak of Mussoorie, the Gun Hill. You can get a panoramic view of the Himalayan ranges from the Gun Hill. The wonderful 4km stretch from Kurli Bazaar to Library Point called the Camel's Back Rock is a superb experience whether you travel on horseback or simply walk. Mussoorie is also known as the gateway to Yamnotri and Gangotri.Hasya yoga (laughter therapy), practise Rishikesh has been a magnet for spiritual seekers. Today it styles itself as the ‘Yoga Capital of the World’, with masses of ashrams and all kinds of yoga and meditation classes. Most of this action is north of the main town, where the exquisite setting on the fast-flowing Ganges, surrounded by forested hills, is conducive to meditation and mind expansion. In the evening, an almost supernatural breeze blows down the valley, setting temple bells ringing as sadhus ('holy' men), pilgrims and tourists prepare for the nightly ganga aarti (river worship ceremony). You can learn to play the sitar or tabla; try meditation or take a punt on crystal healing. But Rishikesh is not all spirituality and contorted limbs; it's now a popular white-water rafting centre, backpacker hang-out and Himalayan-trekking gateway. The two jhulas (bridges), dedicated to Lakshman and Ram, dominate the entire town. Triveni Ghat is the most sacred ghat in Rishikesh and is supposed to be the confluence point of the three holy rivers – Ganga, Yamuna and Saraswati. Although the Saraswati has disappeared, many believe that it still flows underground. Devotees throng here to take a dip in the river and wash away their sins. This is where the grand evening aarti takes place; even if you are not religious, the experience is a powerful one.",
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
                    "description": "The union territory of Puducherry (formerly Pondicherry; generally known as ‘Pondy’) was under French rule until 1954. Some people here still speak French (and English with French accents). Hotels, restaurants and ‘lifestyle’ shops sell a seductive vision of the French-subcontinental aesthetic, enhanced by Gallic creative types and Indian artists and designers. The internationally famous Sri Aurobindo Ashram and its offshoot just north of town, Auroville, draw large numbers of spiritually minded visitors. Thus Pondy’s vibe: less faded colonial-era ville, more bohemian-chic, New Age–meets–Old World hang-out on the international travel trail.",
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
                    "description": "Strung out along a 12km ridge, with steep forested hillsides falling away in all directions, the Himachal capital is a good appetite-whetter for the awe-inspiring mountain tracts of the state's interior. Shimla is one of India's most popular hill resorts, buzzing with a happy flow of Indian vacationers and full of relics of its previous life as the summer capital of British India. The long, winding main street, the Mall, runs east and west just below the spine of the hill. South of it, the maze-like alleys of the bustling bazaar cascade steeply down to traffic-infested Cart Rd.",
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
                    "description": "The meditative, mural-filled traditional monasteries of Tibetan Buddhism coexist with Hindu shrines of the ever-growing Nepali community, both religions creating some astonishing latter-day mega-sculptures to adorn the skyline. Irreverent, cheerful and pleasantly boisterous, Sikkim’s modern capital is layered along a precipitous mountain ridge, descending the hillside in steep tiers. There are countless viewpoints with panoramas that encompass plunging green valleys and, if you're lucky weather-wise, glimpses of Khangchendzonga on the distant skyline. Yumthang popularly known as 'Valley of Flowers' is a paradise for nature lovers with a fascinating blend of flora and fauna and breathtaking scenic beauty. There are numerous Lakes and Monasteries which make the hill station vibrant and lively. Tourists in Sikkim can visit Gangtok, Rumtek, Phodong, Pemayangtse and the Yuksom-Zongri trekking route. ",
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
                    "description": "The very sound of the word Thekkady conjures up images of elephants, unending chains of hills and spice-scented plantations. Periyar National Park, being a major attraction, is one place where you can enjoy bamboo rafting in the catchment area of Mullaiperiyar Dam, hiking, and in the midst of the wilderness, shopping! The vast region is home to bison, sambar, wild boar, langur, 900 to 1000 elephants and 35 to 40 tigers. It is firmly established on both the Indian and foreigner tourist trails and has a typical boat cruise that doesn't scream 'wildlife experience', but if you dig deeper and do a trek led by a tribal villager, the hills and jungle scenery make for a rewarding visit. Murikaddy is located around 5 km from the city and is famous for coffee and spices plantations.",
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
                    "description": "Fantastical palaces, temples, havelis and countless narrow, crooked, timeless streets add the human counterpoint to the city’s natural charms. For the visitor there's the tranquillity of boat rides on the lake, the bustle and colour of ancient bazaars, a lively arts scene, the quaint old-world feel of its better hotels, endless tempting shops and some lovely countryside to explore on wheels, feet or horseback. Lake Pichola is by far the most ethereal place around in Rajasthan and to use the word Magical is a small word to describe the pristine feeling this city can offer...surrounded by the best 5 star luxury brands of India with all of them having palaces as hotels in here are not only a must do for the rich of Indian and International guests but it's also gaining huge popularity for destination weddings.",
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
                    "description": "It is a small town and tourist destination located in the Wayanad district in the Indian state of Kerala. It is one of the three Taluks in the district with the other two being Mananthavady and Sulthan Bathery. The all season attractive weather, greenery and the terrain of this place makes Vythiri a major tourist destination in Kerala. Tourists from all parts of the world visits and stays in Vythiri to enjoy the beauty of Vythiri and other tourist destinations in Wayanad. Vythiri is 700 meters above the sea level and the weather is remarkably cooler than other parts of Wayanad. There are many resorts in Wayanad thanks to the salubrious climate here.",
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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