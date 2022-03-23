CREATE TYPE class_platform AS ENUM ('Zoom', 'On-site');
CREATE TYPE class_status AS ENUM ('Unpaid', 'Paid');

CREATE TABLE classes (
  class_id    SERIAL            primary key,
  topic       varchar(80)       not null,
  date        date              not null,
  am_pm       varchar(2)        not null,
  platform    class_platform    not null,
  status      class_status      not null
);

CREATE TABLE students (
  student_id        serial         primary key,
  first_name        varchar(20)    not null,
  middle_initial    varchar(1)     not null,
  last_name         varchar(20)    not null,
  ssn               varchar(10)    not null,
  email             varchar(30)    unique        not null,
  phone_number      varchar(10)    not null,
  cna_number        varchar(12),
  cna_exp_date      date,
  chha_number       varchar(12),
  chha_exp_date     date,
  class_id          integer        not null
);