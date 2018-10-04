/**
 * Created by ryanpan on 2018-04-25.
 */
module.exports = function (app) {
  app.use(function (err, req, res, next) {
    console.log(err)

    // more error will need to add here
    return res.status(500).json({
      status: 500,
      message : "unexpected server error"
    });

  });
};
