export class MockProviderB {
  async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
    console.log(`MockProviderB: Sending email to ${to}`);
    // Simulate a success or failure (50% chance of failure)
    if (Math.random() < 0.5) {
      throw new Error("MockProviderB failed to send email.");
    }
    return true;
  }
}
