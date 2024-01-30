// Drag
import {motion} from 'framer-motion'
const FramerMotion = () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Draggable objects with framer motion</h1>
        <div style={{
            display:'flex',
            flexDirection:'row',
            gap:'200px',
            alignItems:'center',
            justifyContent:'center',
            marginTop: '120px'
        }}>
            <div>
                <p>NO CONSTRAINT</p>
                <motion.div 
                style={{
                    width:'100px',
                    height: '100px',
                    backgroundColor:'blue'
                }}
                drag
                >
                
                </motion.div>
            </div>
            <div>
                <p>Y ONLY CONSTRAINT</p>
                <motion.div 
                style={{
                    width:'100px',
                    height: '100px',
                    backgroundColor:'blue'
                }}
                drag = 'y'
                >
                
                </motion.div>
            </div>
            <div>
                <p>DRAG CONSTRAINT</p>
                <motion.div 
                style={{
                    width:'100px',
                    height: '100px',
                    backgroundColor:'blue'
                }}
                drag
                dragConstraints = {{left:0,right:100,top:-100}}
                >
                
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default FramerMotion
