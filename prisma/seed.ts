import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    const user1 = await prisma.user.upsert({
      where: { discordId: '297864485996068864' },
      update: {},
      create: {
        id: '654bc096e930afe02a9bdd90',
        discordId: '297864485996068864',
        username: 'garlandkey',
        avatar: '86eff9813511d8173f0f0ff9d16ac340',
        guilds: {
          create: [
            {
              guildId: '735923219315425401',
              name: 'Learn w/ Leon & Friends',
              icon: '53699ec733437642a02dd3deb3e54f77',
              owner: false,
              permissions: 104189505,
              permissions_new: '533235326373441',
              features: [
                'NEWS',
                'TEXT_IN_VOICE_ENABLED',
                'BANNER',
                'PREVIEW_ENABLED',
                'ROLE_ICONS',
                'MEMBER_PROFILES',
                'MEMBER_VERIFICATION_GATE_ENABLED',
                'NEW_THREAD_PERMISSIONS',
                'COMMUNITY_EXP_LARGE_GATED',
                'SEVEN_DAY_THREAD_ARCHIVE',
                'DISCOVERABLE',
                'ENABLED_DISCOVERABLE_BEFORE',
                'INVITE_SPLASH',
                'VANITY_URL',
                'CHANNEL_ICON_EMOJIS_GENERATED',
                'AUTO_MODERATION',
                'GUILD_ONBOARDING',
                'ANIMATED_BANNER',
                'THREE_DAY_THREAD_ARCHIVE',
                'PARTNERED',
                'GUILD_ONBOARDING_HAS_PROMPTS',
                'GUILD_WEB_PAGE_VANITY_URL',
                'COMMUNITY',
                'VIP_REGIONS',
                'ANIMATED_ICON',
                'PRIVATE_THREADS',
                'SOUNDBOARD',
              ],
            },
          ],
        },
      },
    });

    const user2 = await prisma.user.upsert({
      where: { discordId: '297864485996068666' },
      update: {},
      create: {
        id: '6554236119f386e77defe3e4',
        discordId: '297864485996068666',
        username: 'fakeuser',
        avatar: '86eff9813511d8173f0f0ff9d16ac666',
        guilds: {
          create: [
            {
              guildId: '735923219315425401',
              name: 'Learn w/ Leon & Friends',
              icon: '53699ec733437642a02dd3deb3e54f77',
              owner: false,
              permissions: 104189505,
              permissions_new: '533235326373441',
              features: [
                'NEWS',
                'TEXT_IN_VOICE_ENABLED',
                'BANNER',
                'PREVIEW_ENABLED',
                'ROLE_ICONS',
                'MEMBER_PROFILES',
                'MEMBER_VERIFICATION_GATE_ENABLED',
                'NEW_THREAD_PERMISSIONS',
                'COMMUNITY_EXP_LARGE_GATED',
                'SEVEN_DAY_THREAD_ARCHIVE',
                'DISCOVERABLE',
                'ENABLED_DISCOVERABLE_BEFORE',
                'INVITE_SPLASH',
                'VANITY_URL',
                'CHANNEL_ICON_EMOJIS_GENERATED',
                'AUTO_MODERATION',
                'GUILD_ONBOARDING',
                'ANIMATED_BANNER',
                'THREE_DAY_THREAD_ARCHIVE',
                'PARTNERED',
                'GUILD_ONBOARDING_HAS_PROMPTS',
                'GUILD_WEB_PAGE_VANITY_URL',
                'COMMUNITY',
                'VIP_REGIONS',
                'ANIMATED_ICON',
                'PRIVATE_THREADS',
                'SOUNDBOARD',
              ],
            },
          ],
        },
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
