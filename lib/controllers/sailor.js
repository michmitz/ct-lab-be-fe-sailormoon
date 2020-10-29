const { Router } = require('express');
const Sailor = require('../models/sailor');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Sailor
      .insert(req.body)
      .then(sailor => res.send(sailor))
      .catch(next);
  })
