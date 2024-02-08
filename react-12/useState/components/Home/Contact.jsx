import ContactList from "./ContactList"
import {useEffect,useState} from 'react'
import Details from './Details'
import Axios from 'axios'

const Contact = () => {
    let [contacts,setContacts] = useState([])
    let [contact,setContact] = useState({})

    useEffect(()=>{
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
                .then((resp)=>{
                    setContacts(resp.data)
                })
                .catch(()=>{})
    })

    let getContact = (contact) =>{
      setContact(contact)
    }

  return (
    <div className='container'>
        
        <pre>{JSON.stringify(contacts)}</pre>
        <div className='row'>
          <div className='col-8'>
          <h1>Contacts</h1>
            {
              contacts.length > 0 ? <>
                <ContactList contacts={contacts} getContact={getContact}/> </> : <> No data!</>
            }
          </div>
          <div className='col-4'> 
              {
                Object.keys(contact).length > 0 ? <>
                  <Details selContact = {contact} />
                </>: <h1> </h1>
              }
          </div>
        </div>

    </div>
  )
}

export default Contact
