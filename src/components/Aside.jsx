import { FaBook, FaReact, FaRocket, FaLaptop } from "react-icons/fa";

const links = [
  {
    name: "Vite Documentation",
    icon: <FaBook />,
    href: "#",
  },
  {
    name: "React Guide",
    icon: <FaReact />,
    href: "#",
  },
  {
    name: "Frontend Trends",
    icon: <FaLaptop />,
    href: "#",
  },
];

function Aside({ className }) {
  return (
    <aside
      className={`w-full md:w-[300px] p-4 bg-gray-200 rounded-md shadow-md my-7 ${className}`}
    >
      <span className="flex items-center gap-2 text-xl font-light md:text-3xl mb-4">
        <FaRocket />
        Related Links
      </span>

      <ul className="space-y-2">
        {links.map((link) => (
          <li
            key={link.name}
            className="text-base md:text-xl font-thin hover:text-white hover:underline transition"
          >
            <a href={link.href} className="flex items-center gap-2">
              {link.icon} {link.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
