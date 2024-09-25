import { motion } from "framer-motion"
const Box=({text})=>{
   return (
    <motion.div className="w-48 h-32 bg-pink-500 p-5 m-4 text-justify text-center"
    initial={{opacity:0,x:-50}}
    whileInView={{
        opacity:1,
        x:0,
        transition:{
            duration:1
        }
    }}

    viewport={{once:true}}
    >
        {text}
    </motion.div>
   ) 
     
}


const ScroolReveal = () => {

    const greetings=["Hello","Jillur","Assalamualikum","ComeIn"]

  return (
    <>
    <div>
        {greetings.map((greeting,index)=>(
            <Box key={index} text={greeting}/>
        ))}
    </div>
    </>
  )
}

export default ScroolReveal