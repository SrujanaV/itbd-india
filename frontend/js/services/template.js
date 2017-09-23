myApp.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "";
    this.metadesc = "";
    this.allplaces = [{
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