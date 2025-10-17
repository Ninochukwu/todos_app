import { User } from "../models/user.model.js";
import { Todo } from "../models/todo.model.js";
import { Project } from "../models/project.model.js";
import { Team } from "../models/team.model.js";
import { Notification } from "../models/notification.model.js";
import { TimeBlock } from "../models/timeblock.model.js";
import { SequelizeAdapter } from '../adapters/sequelize.adapter.js';

const sequelize = new SequelizeAdapter();

const data = {
  users: [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      password: "Password123!", // hash in real app
      role: "user",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      password: "Password123!",
      role: "user",
    },
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "AdminPass123!",
      role: "admin",
    },
  ],

  projects: [
    {
      name: "Productivity App",
      description: "Build the To-Do backend with integrations",
      userId: 1, // belongs to Alice
    },
    {
      name: "School Work",
      description: "Finish assignments and research",
      userId: 2, // belongs to Bob
    },
  ],

  teams: [
    {
      name: "Development Team",
      description: "Handles API and backend work",
    },
    {
      name: "Design Team",
      description: "Responsible for UI/UX",
    },
  ],

  todos: [
    {
      title: "Finish backend API",
      description: "Implement authentication and routes",
      status: "pending",
      due_date: "2025-09-10",
      userId: 1,
      projectId: 1,
    },
    {
      title: "Write Postman tests",
      description: "Check all routes with Postman",
      status: "in-progress",
      due_date: "2025-09-05",
      userId: 2,
      projectId: 2,
    },
    {
      title: "Integrate Google Calendar",
      description: "Sync with third-party API",
      status: "completed",
      due_date: "2025-09-01",
      userId: 1,
      projectId: 1,
    },
  ],

  notifications: [
    {
      message: "Task 'Finish backend API' is due soon!",
      type: "reminder",
      userId: 1,
    },
    {
      message: "You were added to Development Team",
      type: "info",
      userId: 2,
    },
  ],

  timeBlocks: [
    {
      start_time: "2025-09-01T09:00:00Z",
      end_time: "2025-09-01T11:00:00Z",
      task: "Work on backend routes",
      userId: 1,
      todoId: 1,
    },
    {
      start_time: "2025-09-02T14:00:00Z",
      end_time: "2025-09-02T16:00:00Z",
      task: "Prepare Postman tests",
      userId: 2,
      todoId: 2,
    },
  ],
};

const seed = async () => {
  console.info(" 🌱 Starting To-Do App seeding...");

  try {
    await sequelize.authenticate();
    console.info(" 🔑 Database connection successful");
    await sequelize.sync({ force: true }); // reset tables

    await sequelize.transaction(async (transaction) => {
      // Users
      const users = await User.bulkCreate(data.users, { transaction });
      console.info(` 👤 Seeded ${users.length} users`);

    
      const projects = await Project.bulkCreate(data.projects, { transaction });
      console.info(` 📂 Seeded ${projects.length} projects`);

    
      const teams = await Team.bulkCreate(data.teams, { transaction });
      console.info(` 👥 Seeded ${teams.length} teams`);

    
      const todos = await Todo.bulkCreate(data.todos, { transaction });
      console.info(` ✅ Seeded ${todos.length} todos`);

    
      const notifications = await Notification.bulkCreate(data.notifications, { transaction });
      console.info(` 🔔 Seeded ${notifications.length} notifications`);


    console.info(" 🌱 Seeding completed successfully");
    process.exit(0);
  },
  catch (error) {
    console.error(" 🚨 Seeding failed:", error);
    process.exit(1);
  }
};

seed();
