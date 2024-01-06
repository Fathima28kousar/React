import Message from './Messages/Message'
import Movie from './Messages/Movie'
import Navbar from './Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CompA from './PropsEX/CompA'

function App(){
  return <div>
    <Navbar/>
    <h1>Hello World!</h1>
    <button className='btn btn-success'>Hello</button>
    <hr/>
    <Message/>
    <hr/>
    <Movie/>
    <CompA/>
  </div>
}
export default App
