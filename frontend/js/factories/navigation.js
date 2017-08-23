myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "DESTINATIONS",
            classis: "active",
            anchor: "home",
            subnav: [{
                    name: "Bangkok",
                    classis: "active",
                    anchor: "home"
                },
                {
                    name: "Berlin",
                    classis: "active",
                    anchor: "home"
                },
                {
                    name: "Mykonos",
                    classis: "active",
                    anchor: "home"
                }
            ]
        }, {
            name: "ACTIVITIES",
            classis: "active",
            anchor: "activities",
            subnav: []
        },
        {
            name: "WHAT'S HOT",
            classis: "active",
            anchor: "whats-hot",
            subnav: []
        },

    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});