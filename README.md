<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resilient Email Service</title>
</head>
<body>
  <h1>Resilient Email Service</h1>
  
  <p><strong>Description:</strong></p>
  <p>This project is a resilient email service built using TypeScript, which ensures reliable email sending with retry logic, fallback mechanisms, rate limiting, and idempotency. It simulates sending emails using mock providers and includes utility functions for handling retries and rate limits.</p>
  
  <h2>Features:</h2>
  <ul>
    <li>Retry logic for failed email sends (up to 3 retries)</li>
    <li>Fallback mechanism to switch providers when the primary provider fails</li>
    <li>Idempotency to prevent sending duplicate emails</li>
    <li>Rate limiting to avoid hitting provider's rate limits</li>
    <li>Unit tests using Jest to verify the functionality</li>
  </ul>
  
  <h2>Folder Structure:</h2>
  <pre>
  resilient-email-service/
  ├── src/
  │   ├── EmailService.ts       # Core email service logic
  │   ├── providers/
  │   │   ├── MockProviderA.ts  # First email provider (mock)
  │   │   └── MockProviderB.ts  # Second email provider (mock)
  │   └── utils/
  │       ├── retry.ts          # Retry logic
  │       └── rateLimit.ts      # Rate limiting logic
  ├── tests/
  │   └── EmailService.test.ts  # Unit tests for email service
  ├── jest.config.ts            # Jest configuration for tests
  ├── package.json              # Project metadata and dependencies
  ├── tsconfig.json             # TypeScript configuration
  └── README.md                 # Project description and usage instructions
  </pre>
  
  <h2>Installation:</h2>
  <p>To install and run the project, follow the steps below:</p>
  <ol>
    <li>Clone the repository:</li>
    <pre>git clone <a href="https://github.com/yourusername/resilient-email-service.git">https://github.com/yourusername/resilient-email-service.git</a></pre>
    <li>Navigate to the project directory:</li>
    <pre>cd resilient-email-service</pre>
    <li>Install dependencies:</li>
    <pre>npm install</pre>
    <li>Run the email service:</li>
    <pre>npm run start</pre>
    <li>Run tests:</li>
    <pre>npm test</pre>
  </ol>
  
  <h2>Usage:</h2>
  <p>The email service simulates sending emails using mock providers. It retries sending emails in case of failure and falls back to a secondary provider when the primary one fails. The service also enforces rate limits to avoid sending too many emails in a short time.</p>
  
  <h2>Example Output:</h2>
  <pre>
  MockProviderA: Sending email to test@example.com
  Email sent successfully.
  </pre>
  
  <h2>Running Tests:</h2>
  <p>Unit tests are written using Jest and can be run using the following command:</p>
  <pre>npm test</pre>
  <p>The tests verify the email sending logic, retry mechanisms, fallback mechanisms, and rate limiting behavior.</p>
  
  <h2>Technologies Used:</h2>
  <ul>
    <li>TypeScript</li>
    <li>Node.js</li>
    <li>Jest (for testing)</li>
    <li>Mock Email Providers</li>
  </ul>
  
  <h2>Contributing:</h2>
  <p>If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure that any contributions follow the existing code style and include tests to verify your changes.</p>
  
  <h2>License:</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
  
</body>
</html>
