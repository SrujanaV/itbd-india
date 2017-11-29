module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    search1: function (req, res) {
        console.log("inside search api EailInfo")
        EmailInfo.search1(req.body, res.callback);
    },
};
module.exports = _.assign(module.exports, controller);