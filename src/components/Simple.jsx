import { motion } from "framer-motion"

const Simple = () => {
  return (
    <motion.div className="bg-blue-700 h-32 w-32 rounded-full "
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration:1}}

    />
  )
}

export default Simple