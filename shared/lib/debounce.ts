export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  timeoutMs: number,
): (...args: Parameters<T>) => void {
  return function perform(this: any, ...args: Parameters<T>) {
    let previousCall = this.lastCall as number | undefined;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer as NodeJS.Timeout);
    }

    this.lastCallTimer = setTimeout(
      () => callback(...args),
      timeoutMs,
    ) as unknown as NodeJS.Timeout;
  };
}
