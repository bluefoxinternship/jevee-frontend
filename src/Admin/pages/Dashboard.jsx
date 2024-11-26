import React from "react";
import { dashboardData } from "../DashboardData/dashBoardData";

const Dashboard = () => {
  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className='text-2xl font-semibold text-[#34395E]'>Dashboard</h2>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dashboardData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex items-center border"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-md text-white ${item.bg}`}
              >
                <i className={`${item.icon} text-2xl`}></i>
              </div>
              <div className="text-left p-4 ">
                <h4 className="text-sm font-medium text-gray-500 opacity-75">{item.title}</h4>
                <p className="text-2xl font-semibold text-[#34395E]">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <section>
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-[#34395E] mb-4">Today New Order</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        
        {/* Top controls: Show entries and Search */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">Show</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label className="text-sm text-gray-500">entries</label>
          </div>
          <div>
            <label className="text-sm text-gray-500 mr-2">Search:</label>
            <input
              type="text"
              className="border rounded px-2 py-1 text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="opacity-60">
                <th className="border border-gray-200 px-4 py-2">
                  SN <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Customer <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Order Id <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Date <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Quantity <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Amount <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Order Status <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Payment <span className="text-xs text-gray-400">↑↓</span>
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Action <span className="text-xs text-gray-400">↑↓</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 text-center" colSpan="9">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div>Showing 0 to 0 of 0 entries</div>
          <div className="flex gap-2">
            <button className="px-2 py-1 text-blue-500 border rounded">Previous</button>
            <button className="px-2 py-1 text-blue-500 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Dashboard;
