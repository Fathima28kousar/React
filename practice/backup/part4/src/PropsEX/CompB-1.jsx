function CompB(props){
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>User ID: {props.id}</h3>
        <h3>User Name: {props.name}</h3>
        <h3>Loc:{props.loc[0]}</h3>
        <h3>Name:{props.name}</h3>
        <h3>Salary:{props.salary}</h3>
        
    </div>
}

export default CompB