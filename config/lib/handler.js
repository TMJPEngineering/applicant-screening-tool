'use strict';

module.exports = function(app) {
    /* Error Handler */
    app.use(function(err, req, res, next) {
        next();
    });
};
