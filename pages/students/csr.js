/*
 * csr.js - Client-Side Rendering page for filtering students by gender and subject
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import { useEffect, useState } from "react";
import StudentList from "../../components/StudentList";
import {
  filterByGender,
  filterBySubject,
  students,
} from "../../utils/students";

export default function CSRPage() {
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    let result = students;
    if (gender) result = filterByGender(result, gender);
    if (subject) result = filterBySubject(result, subject);
    setFilteredStudents(result);
  }, [gender, subject]);

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>
        Student Directory (CSR)
      </h1>
      <p style={{ marginBottom: "16px" }}>
        This page demonstrates <strong>Client-Side Rendering (CSR)</strong>.
        Data is fetched and filtered in the browser using React hooks. Select a
        gender and/or subject to filter the student list dynamically. Unlike
        SSR, SSG, or ISR, the HTML is not prerendered, and JavaScript handles
        the rendering, which may impact SEO.
      </p>

      <div style={{ marginBottom: "24px" }}>
        <label
          htmlFor="gender"
          style={{ marginRight: "8px", fontWeight: "bold" }}
        >
          Gender:
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label
          htmlFor="subject"
          style={{ marginRight: "8px", fontWeight: "bold" }}
        >
          Subject:
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">All</option>
          <option value="Physics">Physics</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>

      <StudentList students={filteredStudents} />
    </div>
  );
}
