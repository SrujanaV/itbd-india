var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        excel: "User Email",
        unique: true
    },
    mobile: {
        type: String,
    },
    groupsize: {
        type: String,
        default: ""
    },
    message: {
        type: String,

    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Enquiry', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {


// saveEnquiry: function (data, callback) {
//         console.log(data);
//         var Enquiry = this(data);
//         if (data._id) {
//             this.findOneAndUpdate({
//             }, data).exec(function (err, updated) {
//                 if (err) {
//                     console.log(err);
//                     callback(err, null);
//                 } else if (updated) {
//                     callback(null, updated);
//                 } else {
//                     callback(null, {});
//                 }
//             });
//         } else {
//             Enquiry.save(function (err, created) {
//                 if (err) {
//                     callback(err, null);
//                 } else if (created) {
//                     callback(null, created);
//                 } else {
//                     callback(null, {});
//                 }
//             });
//         }
//     },
      saveMailData: function (data, callback) {
          console.log("data inside api",data)
        async.waterfall([
                function (cbWaterfall) {
                    Enquiry.saveData(data, function (err, complete) {
                        console.log("compalte",complete)
                        if (err) {
                            console.log("err",err)
                            cbWaterfall(err, null);
                        } else {
                            if (_.isEmpty(complete)) {
                                 console.log("emaplty",complete)
                                cbWaterfall(null,complete );
                            } else {
                                console.log("complete", complete);
                                cbWaterfall(null, complete);
                            }
                        }
                    });
                },
                function (complete, cbWaterfall1) {
                    var emailData = {};
                    emailData.name = data.name;
                    emailData.emailFrom = data.email;
                    emailData.from = data.email;
                    emailData.message = data.message;
                    emailData.groupsize = data.groupsize;
                    emailData.mobile = data.mobile;
                    emailData.email = "intimebydesign@gmail.com";
                    emailData.filename = "mail.ejs";
                    emailData.subject = "Enquiry";
                    console.log("emaildata", emailData);

                    Config.email(emailData, function (err, emailRespo) {
                        if (err) {
                            console.log("---------",err);
                            cbWaterfall1(null, err);
                        } else if (emailRespo) {
                            cbWaterfall1(null, emailRespo);
                        } else {
                            cbWaterfall1(null, "Invalid data");
                        }
                    });
                },
            ],
            function (err, data2) {
                if (err) {
                    console.log("************",err);
                    callback(null, "validationfailed");
                } else if (data2) {
                    if (_.isEmpty(data2)) {
                        callback(null, []);
                    } else {
                        callback(null, data2);
                    }
                }
            });
            
    },

};
module.exports = _.assign(module.exports, exports, model);