const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require('express').Router();

const {jwtSecret} = require('../config/secrets.js');

const Users = require("./auth.model.js");

router.post('/register', (req, res) => {
  // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({token,message: `Welcome ${user.username}!`});
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function signToken(user) {
    const payload = {
      username: user.username,
    };


    const options = {
      expiresIn: "8h",
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
