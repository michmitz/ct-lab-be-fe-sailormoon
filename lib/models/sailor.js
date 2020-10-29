const pool = require('../utils/pool');

module.exports = class Sailor {
  id;
  sailorName;
  realName;
  description;
  attack;
  zodiacSign;
  imageUrl;

  constructor(row) {
    this.id = row.id;
    this.sailorName = row.sailor_name;
    this.realName = row.real_name;
    this.description = row.description;
    this.attack = row.attack;
    this.zodiacSign = row.zodiac_sign;
    this.imageUrl = row.image_url;
  }

  static async insert(sailor) {
    const { rows } = await pool.query(`
      INSERT into sailors (sailor_name, real_name, description, attack, zodiac_sign, image_url) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`,
      [sailor.sailorName, sailor.realName, sailor.description, sailor.attack, sailor.zodiacSign, sailor.imageUrl]
    );

    return new Sailor(rows[0]);
  }
};
