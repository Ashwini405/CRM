// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// export default function CreateLead({ onCreated }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);

//   const submitLead = async () => {
//     if (!name || !email || !phone) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://127.0.0.1:8000/api/leads/",
//         { name, email, phone },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setName("");
//       setEmail("");
//       setPhone("");
//       onCreated();
//     } catch (error) {
//       alert("Failed to create lead");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white p-6 rounded-2xl shadow-md mb-6"
//     >
//       <h2 className="text-xl font-bold mb-4 text-gray-800">
//         Add Lead
//       </h2>

//       <input
//         className="w-full mb-3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         placeholder="Full Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         className="w-full mb-3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         placeholder="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         className="w-full mb-4 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         placeholder="Phone Number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <button
//         onClick={submitLead}
//         disabled={loading}
//         className={`w-full text-white font-semibold px-4 py-2 rounded-xl shadow transition transform
//           ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.03]"
//           }`}
//       >
//         {loading ? "Creating..." : "Create Lead"}
//       </button>
//     </motion.div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function CreateLead({ onCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const submitLead = async (e) => {
    e.preventDefault(); // IMPORTANT

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please login again.");
      return;
    }

    try {
      setLoading(true);

      console.log("Submitting lead:", { name, email, phone });

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

      if (onCreated) onCreated();

      alert("Lead created successfully");
    } catch (error) {
      console.error("Create lead error:", error.response?.data || error);

      alert(
        error.response?.data
          ? JSON.stringify(error.response.data)
          : "Failed to create lead"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={submitLead}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-2xl shadow-md mb-6"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Add Lead
      </h2>

      <input
        className="w-full mb-3 px-4 py-3 border rounded-xl"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full mb-3 px-4 py-3 border rounded-xl"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full mb-4 px-4 py-3 border rounded-xl"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white font-semibold px-4 py-2 rounded-xl
          ${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-indigo-500 to-purple-600"
          }`}
      >
        {loading ? "Creating..." : "Create Lead"}
      </button>
    </motion.form>
  );
}
