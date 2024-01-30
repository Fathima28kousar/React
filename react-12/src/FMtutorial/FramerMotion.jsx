import {motion} from 'framer-motion'
import {useState} from 'react'
const FramerMotion = () => {
    const [showCard,setShowCard] = useState(false)
  return (
    <div
     style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background:'grey'
    }}>
       <motion.div 
        style={{
            background:'#fff',
            padding: '3rem 2rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}
        whileHover={{
            scale:1.1,
        }}
            transition ={{
                layout:{
                    duration: 1,
                    type: 'spring'
                }
            }}
            layout
            onClick = {()=>setShowCard(!showCard)}
       >
        <motion.h3>Hover or click</motion.h3>
        {showCard && (
            <motion.p 
            style={{width:'600px'}}
            initial= {{opactiy:0}}
            animate = {{opacity: 1}}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero laborum at blanditiis vitae exercitationem a, aut minus dolores distinctio nostrum hic magni voluptatibus quisquam nulla nesciunt recusandae molestiae cumque.
            </motion.p>
        )}
        </motion.div> 
    </div>
  )
}

export default FramerMotion
