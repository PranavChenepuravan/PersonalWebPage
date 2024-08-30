import React from "react";

const certificates = [
  { name: "Resume", file: "PRANAV C_MERN DEVELOPER2-Latest.pdf" },
  { name: "MCA Provisional Certificate", file: "AWH22MCA-2030_TueJul23_Provisional Certificate_179661.pdf" },
  { name: "MCA Grade Card", file: "AWH22MCA-2030_TueJul23_Consolidated Grade Card_283236.pdf" },
  { name: "PGDC Certificate", file: "LBSCertificate.pdf" },
  { name: "PGDC Grade Card", file: "PGDCA_Gradecard.pdf" },
  { name: "B.A Engilsh Certificate", file: "BACertificate.pdf" },
  { name: "B.A Engilsh Grade Card", file: "BAGradecard.pdf" },
  { name: "Plus Two", file: "PlusTwo.pdf" },
  { name: "SSLC", file: "SSLC.pdf" },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <div>
      <ul>
        {certificates.map((cert, index) => (
          <li key={index}>
            <a href={require(`./${cert.file}`)} download>
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
