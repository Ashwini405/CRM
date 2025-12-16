// import React, { useState } from "react";
// import axios from "axios";

// export default function CreateLead({ onCreated }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const submitLead = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     await axios.post(
//       "http://127.0.0.1:8000/api/leads/",
//       { name, email, phone },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     setName("");
//     setEmail("");
//     setPhone("");
//     onCreated();
//   };

//   return (
//     <form onSubmit={submitLead} className="bg-white p-4 rounded shadow mb-6">
//       <h2 className="text-lg font-bold mb-3">Add Lead</h2>

//       <input className="border p-2 w-full mb-2"
//         placeholder="Name" value={name}
//         onChange={(e) => setName(e.target.value)} />

//       <input className="border p-2 w-full mb-2"
//         placeholder="Email" value={email}
//         onChange={(e) => setEmail(e.target.value)} />

//       <input className="border p-2 w-full mb-3"
//         placeholder="Phone" value={phone}
//         onChange={(e) => setPhone(e.target.value)} />

//       <button className="bg-blue-600 text-white px-4 py-2 rounded">
//         Create Lead
//       </button>
//     </form>
//   );
// }
import React, { useState } from "react";
import axios from "axios";

export default function CreateLead({ onCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitLead = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://127.0.0.1:8000/api/leads/",
      { name, email, phone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setName("");
    setEmail("");
    setPhone("");

    onCreated();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-bold mb-3">Add Lead</h2>

      <input
        className="w-full border p-2 mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={submitLead}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Lead
      </button>
    </div>
  );
}
