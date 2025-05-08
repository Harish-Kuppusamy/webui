import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-600 p-5 flex items-center flex-col ">
      <p className=" font-thin md:text-3xl mb-3">Join Our News Letter For More Quality Tech Contents!</p>

      <div className="flex items-center gap-7 font-light md:text-3xl">
              <span className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white"> <FaFacebook /> Facebook</span>
              <span className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white"> <FaInstagram /> Instagram</span>
                <span className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white"> <FaTwitter/> Twitter</span>
      </div>
    </footer>
  );
}

export default Footer;
