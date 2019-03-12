var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.status(200).json({
    users: [
      {
        id: 1,
        first_name: "Allan",
        last_name: "Chua"
      },
      {
        id: 2,
        first_name: "Pogs",
        last_name: "Chua"
      },
      {
        id: 3,
        first_name: "Camille",
        last_name: "Gonzales"
      },
      {
        id: 4,
        first_name: "John",
        last_name: "Richardson"
      }
    ]
  });
});

module.exports = router;
