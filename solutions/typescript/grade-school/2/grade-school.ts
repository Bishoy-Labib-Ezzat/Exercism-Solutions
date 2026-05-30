export class GradeSchool {
  private allStudents = new Map<string, number>();

  add(name: string, grade: number): void {
    this.allStudents.set(name, grade);
  }

  roster(): Record<number, string[]> {
    const result: Record<number, string[]> = {};

    const sortedNames = [...this.allStudents.keys()].sort();

    for (const name of sortedNames) {
      const studentGrade = this.allStudents.get(name) ?? 0;
      result[studentGrade] ??= [];
      result[studentGrade].push(name);
    }
    return result;
  }

  grade(grade: number): string[] {
    return [...this.allStudents.entries()]
      .filter(([, g]) => g === grade)
      .map(([name]) => name)
      .sort();
  }
}
