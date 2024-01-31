// exit enter
import {motion, AnimatePresence} from 'framer-motion'
import {useState} from 'react'

const FramerMotion = () => {
    const [show,setShow] = useState(true)
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
      <h1 style={{marginTop:'30px'}}>Framer Motion Tutorial : Exit and enter animation</h1>
      <AnimatePresence>
        {show && <motion.div
            style={{width:'100px',height: '100px',background:'blue'}}
            initial= {{opacity:0, x:50}}
            animate = {{opacity: 1, x: 100}}
            exit = {{opacity:0, x: -150}}
            transition = {{
                duration: 1
            }}
        ></motion.div>}
      </AnimatePresence>
      <button onClick={()=>setShow(!show)} style={{padding:'12px 18px'}}>{show?"Remove Box":"Add Box"}</button>
    </div>
  )
}

export default FramerMotion
