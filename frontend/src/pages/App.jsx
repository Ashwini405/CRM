
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import Login from "./login";
// import CreateLead from "./CreateLead";
// import Sidebar from "../components/Sidebar";
// import Analytics from "../components/Analytics";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [leads, setLeads] = useState([]);
//   const [search, setSearch] = useState("");

//   // Check login on refresh
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setLoggedIn(true);
//   }, []);

//   // Load leads
//   const loadLeads = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://127.0.0.1:8000/api/leads/",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setLeads(res.data);
//     } catch (error) {
//       console.error("Failed to load leads", error);
//     }
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     setLoggedIn(false);
//   };

//   // Search filter
//   const filteredLeads = leads.filter((l) =>
//     `${l.name} ${l.email} ${l.phone}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   // AI score color logic
//   const getScoreStyle = (score) => {
//     if (score >= 75) return "bg-green-100 text-green-700";
//     if (score >= 40) return "bg-yellow-100 text-yellow-700";
//     return "bg-red-100 text-red-700";
//   };

//   // If not logged in
//   if (!loggedIn) {
//     return <Login onLogin={() => setLoggedIn(true)} />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar onLogout={logout} />

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Leads Dashboard
//           </h1>
//           <p className="text-gray-500">
//             Search, manage, and analyze your leads
//           </p>
//         </div>

//         {/* Analytics */}
//         {leads.length > 0 && <Analytics leads={filteredLeads} />}

//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search leads by name, email, phone..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//         />

//         {/* Create Lead */}
//         <CreateLead onCreated={loadLeads} />

//         {/* Load Leads */}
//         <button
//           onClick={loadLeads}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-6"
//         >
//           Load Leads
//         </button>

//         {/* Leads Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {filteredLeads.length === 0 ? (
//             <p className="text-gray-500">No leads found.</p>
//           ) : (
//             filteredLeads.map((l) => (
//               <div
//                 key={l.id}
//                 className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
//               >
//                 <h3 className="font-bold text-lg text-gray-800">
//                   {l.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">{l.email}</p>
//                 <p className="text-sm text-gray-600">{l.phone}</p>

//                 <span
//                   className={`inline-block mt-3 px-3 py-1 rounded-full font-semibold ${getScoreStyle(
//                     l.score
//                   )}`}
//                 >
//                   Score: {l.score.toFixed(2)}
//                 </span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

import Login from "./login";
import CreateLead from "./CreateLead";
import Sidebar from "../components/Sidebar";
import Analytics from "../components/Analytics";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("dashboard"); // ✅ REQUIRED

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  const loadLeads = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://127.0.0.1:8000/api/leads/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLeads(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const filteredLeads = leads.filter((l) =>
    `${l.name} ${l.email} ${l.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getScoreStyle = (score) => {
    if (score >= 75) return "bg-green-100 text-green-700";
    if (score >= 40) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* ✅ PASS page + setPage */}
      <Sidebar page={page} setPage={setPage} onLogout={logout} />

      <div className="flex-1 p-8">
        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <Analytics leads={leads} />
          </>
        )}

        {/* LEADS */}
        {page === "leads" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Leads</h1>

            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-6 px-5 py-3 border rounded-xl"
            />

            <CreateLead onCreated={loadLeads} />

            <button
              onClick={loadLeads}
              className="bg-green-600 text-white px-5 py-2 rounded-xl mb-6"
            >
              Load Leads
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredLeads.map((l) => (
                <div key={l.id} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-bold">{l.name}</h3>
                  <p className="text-sm text-gray-600">{l.email}</p>
                  <p className="text-sm text-gray-600">{l.phone}</p>

                  <span
                    className={`inline-block mt-3 px-3 py-1 rounded-full ${getScoreStyle(
                      l.score
                    )}`}
                  >
                    Score: {l.score.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ANALYTICS */}
        {page === "analytics" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Analytics</h1>
            <Analytics leads={leads} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
