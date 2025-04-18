/*
 * students.js - Mock database of 40 students with filter functions
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the Creative Commons Attribution-NoDerivatives 4.0
 * International License (CC BY-ND 4.0). To view a copy of this license, visit
 * https://creativecommons.org/licenses/by-nd/4.0/ or see the LICENSE file in the
 * root directory of this source tree.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

export const students = [
  {
    firstname: "Anna",
    lastname: "Schmidt",
    gender: "female",
    birthdate: "2001-03-15",
    studysubject: "Physics",
    city: "Munich",
    ID: "S001",
  },
  {
    firstname: "Ben",
    lastname: "Mueller",
    gender: "male",
    birthdate: "2002-07-22",
    studysubject: "Computer Science",
    city: "Vienna",
    ID: "S002",
  },
  {
    firstname: "Clara",
    lastname: "Fischer",
    gender: "female",
    birthdate: "2003-01-10",
    studysubject: "Medicine",
    city: "Prague",
    ID: "S003",
  },
  {
    firstname: "David",
    lastname: "Weber",
    gender: "male",
    birthdate: "2001-11-05",
    studysubject: "Mathematics",
    city: "Madrid",
    ID: "S004",
  },
  {
    firstname: "Emma",
    lastname: "Meyer",
    gender: "female",
    birthdate: "2002-09-18",
    studysubject: "Computer Science",
    city: "Paris",
    ID: "S005",
  },
  {
    firstname: "Finn",
    lastname: "Wagner",
    gender: "male",
    birthdate: "2003-04-30",
    studysubject: "Physics",
    city: "Rome",
    ID: "S006",
  },
  {
    firstname: "Greta",
    lastname: "Bauer",
    gender: "female",
    birthdate: "2001-12-12",
    studysubject: "Medicine",
    city: "Munich",
    ID: "S007",
  },
  {
    firstname: "Hugo",
    lastname: "Richter",
    gender: "male",
    birthdate: "2002-06-25",
    studysubject: "Mathematics",
    city: "Vienna",
    ID: "S008",
  },
  {
    firstname: "Ida",
    lastname: "Koch",
    gender: "female",
    birthdate: "2003-08-03",
    studysubject: "Computer Science",
    city: "Prague",
    ID: "S009",
  },
  {
    firstname: "Jonas",
    lastname: "Schaefer",
    gender: "male",
    birthdate: "2001-02-14",
    studysubject: "Physics",
    city: "Madrid",
    ID: "S010",
  },
  {
    firstname: "Klara",
    lastname: "Krause",
    gender: "female",
    birthdate: "2002-10-27",
    studysubject: "Medicine",
    city: "Paris",
    ID: "S011",
  },
  {
    firstname: "Leon",
    lastname: "Hofmann",
    gender: "male",
    birthdate: "2003-05-09",
    studysubject: "Mathematics",
    city: "Rome",
    ID: "S012",
  },
  {
    firstname: "Lina",
    lastname: "Schulz",
    gender: "female",
    birthdate: "2001-03-21",
    studysubject: "Computer Science",
    city: "Munich",
    ID: "S013",
  },
  {
    firstname: "Max",
    lastname: "Schneider",
    gender: "male",
    birthdate: "2002-07-16",
    studysubject: "Physics",
    city: "Vienna",
    ID: "S014",
  },
  {
    firstname: "Mia",
    lastname: "Fritz",
    gender: "female",
    birthdate: "2003-11-29",
    studysubject: "Medicine",
    city: "Prague",
    ID: "S015",
  },
  {
    firstname: "Noah",
    lastname: "Vogel",
    gender: "male",
    birthdate: "2001-01-07",
    studysubject: "Mathematics",
    city: "Madrid",
    ID: "S016",
  },
  {
    firstname: "Sophie",
    lastname: "Neumann",
    gender: "female",
    birthdate: "2002-04-13",
    studysubject: "Computer Science",
    city: "Paris",
    ID: "S017",
  },
  {
    firstname: "Theo",
    lastname: "Schwarz",
    gender: "male",
    birthdate: "2003-08-26",
    studysubject: "Physics",
    city: "Rome",
    ID: "S018",
  },
  {
    firstname: "Vera",
    lastname: "Zimmermann",
    gender: "female",
    birthdate: "2001-06-02",
    studysubject: "Medicine",
    city: "Munich",
    ID: "S019",
  },
  {
    firstname: "Yann",
    lastname: "Lehmann",
    gender: "male",
    birthdate: "2002-09-08",
    studysubject: "Mathematics",
    city: "Vienna",
    ID: "S020",
  },
  {
    firstname: "Lara",
    lastname: "Becker",
    gender: "female",
    birthdate: "2001-02-19",
    studysubject: "Physics",
    city: "Paris",
    ID: "S021",
  },
  {
    firstname: "Elias",
    lastname: "Klein",
    gender: "male",
    birthdate: "2002-05-14",
    studysubject: "Computer Science",
    city: "Munich",
    ID: "S022",
  },
  {
    firstname: "Nora",
    lastname: "Wolf",
    gender: "female",
    birthdate: "2003-07-08",
    studysubject: "Medicine",
    city: "Vienna",
    ID: "S023",
  },
  {
    firstname: "Lukas",
    lastname: "Schroeder",
    gender: "male",
    birthdate: "2001-12-03",
    studysubject: "Mathematics",
    city: "Prague",
    ID: "S024",
  },
  {
    firstname: "Julia",
    lastname: "Frank",
    gender: "female",
    birthdate: "2002-10-25",
    studysubject: "Computer Science",
    city: "Madrid",
    ID: "S025",
  },
  {
    firstname: "Paul",
    lastname: "Lorenz",
    gender: "male",
    birthdate: "2003-03-30",
    studysubject: "Physics",
    city: "Rome",
    ID: "S026",
  },
  {
    firstname: "Marie",
    lastname: "Jaeger",
    gender: "female",
    birthdate: "2001-04-17",
    studysubject: "Medicine",
    city: "Paris",
    ID: "S027",
  },
  {
    firstname: "Tom",
    lastname: "Hartmann",
    gender: "male",
    birthdate: "2002-08-12",
    studysubject: "Mathematics",
    city: "Munich",
    ID: "S028",
  },
  {
    firstname: "Lisa",
    lastname: "Brandt",
    gender: "female",
    birthdate: "2003-06-23",
    studysubject: "Computer Science",
    city: "Vienna",
    ID: "S029",
  },
  {
    firstname: "Felix",
    lastname: "Kuhn",
    gender: "male",
    birthdate: "2001-09-01",
    studysubject: "Physics",
    city: "Prague",
    ID: "S030",
  },
  {
    firstname: "Hanna",
    lastname: "Schubert",
    gender: "female",
    birthdate: "2002-01-28",
    studysubject: "Medicine",
    city: "Madrid",
    ID: "S031",
  },
  {
    firstname: "Simon",
    lastname: "Engel",
    gender: "male",
    birthdate: "2003-11-15",
    studysubject: "Mathematics",
    city: "Rome",
    ID: "S032",
  },
  {
    firstname: "Elena",
    lastname: "Vogt",
    gender: "female",
    birthdate: "2001-02-09",
    studysubject: "Computer Science",
    city: "Paris",
    ID: "S033",
  },
  {
    firstname: "Mats",
    lastname: "Feldmann",
    gender: "male",
    birthdate: "2002-10-04",
    studysubject: "Physics",
    city: "Munich",
    ID: "S034",
  },
  {
    firstname: "Tina",
    lastname: "Reiter",
    gender: "female",
    birthdate: "2003-05-27",
    studysubject: "Medicine",
    city: "Vienna",
    ID: "S035",
  },
  {
    firstname: "Ole",
    lastname: "Bauer",
    gender: "male",
    birthdate: "2001-03-13",
    studysubject: "Mathematics",
    city: "Prague",
    ID: "S036",
  },
  {
    firstname: "Sara",
    lastname: "Hermann",
    gender: "female",
    birthdate: "2002-12-20",
    studysubject: "Computer Science",
    city: "Madrid",
    ID: "S037",
  },
  {
    firstname: "Nico",
    lastname: "Schmitt",
    gender: "male",
    birthdate: "2003-07-07",
    studysubject: "Physics",
    city: "Rome",
    ID: "S038",
  },
  {
    firstname: "Lea",
    lastname: "Lang",
    gender: "female",
    birthdate: "2001-05-16",
    studysubject: "Medicine",
    city: "Paris",
    ID: "S039",
  },
  {
    firstname: "Tim",
    lastname: "Keller",
    gender: "male",
    birthdate: "2002-09-29",
    studysubject: "Mathematics",
    city: "Munich",
    ID: "S040",
  },
];

// Filter functions (unchanged)
export function filterByCity(students, city) {
  return students.filter(
    (student) => student.city.toLowerCase() === city.toLowerCase()
  );
}

export function filterBySubject(students, subject) {
  return students.filter(
    (student) => student.studysubject.toLowerCase() === subject.toLowerCase()
  );
}

export function filterByGender(students, gender) {
  return students.filter(
    (student) => student.gender.toLowerCase() === gender.toLowerCase()
  );
}

export function findById(students, id) {
  return students.find((student) => student.ID === id) || null;
}

export function filterByName(students, name) {
  return students.filter(
    (student) =>
      student.firstname.toLowerCase() === name.toLowerCase() ||
      student.lastname.toLowerCase() === name.toLowerCase()
  );
}
