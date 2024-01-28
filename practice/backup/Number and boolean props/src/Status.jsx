const Status = (props) => {
    let status = props.status ? 'Old enough to drive' : 'Too young for driving'
    return <p>{status}</p>
}

export default Status