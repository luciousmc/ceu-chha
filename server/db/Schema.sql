DROP TABLE IF EXISTS classes, students, registered_classes;
DROP TYPE IF EXISTS class_platform, class_status;

CREATE TYPE class_platform AS ENUM ('Zoom', 'On-site');
CREATE TYPE class_status AS ENUM ('Unpaid', 'Paid');

CREATE TABLE classes (
  class_id    SERIAL            primary key,
  topic       varchar(80)       unique not null,
  date        date              ARRAY,
  am_pm       varchar(2)        not null
);

CREATE TABLE registered_classes (
  registered_classes_id   serial            primary key,
  class_id                integer           not null,
  student_id              integer           not null,
  platform                class_platform    not null,
  status                  class_status      not null
);

CREATE TABLE students (
  student_id        serial         primary key,
  first_name        varchar(20)    not null,
  middle_initial    varchar(1),
  last_name         varchar(20)    not null,
  ssn               varchar(15)    unique not null,
  email             varchar(30)    unique,
  phone_number      varchar(15)    not null,
  street_address    varchar(60)    not null,
  city              varchar(30)    not null,
  state             varchar(2)     not null,
  zipcode           varchar(12)    not null,
  work_name         varchar(30),
  work_address      varchar(60),
  work_city         varchar(30),
  work_state        varchar(2),
  work_zipcode      varchar(12),
  cna_number        varchar(12),
  cna_exp_date      date,
  chha_number       varchar(12),
  chha_exp_date     date
);