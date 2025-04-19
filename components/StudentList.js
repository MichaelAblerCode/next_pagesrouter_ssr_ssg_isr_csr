/*
 * StudentList.js - Renders a list of students with links to their details
 *
 * Copyright © 2025 Michael Abler
 *
 * This work is licensed under the BSD 3-Clause License. See the LICENSE file in
 * the root directory of this source tree for details.
 *
 * @author Michael Abler
 * @see https://github.com/MichaelAblerCode/next_pagesrouter_rendering
 */

import Link from "next/link";

export default function StudentList({
  students,
  linkBase = "/students/idfilterssr",
}) {
  if (!students || students.length === 0) return <p>No students found.</p>;

  return (
    <div style={{ paddingTop: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Matching Students</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 100px)",
          gap: "16px",
          padding: "0",
          listStyle: "none",
        }}
      >
        {students.map((student) => (
          <div key={student.ID} style={{ margin: "8px 0" }}>
            <Link
              href={`${linkBase}/${student.ID}`}
              style={{
                color: "#1a73e8", // Distinct blue color for visibility
                textDecoration: "underline", // Underline to indicate it's a link
                display: "block", // Ensures the link takes the full width
                overflow: "hidden", // Prevents overflow in fixed-width column
                textOverflow: "ellipsis", // Truncates long text
                whiteSpace: "nowrap", // Keeps text in a single line
              }}
            >
              {student.firstname}
              <br /> {student.lastname}
              <br /> ({student.ID})
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
