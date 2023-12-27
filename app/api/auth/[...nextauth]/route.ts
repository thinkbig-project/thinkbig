/** Resources:
 *  - https://next-auth.js.org/getting-started/example
 *  - https://next-auth.js.org/providers/discord
 *  - https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import { prisma } from '@/lib/prisma';
import { session } from '@/lib/session';

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    DiscordProvider({
      clientId: String(DISCORD_CLIENT_ID),
      clientSecret: String(DISCORD_CLIENT_SECRET),
    }),
  ],
  callbacks: {
    async signIn({ user, account }): Promise<boolean> {
      try {
        console.log('Attempting to upsert user:', user);
        // if (account?.provider !== 'discord' && !user.id) {
        // throw new Error('No profile returned from Discord');
        const result = await prisma.user.upsert({
          where: { email: user.email as string },
          create: {
            email: user.email as string,
            name: user.name as string,
            image: user.image as string,
            id: user.id as string,
          },
          update: {
            name: user.name as string,
            image: user.image as string,
          },
        });
        console.log('User saved:', result);
        const savedUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });
        console.log('Saved user in database:', savedUser);
        return true;
      } catch (error) {
        console.error('Error during user upsert:', error);
        throw new Error('Failed to save user information. Please try again.');
      }
    },
    session,
    async jwt({ token, user }) {
      if (user) {
        try {
          const userAccount = await prisma.user.findUnique({
            where: { email: user.email as string },
          });
          console.log('userAccount: \n', userAccount);
          if (!user) {
            throw new Error('No user found');
          }
          token.id = user.id;
        } catch (error) {
          console.log('Error finding user:', error);
          throw new Error('Failed to find user.');
        }
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };