export class RateLimiter {
  private requests: number[] = [];
  private limit: number;
  private windowMs: number;

  constructor(limit: number, windowMs: number) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  public allowRequest(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    if (this.requests.length < this.limit) {
      this.requests.push(now);
      return true;
    }

    return false;
  }
}
