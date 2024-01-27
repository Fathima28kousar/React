import './App.css'
import Navbar from './components/Navigation/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App =() => {
    return(
        <div>
            <Navbar/>
            <main className='main_container'> 
                <ContactHeader/>
                <ContactForm/>
            </main>
            
        </div>
    )
    
}
export default App