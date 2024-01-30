import {useState} from 'react'
import {motion} from 'framer-motion'
// import { AnimatePresence } from 'framer-motion'
const FramerMotion = () => {
   const [show,setShow] = useState(true)

   const handleToggle = () => {
    setShow(!show);
   }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h1>Framer motion examples: Toggle content</h1>
      {/* {show ? <p>This is visible when show is true.</p> : <p>False Statement</p>} */}
      {/* {show && <p>This is using the && operator.</p>} */}
      {/* {show ? <p>This is using the ternary operator.</p> : null} */}
      {/* {!show && <p>This is using the falsy value check.</p>} */}
      {/* <AnimatePresence> */}
      {show && (
        <motion.div
          style={{ width: '100px', height: '100px', background: 'blue' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 100 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 1 }}
        ></motion.div>
      )}
      {/* </AnimatePresence> */}

      <button onClick={handleToggle} style={{padding:'12px 18px'}}>{show?'hide content':'Show content'}</button>

    </div>
  )
}

export default FramerMotion
