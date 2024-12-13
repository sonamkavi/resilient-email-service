import { MockProviderA } from "./providers/MockProviderA";
import { MockProviderB } from "./providers/MockProviderB";
import { RateLimiter } from "./utils/RateLimiter";

export class EmailService {
  private providers = [new MockProviderA(), new MockProviderB()];
  private rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute
  private sentEmails = new Set<string>();

  async sendEmail(
    to: string,
    subject: string,
    body: string,
    retries = 3
  ): Promise<void> {
    const emailKey = `${to}-${subject}-${body}`;

    if (this.sentEmails.has(emailKey)) {
      console.log("Duplicate email detected. Skipping send.");
      return;
    }

    if (!this.rateLimiter.allowRequest()) {
      throw new Error("Rate limit exceeded. Try again later.");
    }

    for (let i = 0; i < retries; i++) {
      for (const provider of this.providers) {
        try {
          await provider.sendEmail(to, subject, body);
          this.sentEmails.add(emailKey);
          console.log("Email sent successfully.");
          return;
        } catch (error) {
          console.error((error as Error).message);
        }
      }
      await this.sleep(2 ** i * 1000); // Exponential backoff
    }

    console.error("All retries and providers failed.");
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
