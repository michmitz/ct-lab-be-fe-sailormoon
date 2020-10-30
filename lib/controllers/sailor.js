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

  .get('/', (req, res, next) => {
    Sailor
      .find()
      .then(sailors => res.send(sailors))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Sailor
      .findById(req.params.id)
      .then(sailor => res.send(sailor))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Sailor
      .update(req.params.id, req.body)
      .then(sailor => res.send(sailor))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Sailor
      .delete(req.params.id)
      .then(sailor => res.send(sailor))
      .catch(next);
  });
