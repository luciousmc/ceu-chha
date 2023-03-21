import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const students = await prisma.student.createMany({
    data: [
      {
        first_name: 'Marlon',
        middle_initial: 'L',
        last_name: 'Clay',
        password: 'password',
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
        password: 'password',
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
        password: 'passsword',
        ssn: '7516324545',
        address: '23 Yo mama Lane',
        city: 'Uhh',
        state: 'CA',
        zipcode: '92715',
        email: 'babygweg@cwy.com',
        phone_number: '1-800-gweggys',
      },
    ],
  });

  const class1 = await prisma.class.create({
    data: {
      topic: 'How to deal with Meds',
      date: {
        create: [
          {
            date: '2023-03-21T08:00:00:00',
            am_pm: 'AM',
          },
          {
            date: '2023-03-21T13:00:00:00',
            am_pm: 'PM',
          },
          {
            date: '2023-03-21T08:00:00:00',
            am_pm: 'AM',
          },
          {
            date: '2023-03-21T08:00:00:00',
            am_pm: 'AM',
          },
          {
            date: '2023-03-21T13:00:00:00',
            am_pm: 'PM',
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
