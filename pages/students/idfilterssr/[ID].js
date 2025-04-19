/*
 * [ID].js - SSR route for displaying a single student by ID
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import StudentCard from "../../../components/StudentCard";
import { findById, students } from "../../../utils/students";

export async function getServerSideProps({ params }) {
  console.log("IWASHERE");
  const student = findById(students, params.ID);
  return {
    props: { student },
  };
}

export default function StudentPage({ student }) {
  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Student Details (SSR)</h1>
      <StudentCard student={student} />
    </div>
  );
}
