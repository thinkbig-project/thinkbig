# thinkBig💡

---

👋🏽 Welcome! This is the public repository for the [thinkBig](https://thinkbig.project) web app. If you're here from **_100 Devs_** ⛵ 🪵 🍕 & want to contribute, thank you! 🎉  Please reach out to @GarlandKey on [Discord](https://discordapp.com/users/297864485996068864).

---

## Why?

In 2022, [Leon Noel](https://github.com/leonnoel) taught thousands of individuals from across the globe how to code and get a job as a software engineer as part of [100Devs](100devs.org). The group was so large and diverse regarding lifestyle, responsibilities, scheduling, and timezones that many of us had trouble getting help when we had time to receive it.

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
## Mockups

![thinkbig-logo](https://github.com/thinkbig-project/thinkbig/assets/3108516/8cb08abe-0d51-47a2-9b01-6d504ae16929)


---

## Stack
* [Auth.js](https://authjs.dev/)
* [MongoDB](https://www.mongodb.com/docs/)
* [Next.js](https://nextjs.org/docs)
* [Prisma](https://www.prisma.io/docs/getting-started)
* [TailwindCSS](https://tailwindcss.com/docs/installation)
* [TypeScript](https://www.typescriptlang.org/docs/)

---

## Onboarding

### Request Permissions

Before you can begin, we need to provide you the proper permissions so that you can be assigned issues and submit pull requests.

Please reach out to @GarlandKey on [Discord](https://discordapp.com/users/297864485996068864) and provide the following:

* The Google email address (to provide access to docs).
* A link to your GitHub (allows us to provide permissions).
* Your skill level (helps us assign issues within your skill level).
* Your background (helps us assign non-coding tasks).

### Discussion

So that we have access to uninterupted video chat, we will provide you with a link to a private Discord server. Please note that the rules on this server are the same as they are in **_Learn w/ Leon & Friends_**. This server is for development and nothing else. Remain professional - there is zero tolerance regarding this.

### Protected variables

We'll need to provide you with the `.env` variables for development. Those will be stored in a google doc that will be shared with you during onboarding.

---

## Getting Started

### Pre-requisites

* Complete onboarding.
* `git` - Install globally - [here is a guide.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* `npm` - Install globally - [here is a guide.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* `pnpm` - Install globally - [here is a guide.](https://pnpm.io/installation)

### Clone the repository

```bash
git clone -b dev --single-branch https://github.com/thinkbig-project/thinkbig.git && cd thinkbig
```



### Install the dependencies

```bash
pnpm i --frozen-lockfile
```

### Run the dev server

```bash
pnpm dev
```

### View in the browser

```url
http://localhost:3000
```