import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics({ leads }) {
  const hot = leads.filter((l) => l.score >= 75).length;
  const warm = leads.filter((l) => l.score >= 40 && l.score < 75).length;
  const cold = leads.filter((l) => l.score < 40).length;

  const data = [
    { name: "Hot", count: hot },
    { name: "Warm", count: warm },
    { name: "Cold", count: cold },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Lead Analytics
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 text-green-700 p-4 rounded text-center">
          <p className="text-sm">Hot Leads</p>
          <p className="text-2xl font-bold">{hot}</p>
        </div>

        <div className="bg-yellow-100 text-yellow-700 p-4 rounded text-center">
          <p className="text-sm">Warm Leads</p>
          <p className="text-2xl font-bold">{warm}</p>
        </div>

        <div className="bg-red-100 text-red-700 p-4 rounded text-center">
          <p className="text-sm">Cold Leads</p>
          <p className="text-2xl font-bold">{cold}</p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
