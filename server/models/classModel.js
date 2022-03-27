const db = require('../db');

class Class {
  constructor(props) {
    this.topic = props.topic;
    this.am_pm = props.am_pm;
    this.date = props.date;
    this.platform = props.platform;
    this.status = props.status;
  }

  /**
   * Get all classes from the database
   * @returns list of class objects
   */
  static async getClasses() {
    const classes = await db.query('SELECT * FROM classes');
    const result = classes.rows.map((classItem) => {
      return new Class(classItem);
    });

    return result;
  }

  /**
   * Create a class to be added to the database
   * @param {object} class class to be added
   * @param {string} class.topic The topic of the class
   * @param {string} class.date The date the class will be taken
   * @param {string} class.am_pm Morning or Evening Class
   * @param {string} class.platform Where the class will be held
   * @param {string} class.status One of 'Paid' or 'Unpaid'
   * @returns the created class
   */
  static async createClass({ topic, date, am_pm, platform, status }) {
    const q = `
      INSERT INTO classes (class_id, topic, date, am_pm, platform, status)
      VALUES (default, $1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [topic, date, am_pm, platform, status];
    const createdClass = await db.query(q, values);

    return new Class(createdClass.rows[0]);
  }
}

module.exports = Class;
