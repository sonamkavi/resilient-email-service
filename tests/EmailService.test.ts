import { EmailService } from "../src/EmailService";

describe("EmailService", () => {
  it("should send email successfully", async () => {
    const emailService = new EmailService();
    await expect(
      emailService.sendEmail("test@example.com", "Test Subject", "Test Body")
    ).resolves.not.toThrow();
  });
});
