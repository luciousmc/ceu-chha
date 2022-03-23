const db = require('../db');

class classModel {
  constructor(props) {
    this.topic = props.topic;
    this.ampm = props.am_pm;
    this.date = props.date;
    this.platform = props.platform;
    this.status = props.status;
  }
  static async getClasses() {
    const res = await db.query('SELECT * FROM classes');
    return res.rows;
  }
}

module.exports = classModel;
