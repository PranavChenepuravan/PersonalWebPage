import React from 'react';

const Projects = () => {
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Name</th>
            <th>Institute</th>
            <th>Platform</th>
            <th>Language</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 text-black">
            <td>E-Consignment</td>
            <td>Riss Technologies</td>
            <td>Jango</td>
            <td>Python</td>
            <td>2023</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 text-black">
            <td>Worship Service Tracker</td>
            <td>Softroniics</td>
            <td>MERN</td>
            <td>Java Script</td>
            <td>2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
