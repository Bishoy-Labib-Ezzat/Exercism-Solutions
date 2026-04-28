function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isClock(value: unknown): value is Clock {
  return value instanceof Clock;
}

export class Clock {
  private hour: number;
  private minute: number;

  private normalize() {
    const total = this.hour * 60 + this.minute;
    const normalized = ((total % 1440) + 1440) % 1440;

    this.hour = Math.floor(normalized / 60);
    this.minute = normalized % 60;
  }

  constructor(hour: unknown, minute?: unknown) {
    if (!isNumber(hour) || (minute !== undefined && !isNumber(minute))) {
      throw new Error("Hour must be a number");
    }

    this.hour = hour;
    this.minute = minute ?? 0;

    this.normalize();
  }

  public toString(): string {
    const date = new Date(0, 0, 0, this.hour, this.minute);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  public plus(minutes: unknown): Clock {
    if (!isNumber(minutes)) {
      throw new Error("Hour must be a number");
    }

    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: unknown): Clock {
    if (!isNumber(minutes)) {
      throw new Error("Hour must be a number");
    }

    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: unknown): boolean {
    if (!isClock(other)) {
      return false;
    }

    return this.hour === other.hour && this.minute === other.minute;
  }
}
