import { FaUser, FaSignal, FaUserCircle, FaCircle } from "react-icons/fa";

const tableheading = [
  {
    colname: "Avatar",
    icon: <FaCircle />,
  },
  {
    colname: "Name",
    icon: <FaUserCircle />,
  },
  {
    colname: "Status",
    icon: <FaSignal />,
  },
];

const tablerow = [
  {
    name: "Alice",
    icon: <FaUser />,
    status: "Active",
  },
  {
    name: "Bob",
    icon: <FaUser />,
    status: "InActive",
  },
];

function Table() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-thin md:text-5xl text-left md:font-semibold md:text-center mb-4">
        User Data
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-blue-600 bg-white shadow-md rounded-lg">
          <thead className="bg-blue-200">
            <tr>
              {tableheading.map((heading) => (
                <th
                  key={heading.colname}
                  className="px-4 py-2 border border-blue-600 text-left"
                >
                  <span className="flex items-center gap-2 text-sm md:text-xl font-medium">
                    {heading.icon} {heading.colname}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tablerow.map((row) => {
              const statusColor =
                row.status === "Active" ? "text-green-600" : "text-red-600";
              return (
                <tr key={row.name} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-2 border border-blue-600 text-sm md:text-lg">
                    <span className="flex justify-center">{row.icon}</span>
                  </td>
                  <td className="px-4 py-2 border border-blue-600 text-sm md:text-lg text-center">
                    {row.name}
                  </td>
                  <td
                    className={`px-4 py-2 border border-blue-600 text-sm md:text-lg text-center ${statusColor}`}
                  >
                    {row.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
