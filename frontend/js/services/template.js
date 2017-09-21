myApp.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "";
    this.metadesc = "";
    this.allplaces = [{
            _id: "amritsar_chandigarh",
            name: "Amritsar Chandigarh",
            image: "../img/destination/all/amritsar chandigarh/1.jpg",
            popular: true,

        }, {
            _id: "andaman_nicobar",
            name: "Andaman And Nicobar Island",
            image: "../img/destination/all/andaman and nicobar island/1.jpg",
            popular: false
        }, {
            _id: "coorg",
            name: "Coorg Kabini",
            image: "../img/destination/all/coorg  kabini/1.jpg",
            popular: false

        }, {
            _id: "darjeeling",
            name: "Darjeeling",
            image: "../img/destination/all/darjeeling/1.jpg",
            popular: true
        }, {
            _id: "delhi_agra",
            name: "Delhi Agra",
            image: "../img/destination/all/delhi  agra/1.jpg"
        }, {
            _id: "goa",
            name: "Goa",
            image: "../img/destination/all/goa/1.jpg"
        }, {
            _id: "jaipur",
            name: "Jaipur",
            image: "../img/destination/all/jaipur/1.jpg"
        }, {
            _id: "jaisalmer",
            name: "Jaisalmer",
            image: "../img/destination/all/jaisalmer/1.jpg"
        }, {
            _id: "jammu_kashmir",
            name: "Jammu and Kashmir",
            image: "../img/destination/all/jammu and Kashmir/1.jpg"
        }, {
            _id: "kovalam",
            name: "Kovalam",
            image: "../img/destination/all/kovalam/1.jpg",
            popular: true
        }, {
            _id: "kumarakom",
            name: "Kumarakom",
            image: "../img/destination/all/kumarakom/1.jpg"
        }, {
            _id: "leh_ladakh",
            name: "Leh and Ladakh",
            image: "../img/destination/all/leh and ladakh/1.jpg",
            popular: true
        }, {
            _id: "madurai",
            name: "Madurai",
            image: "../img/destination/all/madurai/1.jpg"
        }, {
            _id: "manali",
            name: "Manali",
            image: "../img/destination/all/manali/1.jpg",
            popular: true
        }, {
            _id: "munnar",
            name: "Munnar",
            image: "../img/destination/all/munnar/1.jpg"
        }, {
            _id: "mussourie_rishikesh",
            name: "Mussourie  Rishikesh",
            image: "../img/destination/all/mussourie  rishikesh/1.jpg"
        }, {
            _id: "pondicherry",
            name: "Pondicherry",
            image: "../img/destination/all/pondicherry/1.jpg"
        }, {
            _id: "shimla",
            name: "Shimla",
            image: "../img/destination/all/shimla/1.jpg"
        }, {
            _id: "sikkim_gangtok",
            name: "Sikkim  Gangtok",
            image: "../img/destination/all/sikkim  gangtok/1.jpg"
        },
        {
            _id: "thekkady",
            name: "Thekkady",
            image: "../img/destination/all/thekkady/1.jpg"
        },
        {
            _id: "udaipur",
            name: "Udaipur",
            image: "../img/destination/all/udaipur/1.jpg",
            popular: true
        },
        {
            _id: "vythiri",
            name: "Vythiri",
            image: "../img/destination/all/vythiri/1.jpg"
        }

    ];



    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.header = "views/template/header.html";
        this.menu = "views/template/menu.html";
        this.content = "views/content/content.html";
        this.footer = "views/template/footer.html";
        this.footermenu = "views/template/footermenu.html"
    };

    this.getHTML = function (page) {
        this.init();
        var data = this;
        data.content = "views/" + page;
        return data;
    };

    this.init();

});