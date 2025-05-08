import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
    FaEnvelope,
  FaBars
} from "react-icons/fa";

const Navlink = [
  {
    name: "Home",
    icon: <FaHome />,
        href: "#",
    id:1
  },

  {
    name: "About",
    icon: <FaInfoCircle />,
      href: "#",
    id:2
  },
  {
    name: "Services",
    icon: <FaServicestack />,
      href: "#",
    id:3
  },

  {
    name: "Contact",
      icon: <FaEnvelope />,
      href: '#',
    id:4
  },
];


function Navbar() {
    const listitems = Navlink.map(function (list, index ) {
       return (
         <li key={index}>
           <a
             href={list.href}
             className="flex items-center gap-1 hover:underline hover:cursor-pointer font-thin text-xl"
           >
                   {list.icon}
                   {
                       list.name
                   }
           </a>
         </li>
       );
    });


  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full left-0">
      <div className="container flex items-center justify-between mx-auto cursor-pointer">
        <h1 className="text-2xl font-bold">My Website</h1>

        <ul className="hidden  md:flex space-x-5 ">{listitems}</ul>

        <p className=" block md:hidden  cursor-pointer"> <FaBars/></p>
      </div>
    </nav>
  );
}

export default Navbar;
