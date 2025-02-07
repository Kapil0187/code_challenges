import { FaInstagram, FaLinkedin, FaGithub, FaFacebook,FaCode,FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
   <div>
      <div className="  bg-gray-800 text-white text-center p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex space-x-4 items-center justify-center my-4 ">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaInstagram className="text-white-600 text-2xl" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaLinkedin className="text-white-600 text-2xl" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
            <FaGithub className="text-white-800 text-2xl" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
            <FaFacebook className="text-white-800 text-2xl" />
          </a>
        </div>
        <p>&copy; 2025 CodeChallenges</p>
        <div className="flex items-center justify-center">
            <span className="mx-2"> <FaCode className="text-blue-400 text-xl"/> </span>
            <p> Developed By Kapil Barsker for the community.</p>
            <span className="mx-2"> <FaHeart className="text-red-600 text-sm" /> </span> 
        </div>
      </div>
   </div>
  );
}

export default Footer;