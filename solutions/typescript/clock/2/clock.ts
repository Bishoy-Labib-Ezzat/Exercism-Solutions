const MINUTES_IN_DAY = 24 * 60;

function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export class Clock {
  private readonly totalMinutes: number;

  constructor(hour: number, minute?: number) {
    if (!isNumber(hour) || (minute !== undefined && !isNumber(minute))) {
      throw new Error("Hour and minute must be numbers");
    }

    const rawMinutes = hour * 60 + (minute ?? 0);
    this.totalMinutes =
      ((rawMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
  }

  public toString(): string {
    const hours = Math.floor(this.totalMinutes / 60)
      .toString()
      .padStart(2, "0");
    const minutes = (this.totalMinutes % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  public plus(minutes: number): Clock {
    if (!isNumber(minutes)) throw new Error("Minutes must be a number");
    return new Clock(0, this.totalMinutes + minutes);
  }

  public minus(minutes: number): Clock {
    if (!isNumber(minutes)) throw new Error("Minutes must be a number");
    return new Clock(0, this.totalMinutes - minutes);
  }

  public equals(other: unknown): boolean {
    if (!(other instanceof Clock)) return false;
    return this.totalMinutes === other.totalMinutes;
  }
}
