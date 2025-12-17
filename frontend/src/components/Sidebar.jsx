// import React from "react";
// import { LayoutDashboard, Users, BarChart3, LogOut } from "lucide-react";

// export default function Sidebar({ page, setPage, onLogout }) {
//   const itemClass = (p) =>
//     `flex items-center gap-3 px-4 py-2 rounded cursor-pointer
//      ${page === p ? "bg-indigo-800" : "hover:bg-indigo-700"}`;

//   return (
//     <div className="w-64 bg-indigo-700 text-white min-h-screen p-5 flex flex-col">
//       {/* Logo */}
//       <div className="text-2xl font-bold mb-10 text-center">
//         🤖 AI CRM
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-3">
//         <div className={itemClass("dashboard")} onClick={() => setPage("dashboard")}>
//           <LayoutDashboard size={18} />
//           Dashboard
//         </div>

//         <div className={itemClass("leads")} onClick={() => setPage("leads")}>
//           <Users size={18} />
//           Leads
//         </div>

//         <div className={itemClass("analytics")} onClick={() => setPage("analytics")}>
//           <BarChart3 size={18} />
//           Analytics
//         </div>
//       </nav>

//       {/* Logout */}
//       <div
//         onClick={onLogout}
//         className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
//       >
//         <LogOut size={18} />
//         Logout
//       </div>
//     </div>
//   );
// }
import React from "react";
import { LayoutDashboard, Users, BarChart3, LogOut } from "lucide-react";

export default function Sidebar({ page, setPage, onLogout }) {
  const itemClass = (p) =>
    `flex items-center gap-3 px-4 py-3 rounded cursor-pointer transition
     ${page === p ? "bg-indigo-800" : "hover:bg-indigo-700"}`;

  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen p-5 flex flex-col">
      
      {/* Logo */}
      <div className="text-2xl font-bold mb-10 text-center">
        🤖 AI CRM
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
        <div
          className={itemClass("dashboard")}
          onClick={() => setPage("dashboard")}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </div>

        <div
          className={itemClass("leads")}
          onClick={() => setPage("leads")}
        >
          <Users size={18} />
          Leads
        </div>

        <div
          className={itemClass("analytics")}
          onClick={() => setPage("analytics")}
        >
          <BarChart3 size={18} />
          Analytics
        </div>
      </nav>

      {/* Logout */}
      <div
        onClick={onLogout}
        className="flex items-center gap-3 px-4 py-3 rounded hover:bg-red-600 cursor-pointer"
      >
        <LogOut size={18} />
        Logout
      </div>
    </div>
  );
}
