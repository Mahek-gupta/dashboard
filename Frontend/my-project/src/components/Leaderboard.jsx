import React from 'react';

const leaderboardData = [
  { rank: 1, name: 'Alice', donations: 7000 },
  { rank: 2, name: 'Mahek Gupta', donations: 5000 },
  { rank: 3, name: 'Ravi Sharma', donations: 3500 },
];

function Leaderboard() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4 font-bold text-purple-600">Leaderboard</h2>
      <table className="w-full border table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user) => (
            <tr key={user.rank}>
              <td className="border px-4 py-2">{user.rank}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">₹{user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;



