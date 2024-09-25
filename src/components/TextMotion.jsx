import { motion } from "framer-motion";

const TextMotion = () => {
    const message="We are Enjoing Reactive Accelator Cource, LWS is Awesome";

    const wordArray=message.split(" ")
  return (
    <div className="text-3xl text-center m-2">
     {wordArray.map((word,index)=>(
        <motion.span key={index}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:0.5,
            delay:index/20
    
        }}
        >
          
         {word}{' '}
        </motion.span>
     ))}
    </div>
  )
}

export default TextMotion