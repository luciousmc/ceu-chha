import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const studentData: Prisma.StudentCreateInput[] = [
  {
    first_name: 'Marlon',
    middle_initial: 'L',
    last_name: 'Clay',
    birth_date: '05/16/1984',
    ssn: '5469851425',
    address: '147 Briarwood',
    city: 'Irvine',
    state: 'CA',
    zipcode: '92715',
    email: 'imcool@Imthebest.com',
    phone_number: '714-470-3829',
  },
  {
    first_name: 'Shey',
    middle_initial: 'L',
    last_name: 'Maloles',
    birth_date: '10/31/1996',
    ssn: '4587596321',
    address: '123 Santa Maria',
    city: 'Mission Viejo',
    state: 'CA',
    zipcode: '91175',
    email: 'sheynanigans@Imthebest.com',
    phone_number: '949-958-2751',
  },
  {
    first_name: 'Greg',
    middle_initial: 'L',
    last_name: 'Walters',
    birth_date: '12/26/1990',
    ssn: '7516324545',
    address: '23 Yo mama Lane',
    city: 'Uhh',
    state: 'CA',
    zipcode: '92715',
    email: 'babygweg@cwy.com',
    phone_number: '1-800-gweggys',
  },
];

const classData = [
  {
    topic: 'Dealing with Mental Illness',
    platform: 'Zoom',
    date: {
      create: [
        {
          date: '12/22/2022',
          am_pm: 'AM',
        },
        {
          date: '11/02/2022',
          am_pm: 'PM',
        },
        {
          date: '09/06/2022',
          am_pm: 'AM',
        },
        {
          date: '07/22/2022',
          am_pm: 'AM',
        },
        {
          date: '10/15/2022',
          am_pm: 'PM',
        },
      ],
    },
  },
];

studentData.forEach((studentInfo) => {
  prisma.student.create({
    data: studentInfo,
  });
});
