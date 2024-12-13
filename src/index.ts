import { EmailService } from "./EmailService";

const emailService = new EmailService();

emailService
  .sendEmail("test@example.com", "Hello World", "This is a test email.")
  .catch((error) => console.error("Final Error:", error.message));
