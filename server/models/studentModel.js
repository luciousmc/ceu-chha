const db = require('../db');

class Student {
  constructor(student) {
    this.student_id = student.id;
    this.first_name = student.first_name;
    this.middle_initial = student.middle_initial;
    this.last_name = student.last_name;
    this.ssn = student.ssn;
    this.email = student.email;
    this.phone_number = student.phone_number;
    this.cna_number = student.cna_number;
    this.cna_exp_date = student.cna_exp_date;
    this.chha_number = student.chha_number;
    this.chha_exp_date = student.chha_exp_date;
  }

  /**
   * Register a student to the platform
   * @param {object} student
   * @param student.id Student Id
   * @param student.first_name First Name
   * @param student.middle_initial Middle initial
   * @param student.last_name Last Name
   * @param student.ssn Social Security Number
   * @param student.email Email Address
   * @param student.phone_number Student's contact number
   * @param student.cna_number Student's CNA license number
   * @param student.cna_exp_date Expiration date of student's CNA license
   * @param student.chha_number Student's CHHA license number
   * @param student.chha_exp_date Expiration date of student's CHHA license
   * @returns
   */
  static async register(student) {
    const q = `
      INSERT INTO students
        (id, first_name, middle_initial, last_name, ssn, email, phone_number, cna_number,
        cna_exp_date, chha_number, chha_exp_date)
      VALUES (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
    `;
    const values = [
      student.id,
      student.first_name,
      student.middle_initial,
      student.last_name,
      student.ssn,
      student.email,
      student.phone_number,
      student.cna_number,
      student.cna_exp_date,
      student.chha_number,
      student.chha_exp_date,
    ];

    const result = await db.query(q, values);

    return new Student(result.rows[0]);
  }
}

module.exports = Student;
