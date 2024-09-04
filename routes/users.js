const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(JSON.stringify(users, null, 4)); //This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  const { params } = req;

  const user = users.find((user) => user.email === params.email);
  res.send(user); //This line is to be replaced with actual return value
});

// POST request: Create a new user
router.post("/", (req, res) => {
  // Copy the code here
  const { query } = req;

  const newUser = query;
  if (newUser) {
    users.push(newUser);
  }

  res.send(`${newUser.email} is added`); //This line is to be replaced with actual return value
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  const { params, query } = req;

  const currentUser = users.find((user) => user.email === params.email);

  if (currentUser) {
    const updatedUser = {
      ...currentUser,
      ...query,
    };
    users = users.filter((user) => user.email !== params.email);
    users.push(updatedUser);

    res.send(`${currentUser.email} updated!`); //This line is to be replaced with actual return value
  } else {
    res.send("No user found!");
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const { params } = req;
  users = users.filter((user) => user.email !== params.email);

  res.send(`${params.email} deleted`); //This line is to be replaced with actual return value
});

module.exports = router;
