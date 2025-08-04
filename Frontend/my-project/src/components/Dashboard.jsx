import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://dashboard-backend-10ik.onrender.com/api/intern-data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (


    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-3xl mb-4 font-bold">Intern Dashboard</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Referral Code:</strong> {data.referralCode}</p>
      <p><strong>Total Donations:</strong> ₹{data.donations}</p>

      <h3 className="text-xl mt-6 mb-2 font-semibold">Rewards:</h3>
      <ul className="list-disc ml-5">
        {data.rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
   
  );
}

export default Dashboard;
