const Details = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
      <div className='card'>
          <div className='card-header'>
            <img src={props.selContact.picture.large} alt="" />
          </div>
          <div className='card-body'>
              <ul className='list-group'>
              <li className='list-group-item'> Name - {props.selContact.name.first} </li>
              <li className='list-group-item'> gender -  {props.selContact.gender} </li>
              <li className='list-group-item'> age -  {props.selContact.dob.age} </li>
              <li className='list-group-item'>  country - {props.selContact.location.country} </li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Details
