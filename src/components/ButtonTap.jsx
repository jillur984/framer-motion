import { motion } from "framer-motion";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-1 border m-2 rounded-md
        "
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.5 }}
      >
        Tap Me
      </motion.button>
      <motion.button
        className="bg-black text-white p-1 border m-2 rounded-md
        "
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.5 ,
            transition:{yoyo:Infinity}
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
