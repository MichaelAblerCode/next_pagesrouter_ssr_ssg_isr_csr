/*
 * [[...gendersubject]].js - SSG optional catch-all route for gender/subject filtering
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import StudentList from "../../../components/StudentList";
import {
  filterByGender,
  filterBySubject,
  students,
} from "../../../utils/students";

export async function getStaticPaths() {
  const genders = ["male", "female"];
  const subjects = ["Physics", "Mathematics", "Computer Science", "Medicine"];
  const paths = [{ params: { gendersubject: undefined } }]; // Root path
  genders.forEach((gender) => {
    subjects.forEach((subject) => {
      paths.push({ params: { gendersubject: [gender, subject] } });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const gendersubject = params?.gendersubject || [];
  const gender = gendersubject[0];
  const subject = gendersubject[1];
  let filteredStudents = students;
  if (gender) filteredStudents = filterByGender(filteredStudents, gender);
  if (subject) filteredStudents = filterBySubject(filteredStudents, subject);
  return {
    props: {
      students: filteredStudents,
      gender: gender || "All",
      subject: subject || "All",
    },
  };
}

export default function GenderSubjectCatchAllPage({
  students,
  gender,
  subject,
}) {
  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Students by Gender and Subject (SSG, Catch-All)</h1>
      <p>
        Filtering by Gender: {gender}, Subject: {subject}
      </p>
      <StudentList students={students} linkBase="/students/idfilterssg" />
    </div>
  );
}
