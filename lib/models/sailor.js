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

  static async find() {
    const { rows } = await pool.query(
      'SELECT * FROM sailors'
    );

    return rows.map(row => new Sailor(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM sailors WHERE id=$1',
      [id]
    );

    if(!rows[0]) return null;
    else return new Sailor(rows[0]);
  }

  static async update(id, sailor) {
    const { rows } = await pool.query(
      `UPDATE sailors
       SET sailor_name=$1,
           real_name=$2,
           description=$3,
           attack=$4,
           zodiac_sign=$5,
           image_url=$6
       WHERE id=$7
       RETURNING *
      `,
      [sailor.sailorName, sailor.realName, sailor.description, sailor.attack, sailor.zodiacSign, sailor.imageUrl, id]
    );

    return new Sailor(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM sailors WHERE id=$1 RETURNING *',
      [id]
    );

    return new Sailor(rows[0]);
  }
};
