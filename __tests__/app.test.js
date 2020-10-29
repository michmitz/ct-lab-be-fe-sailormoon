const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Sailor = require('../lib/models/sailor');

describe('recipe-lab routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a character', () => {
    return request(app)
      .post('/characters')
      .send({
        sailorName: 'Sailor Pluto',
        realName: 'Setsuna Meiou',
        description: 'The coolest character',
        attack: 'Dead Scream',
        zodiacSign: 'Scorpio',
        imageUrl: 'https://www.pngegg.com/en/png-kuyry'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          sailorName: 'Sailor Pluto',
          realName: 'Setsuna Meiou',
          description: 'The coolest character',
          attack: 'Dead Scream',
          zodiacSign: 'Scorpio',
          imageUrl: 'https://www.pngegg.com/en/png-kuyry'
        });
      });
  });
});


