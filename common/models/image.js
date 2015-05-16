module.exports = function(Image) {
    Image.observe('before save', function(ctx, next) {
        var data;
        if (ctx.instance) {
            data = ctx.instance;
        } else {
            data = ctx.data;
        }
        var currDate = new Date();
        if (ctx.isNewInstance) {
            data.created_at = currDate;
        }
        data.updated_at = currDate;
        next();
    });
};
