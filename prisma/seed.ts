import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    const user1 = await prisma.user.upsert({
      where: { email: 'rando1@email.com' },
      update: {},
      create: {
        id: '654bc096e930afe02a9bdd91',
        name: 'rando1',
        email: 'rando1@email.com',
        image: 'https://cdn.discordapp.com/avatars/fake/user1.png',
      },
    });

    const user2 = await prisma.user.upsert({
      where: { email: 'rando2@email.com' },
      update: {},
      create: {
        id: '349de396e930afe02a9ebb25',
        name: 'rando2',
        email: 'rando2@email.com',
        image: 'https://cdn.discordapp.com/avatars/fake/user2.png',
      },
    });
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
