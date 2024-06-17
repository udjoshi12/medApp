import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 1000, purchases: 2000, revenue: 1500 },
  { name: 'Feb', sales: 1500, purchases: 2500, revenue: 1800 },
  { name: 'Mar', sales: 2000, purchases: 2200, revenue: 2100 },
  { name: 'Apr', sales: 2500, purchases: 2400, revenue: 2200 },
  { name: 'May', sales: 3000, purchases: 2800, revenue: 2300 },
  { name: 'Jun', sales: 3500, purchases: 3000, revenue: 2400 },
];

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="purchases" fill="#82ca9d" />
        <Bar dataKey="revenue" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;