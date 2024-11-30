import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import {animate, motion } from "framer-motion"

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})
function Technologies(){
  return(
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-6xl">Skills</motion.h2>
      <motion.div
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}

       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        initial="intial"
        animate="animate"
        variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        initial="intial"
        animate="animate"
        variants={iconVariants(3)}
        className="p-4">
          <TbBrandNodejs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div
        initial="intial"
        animate="animate"
        variants={iconVariants(5)}
         className="p-4">
          <TbBrandNextjs className="text-7xl"/>
        </motion.div>
        <motion.div 
        initial="intial"
        animate="animate"
        variants={iconVariants(2.5)}
        className="p-4">
          <SiMongodb className="text-7xl  text-green-950"/>
        </motion.div>
        <motion.div 
        initial="intial"
        animate="animate"
        variants={iconVariants(3)}
        className="p-4">
          <SiExpress className="text-7xl"/>
        </motion.div>
        <motion.div 
        initial="intial"
        animate="animate"
        variants={iconVariants(5)}
        className="p-4">
          <SiMysql className="text-7xl"/>
        </motion.div>
        <motion.div 
        initial="intial"
        animate="animate"
        variants={iconVariants(2.5)}
        className="p-4">
          <SiJavascript className="text-7xl text-yellow-500"/>
        </motion.div>

      </motion.div>

    </div>

  )
}
export default Technologies;