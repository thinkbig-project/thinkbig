![thinkbig-logo](https://github.com/thinkbig-project/thinkbig/assets/3108516/8cb08abe-0d51-47a2-9b01-6d504ae16929)

This is the public repository for the thinkbig web app.

---

If you're here from **_100 Devs_** & want to contribute, thank you! Please reach out to me here:

* [Discord](https://discordapp.com/users/297864485996068864)
* [Email](mailto:code@garlandkey.com)

---

## Why?

In 2022, [Leon Noel](https://github.com/leonnoel) taught thousands of individuals from across the globe how to code and get a job as a software engineer in the tech industry through [100Devs](100devs.org). The group was so large and diverse regarding lifestyle, responsibilities, scheduling, and timezones that many of us had trouble getting help when we had time to receive it.

## What is thinkbig?

A web app that works as a companion to the **_Learn w/ Leon & Friends_** Discord server. For the MVP, the goal will be to have the following functionality:

### Log in: 

* Log in to [thinkbig.project](https://thinkbig.project) using Discord's OAuth2
* A websocket connection will allow the app to track your status on discord.
* The app will verify that you're a member of the **_Learn w/ Leon & Friends_** Discord server. If you're not, it will pass you to another page (for now, probably [100devs.org](https://100devs.org)).

### Setup:

Upon account creation, an account setup page will appear.

1. The user will be prompted to choose from an array of tags to describe the skill level for which they are willing to provide help to others (e.g. html-intermediate, css-intermediate, js-beginner, node-beginner).
2. The user will also be prompted to pick an availability schedule. These time slots will be used to indiate when the user is able to receive and/or provide help.

### Help Request Management:

Upon setup completion, the user is passed to the dashboard, where they will be able to create, read, update and delete their own help requests, or look through existing help requets from others.

**Help request modal:**
* Help requests will currently be made from within the app. (After the mvp is complete, we'll work with 100maintainers to see about integrating this into the existing help channels.)
* The help requests will prompt the user in a way that creates a useful help ticket.
* There will be tags that will dictate which inputs are displayed in the help ticket modal.
* **Example:** The selected help request tags chosen are 'node.js' & 'looking-for-study-group'. The inputs might ask which class you're on and ask to confirm time blocks that you're available. 
* **Example:** The selected help request tags chosen are 'assignment' 'stuck' 'node'. The inputs might ask the assignment number, a description of the current beahvior, a description of the expected behavior, a link to the repo, codepen, or markdown of the code in question.

**Help request lists:**

There will be two tabs. One for your requests, and one for everyone else's.
* Your tab will show all of the active requests, who is currently helping you (if anyone), and who is available to help you, with links to reach out to each of them on Discord (NOBODY SHOULD BE ABLE TO COMMUNICATE DIRECTLY THROUGH THIS APP).
* The other tab will show all of the open tickets where your availability and skills match. It will show who the contact is and whether or not they're online.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
