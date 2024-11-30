import profilePic from "../assets/profilePic.webp"
import {motion} from "framer-motion"
import resume from "../assets/resume.pdf"
 

const containerVariants ={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChilder:0.5,
    }
  }
}
const childVarients={
  hidden:{ opacity:0 ,x:-100

  },
  visible:{opacity:1 ,x:0 ,transition:{duration:0.5}}
}
function Hero(){
  return(
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
        <div className=" flex justify-center lg:p-8">
          <motion.img src={profilePic} alt="ProFile" className="border border-stone-900 rounded-3xl"
          width={650}
          height={650}
           initial={{x:100, opacity:0}} 
          animate={{x:0, opacity:1}} 
          transition={{duration:1.5,delay:0.5}}/>
          </div>
          </div>
          <div className="w-full lg:w-1/2">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
           className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
            variants={childVarients} 
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">Divyansh Nainwal</motion.h2>
            <motion.span 
            variants={childVarients}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent text-3xl">Full Stack Developer</motion.span>
            <motion.p 
            variants={childVarients}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            I am an enthusiastic and motivated full-stack developer, eager to apply my skills in building robust and scalable web applications. Though I am just starting my career, I have a solid foundation in front-end technologies such as React , as well as back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB. I am excited to grow professionally and contribute to creating innovative solutions that enhance user experiences and support business growth.


            </motion.p>
            <motion.a
            variants={childVarients}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >Download Resume</motion.a>

          </motion.div>
          </div>
      </div>
    </div>
  )
}
export default Hero;