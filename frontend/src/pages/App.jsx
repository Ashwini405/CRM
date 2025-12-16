// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Login from "./login";   // ✅ FIXED PATH

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setLoggedIn(true);
//   }, []);

//   const loadLeads = async () => {
//     const token = localStorage.getItem("token");
//     const res = await axios.get("http://127.0.0.1:8000/api/leads/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setLeads(res.data);
//   };

//   if (!loggedIn) {
//     return <Login onLogin={() => setLoggedIn(true)} />;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">AI CRM Dashboard</h1>

//       <button
//         onClick={loadLeads}
//         className="bg-green-600 text-white px-4 py-2 rounded"
//       >
//         Load Leads
//       </button>

//       <ul className="mt-4">
//         {leads.map((l) => (
//           <li key={l.id} className="border p-2 mb-2">
//             {l.name} — Score: {l.score}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Login from "./login";
// import CreateLead from "./CreateLead";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     if (localStorage.getItem("token")) setLoggedIn(true);
//   }, []);

//   const loadLeads = async () => {
//     const token = localStorage.getItem("token");
//     const res = await axios.get("http://127.0.0.1:8000/api/leads/", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setLeads(res.data);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">AI CRM Dashboard</h1>
//         <button onClick={logout}
//           className="bg-red-600 text-white px-4 py-2 rounded">
//           Logout
//         </button>
//       </div>

//       <CreateLead onCreated={loadLeads} />

//       <button onClick={loadLeads}
//         className="bg-green-600 text-white px-4 py-2 rounded mb-4">
//         Load Leads
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {leads.map((l) => (
//           <div key={l.id} className="bg-white p-4 rounded shadow">
//             <h3 className="font-bold">{l.name}</h3>
//             <p>{l.email}</p>
//             <p>{l.phone}</p>
//             <p className="text-green-600 font-semibold">
//               Score: {l.score.toFixed(2)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./login";
import CreateLead from "./CreateLead";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  const loadLeads = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://127.0.0.1:8000/api/leads/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setLeads(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI CRM Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <CreateLead onCreated={loadLeads} />

      <button
        onClick={loadLeads}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Load Leads
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leads.map((l) => (
          <div key={l.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{l.name}</h3>
            <p>{l.email}</p>
            <p>{l.phone}</p>
            <p className="text-green-600 font-semibold">
              Score: {l.score.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
