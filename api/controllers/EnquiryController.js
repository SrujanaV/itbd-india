module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

saveEnquiry: function (req, res) {
    
        if (req.body) {
            Enquiry.saveEnquiry(req.body, function (err, data) {
                if (err) {
                    res.json({
                        value: false,
                        data: err
                    });

                } else {
                    req.session.enquiry = data;
                    console.log("Enquiry Data", req.session.enquiry);
                    res.json({
                        value: true,
                        data: data
                    });
                }
            });
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
        saveMailData: function (req, res) {
            console.log("inside contyroller")
        if (req.body) {
            Enquiry.saveMailData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "User Not logged in"
            });
        }

    },


};
module.exports = _.assign(module.exports, controller);