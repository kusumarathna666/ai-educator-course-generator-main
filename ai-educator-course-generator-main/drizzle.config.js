/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:CQI0UkNiehL8@ep-cold-snow-a5odzvmg-pooler.us-east-2.aws.neon.tech/AI-Course-Generator?sslmode=require',
    }
  };