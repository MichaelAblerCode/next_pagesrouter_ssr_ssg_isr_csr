/*
 * isr.js - Displays all students with ISR in four columns of 10
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import StudentList from "../../components/StudentList";
import { students } from "../../utils/students";

export async function getStaticProps() {
  // Get the current timestamp when the page is generated
  const generatedAt = new Date().toLocaleString();

  return {
    props: { students, generatedAt },
    revalidate: 60, // Regenerate every 60 seconds
  };
}

export default function AllStudentsISRPage({ students, generatedAt }) {
  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>
        All Students (ISR)
      </h1>
      <div>
        <p style={{ marginBottom: "16px" }}>
          This page demonstrates{" "}
          <strong>Incremental Static Regeneration (ISR)</strong>. The student
          list below is prerendered at build time and regenerated every 60
          seconds server-side to reflect any updates to the student data. <br />
          <br />
          The page was last generated at: <strong>{generatedAt}</strong>.<br />
          Refresh page to confirm the regeneration.
        </p>
        <p style={{ marginBottom: "16px", color: "red", fontWeight: "bold" }}>
          Note: The development build does not demonstrate Incremental Static
          Regeneration (ISR) properly. Please use a production build to
          experience this feature as intended. <br />
        </p>
      </div>
      <StudentList students={students} />
    </div>
  );
}
