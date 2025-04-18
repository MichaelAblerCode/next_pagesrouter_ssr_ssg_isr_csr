/*
 * StudentCard.js - Renders a card with details for a single student
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

import Link from "next/link";

export default function StudentCard({
  student,
  linkBase = "/students/idfilterssr",
}) {
  if (!student) return <p>No student found.</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <h3>
        {student.firstname} {student.lastname}
      </h3>
      <p>Gender: {student.gender}</p>
      <p>Birthdate: {student.birthdate}</p>
      <p>Study Subject: {student.studysubject}</p>
      <p>City: {student.city}</p>
      <p>ID: {student.ID}</p>
      <Link href={`${linkBase}/${student.ID}`}>View Details</Link>
    </div>
  );
}
