# Twitter Clone

This project is a full-stack Twitter clone built using React, TailwindCSS, Next.js, Prisma, MongoDB, NextAuth, and Vercel. It features user authentication, real-time posts, likes, retweets, and a fully responsive design.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: The React framework for production.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **MongoDB**: NoSQL database for modern applications.
- **NextAuth.js**: Complete open-source authentication solution for Next.js applications.
- **Vercel**: Platform for frontend frameworks and static sites.

## Features

- User authentication (login/signup pages + user sessions)
  
  ![login](https://github.com/peter25316/twitter-clone/assets/70732959/19cefc4a-7740-4165-8646-341d7318ea69)
  ![register](https://github.com/peter25316/twitter-clone/assets/70732959/b80fd806-68d1-45ed-9a8a-710e1c921a17)

- Real-time posts creation and display
  ![post1](https://github.com/peter25316/twitter-clone/assets/70732959/992d5683-b157-47f9-b766-320d7de4d56d)
  ![post2](https://github.com/peter25316/twitter-clone/assets/70732959/e7487013-604d-4174-87ea-406fd3212583)

- Interactions like likes
  ![like](https://github.com/peter25316/twitter-clone/assets/70732959/5895535f-1e94-4db9-b3f5-7a7f91e68fe0)

  Follow
  ![follow1](https://github.com/peter25316/twitter-clone/assets/70732959/2ecfee69-9544-46cb-ab12-e948cd9002bb)
  ![follow2](https://github.com/peter25316/twitter-clone/assets/70732959/01ea5b72-d7c7-4a23-a3d1-6bb919d5d1b5)

  Edit profile
  ![edit1](https://github.com/peter25316/twitter-clone/assets/70732959/adc2acb2-9a41-4751-9eed-ea690b355001)
  ![edit2](https://github.com/peter25316/twitter-clone/assets/70732959/dd556a3f-9e5d-47e1-a4fd-04b3f9d7e963)
  ![edit3](https://github.com/peter25316/twitter-clone/assets/70732959/36b2f624-14f0-44df-a0e2-8e2e744b724f)

  
- Profile customization
- Responsive design, compatible with various devices

## Installation

To get this project running locally, follow these steps:

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/twitter-clone.git
   cd twitter-clone
  
2. Install dependencies:
  ```bash
  Copy code
  npm install
  ```
3. Set up the environment variables in .env.local:
- DATABASE_URL: Your MongoDB connection string.
- NEXTAUTH_URL: The URL of your site (used by NextAuth).

4. Run the development server:
bash
Copy code
npm run dev
