import React from "react";

const certificates = [
  { name: "Resume", file: "PRANAV C_MERN DEVELOPER2-Latest.pdf" },
  { name: "Profesional Certificate", file: "AWH22MCA-2030_TueJul23_Provisional Certificate_179661.pdf" },
  { name: "Grade Card", file: "AWH22MCA-2030_TueJul23_Consolidated Grade Card_283236.pdf" },
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
