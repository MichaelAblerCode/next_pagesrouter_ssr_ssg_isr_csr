/*
 * [subject].js - SSG nested route for prerendering students by gender and subject
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import StudentList from "../../../../components/StudentList";
import {
  filterByGender,
  filterBySubject,
  students,
} from "../../../../utils/students";

export async function getStaticPaths() {
  const genders = ["male", "female"];
  const subjects = ["Physics", "Mathematics", "Computer Science", "Medicine"];
  const paths = [];
  genders.forEach((gender) => {
    subjects.forEach((subject) => {
      paths.push({ params: { gender, subject } });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { gender, subject } = params;
  let filteredStudents = students;
  if (gender) filteredStudents = filterByGender(filteredStudents, gender);
  if (subject) filteredStudents = filterBySubject(filteredStudents, subject);
  return {
    props: { students: filteredStudents, gender, subject },
  };
}

export default function GenderSubjectPage({ students, gender, subject }) {
  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Students by Gender and Subject (SSG)</h1>
      <p>
        Filtering by Gender: {gender}, Subject: {subject}
      </p>
      <StudentList students={students} linkBase="/students/idfilterssg" />
    </div>
  );
}
