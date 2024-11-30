import { CONTACT } from "../constants";
import {motion } from "framer-motion"
function Contact(){
  return(
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1}}
      className="my-10 text-center text-6xl">Get In Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          {CONTACT.address}
        </p>
        <p className="my-4">
          {CONTACT.phoneNo}
        </p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}
export default Contact;