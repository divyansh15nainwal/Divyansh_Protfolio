import { FaGithub, FaInstagram, FaLinkedin, FaSquare, FaTwitter } from "react-icons/fa";
import logo from "../assets/divyanshLogo.webp"
import { FaSquareTwitter, FaSquareXTwitter } from "react-icons/fa6";
function Navbar(){
  return(
    <nav className="flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} alt="logo" className="mx-2 relative right-10" width={100} height={70} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-7 text-2xl ">
        <a href="https://www.linkedin.com/in/divyansh-nainwal-b2b84129b/" target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/divyansh15nainwal" target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
          <FaGithub/>
        </a>
        <a href="https://x.com/NainwalDivyansh" target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter">
          <FaSquareXTwitter/>
        </a>
        <a href="https://www.instagram.com/_.ndivyansh/" target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram">
          <FaInstagram/>
        </a>

      </div>
    </nav>
  )
}
export default Navbar;
