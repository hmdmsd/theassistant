export interface User {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  arrivalDate: string;
  house: string;
  assignment?: string;
  isTeacher: boolean;
}

export const users = [
  {
    id: 163728,
    firstName: "Minerva",
    lastName: "McGonagall",
    description: "Transfiguration teacher and head of Gryffindor.",
    arrivalDate: "08/09/1956",
    house: "Gryffindor",
    assignment: "Transfiguration",
    isTeacher: true,
  },
  {
    id: 903943,
    firstName: "Hermione",
    lastName: "Granger",
    description: "Top of her class. \n Parents are dentists.",
    arrivalDate: "01/09/1991",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 809247,
    firstName: "Fred",
    lastName: "Weasley",
    description: "Quidditch beater. \n Twin of Georges Weasley.",
    arrivalDate: "01/09/1989",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 409232,
    firstName: "Severus",
    lastName: "Snape",
    description: "Potions teacher and head of Slytherin.",
    arrivalDate: "04/09/1984",
    house: "Slytherin",
    assignment: "Potions",
    isTeacher: true,
  },
  {
    id: 910832,
    firstName: "Harry",
    lastName: "Potter",
    description: "Quidditch seeker. \n The boy who lived.",
    arrivalDate: "01/09/1991",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 929478,
    firstName: "Georges",
    lastName: "Weasley",
    description: "Quidditch beater. \n Twin of Fred Weasley.",
    arrivalDate: "01/09/1989",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 309233,
    firstName: "Pomona",
    lastName: "Sprout",
    description: "Herbology teacher and head of Hufflepuff.",
    arrivalDate: "03/09/1982",
    house: "Hufflepuff",
    assignment: "Herbology",
    isTeacher: true,
  },
  {
    id: 849303,
    firstName: "Ronald",
    lastName: "Weasley",
    description:
      "Has 5 brothers and a sister. \n Son of Arthur and Molly Weasley.",
    arrivalDate: "01/09/1991",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 903543,
    firstName: "Draco",
    lastName: "Malefoy",
    description:
      "Snape's favorite student. \n Son of Lucius and Narcissa Malefoy.",
    arrivalDate: "01/09/1991",
    house: "Slytherin",
    isTeacher: false,
  },
  {
    id: 783728,
    firstName: "Neville",
    lastName: "Longbottom",
    description:
      "Raised by his grandmother. \n Son of Alice and Frank Longbottom.",
    arrivalDate: "01/09/1991",
    house: "Gryffindor",
    isTeacher: false,
  },
  {
    id: 492893,
    firstName: "Filius",
    lastName: "Flitwick",
    description: "Charms teacher and head of Ravenclaw.",
    arrivalDate: "01/09/1971",
    house: "Ravenclaw",
    assignment: "Charms",
    isTeacher: true,
  },
  {
    id: 938200,
    firstName: "Vincent",
    lastName: "Crabbe",
    description: "Draco's best friend. \n Bottom of his class.",
    arrivalDate: "01/09/1991",
    house: "Slytherin",
    isTeacher: false,
  },
];
