myApp.factory('NavigationService', function ($http) {
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
        submitEnquiry: function (myForm, callback) {
            console.log("inside navigaton")
            $http({
                url: adminurl + 'Enquiry/saveMailData',
                method: 'POST',
                data: myForm
            }).then(callback);
        },
          saveMail: function (myForm, callback) {
            $http({
                url: adminurl + 'EmailInfo/save',
                method: 'POST',
                data: myForm
            }).then(callback);
        },
    };
});