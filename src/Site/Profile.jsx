import React from 'react';
import Image from '../Pict.jpg';

export const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-auto">
        <a href="#">
          <img src={Image} alt="Profile Picture" className="rounded-t-lg w-full" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Pranav C</h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-l font-bold tracking-tight text-white dark:text-white">Qualifications</h5>
          </a>
          <table className="table-auto w-full text-white dark:text-gray-400">
            <tbody>
              <tr>
                <td className="pr-4">Master of Computer Applications</td>
                <td>KTU (2022-2024)</td>
              </tr>
              <br />
              <tr>
                <td className="pr-4">Post Graduate Diploma in Computer Applications</td>
                <td>LBS Centre For Science and Technology (2021-2022)</td>
              </tr>
              <br />
              <tr>
                <td className="pr-4">B.A English</td>
                <td>Calicut University (2018-2021)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile;
