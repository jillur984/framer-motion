import { motion } from "framer-motion"

const KeyFrame = () => {
  return (
    <motion.div
    className="bg-blue-700 h-32 w-32 m-4"
    animate={{
        borderRadius:["20%","20%","50%","20%","20%"],
        rotate:[0,90,180,270,0],
        scale:[1,1,2,2,1]
    }}
    transition={{duration:1.7}}
    />
  )
}

export default KeyFrame