/** Resources:
 *  - https://next-auth.js.org/getting-started/example
 *  - https://next-auth.js.org/providers/discord
 *  - https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { prisma } from '@/lib/prisma';
import { session } from '@/lib/session';
// import { User as AdapterUser } from '@prisma/client';

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  // session: {
  //   strategy: 'jwt',
  // },
  providers: [
    DiscordProvider({
      clientId: String(DISCORD_CLIENT_ID),
      clientSecret: String(DISCORD_CLIENT_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }): Promise<boolean> {
      // if (account?.provider !== 'discord' && !user.id) {
      //   throw new Error('No profile returned from Discord');
      // }
      // await prisma.user.upsert({
      //   where: { discordId: (user as AdapterUser).discordId },
      //   create: {
      //     id: (user as AdapterUser).id,
      //     discordId: (user as AdapterUser).discordId,
      //     username: (user as AdapterUser).username,
      //     avatar: (user as AdapterUser).avatar,
      //   },
      //   update: {
      //     discordId: (user as AdapterUser).discordId,
      //     username: (user as AdapterUser).username,
      //     avatar: (user as AdapterUser).avatar,
      //   },
      // });
      return true;
    },
    session,
    // async jwt({ token, user, account, profile }) {
    //   if (profile) {
    //     try {
    //       const user: AdapterUser | null = await prisma.user.findUnique({
    //         where: { discordId: (profile as AdapterUser).discordId },
    //       });
    //       if (!user) {
    //         throw new Error('No user found');
    //       }
    //       token.id = user.id;
    //     } catch (error) {
    //       console.log('Error finding user:', error);
    //       throw new Error('Failed to find user.');
    //     }
    //   }
    //   return token;
    // },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
