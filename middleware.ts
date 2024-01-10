import { withAuth } from "next-auth/middleware";

// https://next-auth.js.org/configuration/nextjs#pages
export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/",
  },
});

// Pages where this will run:
// https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/dashboard/:path*"] };
