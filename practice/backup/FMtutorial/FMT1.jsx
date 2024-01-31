// how to create text
import {motion} from 'framer-motion'
const FramerMotion = () => {
  return (
    <div>
      <motion.h1
        initial={{x: -100}}
        animate = {{x:0}}
    //    animate = {{x:[0,900,0]}}
        transition = {{duration:2,
            delay:0.2
        }}
        whileHover={{scale:0.9,opacity:0.2}}
    >
        This is animation
      </motion.h1>
    </div>
  )
}

export default FramerMotion
