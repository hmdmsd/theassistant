import { Component } from "@angular/core";
import { User, users } from "../users";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent {
  teachers: User[] = [];
  students: User[] = [];

  constructor() {
    this.extractUsers();
  }

  extractUsers() {
    this.teachers = users
      .filter((user) => user.isTeacher)
      .sort((a, b) => this.compareDates(a.arrivalDate, b.arrivalDate));

    this.students = users
      .filter((user) => !user.isTeacher)
      .sort((a, b) => {
        const houseComparison = a.house.localeCompare(b.house);
        if (houseComparison !== 0) {
          return houseComparison;
        } else {
          return a.firstName.localeCompare(b.firstName);
        }
      })
      .map((user) => {
        user.arrivalDate = this.calculateYearOfStudy(user.arrivalDate);
        return user;
      });
  }

  compareDates(date1: string, date2: string): number {
    const date1Parts = date1.split("/");
    const date2Parts = date2.split("/");

    const date1Obj = new Date(
      Number(date1Parts[2]),
      Number(date1Parts[1]) - 1,
      Number(date1Parts[0])
    );
    const date2Obj = new Date(
      Number(date2Parts[2]),
      Number(date2Parts[1]) - 1,
      Number(date2Parts[0])
    );

    return date1Obj.getTime() - date2Obj.getTime();
  }

  calculateYearOfStudy(arrivalDate: string): string {
    const currentDate = new Date("1991-11-12"); // current date is 12 November 1991
    const arrival = new Date(arrivalDate);
    const difference = currentDate.getFullYear() - arrival.getFullYear();

    if (difference === 0) {
      return "First Year";
    } else if (difference === 1) {
      return "Second Year";
    } else if (difference === 2) {
      return "Third Year";
    } else {
      return "Unknown";
    }
  }
}
