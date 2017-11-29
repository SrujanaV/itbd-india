var schema = new Schema({
  
    email: {
        type: String,
        validate: validators.isEmail(),
           unique: true
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('EmailInfo', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
     search1: function (data, callback) {
         console.log("inside EmailInfo APi *********")
            var Model = this;
            var Const = this(data);
            var maxRow = Config.maxRow;

            var page = 1;
            if (data.page) {
                page = data.page;
            }
            var field = data.field;




            var options = {
                field: data.field,
                filters: {
                    keyword: {
                        fields: ['name'],
                        term: data.keyword
                    }
                },
                sort: {
                    asc: 'name'
                },
                start: (page - 1) * maxRow,
                count: maxRow
            };

            // if (defaultSort) {
            //     if (defaultSortOrder && defaultSortOrder === "desc") {
            //         options.sort = {
            //             desc: defaultSort
            //         };
            //     } else {
            //         options.sort = {
            //             asc: defaultSort
            //         };
            //     }
            // }

            var Search = Model.find(data.filter)

            .order(options)
                .deepPopulate()
                .keyword(options)
                .page(options, callback);

        }
};
module.exports = _.assign(module.exports, exports, model);