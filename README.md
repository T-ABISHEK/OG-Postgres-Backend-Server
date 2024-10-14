🚀 OG Postgres Backend Server
Welcome to the OG Postgres Backend Server, built using NestJS and Prisma ORM for smooth and efficient database management. This server is connected to a PostgreSQL database and currently includes a basic user management template.

📦 Tech Stack
NestJS: A progressive Node.js framework for building scalable server-side applications.
Prisma: Modern database toolkit for TypeScript and Node.js, simplifying database access.
PostgreSQL: The world's most advanced open-source relational database.

📁 Features
User Management Template: Includes a simple user model to get you started with user-based functionalities.

Note: This is a starter template, and additional features and models can be built on top of this easily.

⚙️ Setup & Installation
Follow the steps below to set up and run the backend server locally:

1. Clone the Repository
Start by cloning the repository to your local machine:

`git clone <your-repository-url>`
`cd OG-Postgres-Backend-Server`

2. Install Dependencies
Once inside the project directory, install the required packages by running:

`npm install`

3. Set Up PostgreSQL
Ensure you have a PostgreSQL instance running on your machine or use a cloud service. Create a .env file in the root directory and configure your database connection as follows:

`DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<your-database-name>?schema=public"`
Replace <username>, <password>, and <your-database-name> with your actual PostgreSQL credentials.

4. Run Database Migrations
Once the database connection is set, apply the Prisma migrations to sync the schema:

`npx prisma migrate dev`

5. Start the Server
Finally, run the backend server with the following command:

`npm run start:dev`
The server should now be running locally at http://localhost:3000.

6. API Endpoints
You can access the user-related endpoints to test the current template setup:

GET /user: Fetch the list of all users
POST /user: Create a new user (requires a static api-key)

🔧 Development Workflow
Prisma Studio: For easy database management, run the following command to launch Prisma Studio:
`npx prisma studio`
This will give you a visual interface to explore and manipulate your database.

🛠 Next Steps
Expand the user model and add additional fields as needed.
Implement more models and relationships to extend the functionality.
Secure endpoints and add authentication, authorization logic, and other middleware as needed.

🤝 Contributing
We welcome contributions to improve this backend template! Feel free to fork the repository, create a new branch, and submit a pull request.
