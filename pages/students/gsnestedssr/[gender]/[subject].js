/*
 * [subject].js - SSR nested route for filtering students by gender and subject
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

export async function getServerSideProps({ params }) {
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
      <h1>Students by Gender and Subject (SSR)</h1>
      <p>
        Filtering by Gender: {gender}, Subject: {subject}
      </p>
      <StudentList students={students} />
    </div>
  );
}
