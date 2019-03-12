var express = require("express");
var router = express.Router();

let buildMockData = () => {
  return [
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
  ];
};

let isNumeric = str => {
  try {
    parseInt(str);

    return true;
  } catch (error) {
    return false;
  }
};

/* GET users listing. */
router.get("/", function(req, res, next) {
  let users = buildMockData();

  res.status(200).json({ users });
});

/* GET user by ID */
router.get("/:id", function(req, res, next) {
  let users = buildMockData();

  if (!req.params.id) {
    res.status(422).json({
      message: "ID is required."
    });
    return;
  }

  if (!isNumeric(req.params.id)) {
    res.status(422).json({
      message: "ID should be a number."
    });
    return;
  }

  let user = users.find(u => u.id === parseInt(req.params.id));

  if (user) {
    res.status(200).json({ user });
    return;
  }

  res.status(404).json({
    message: "Item not found."
  });
});

module.exports = router;
