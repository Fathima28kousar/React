const Header = (props) =>{
    return (
        <div>
            <h1>{props.information.welcome}</h1>
            <h2>{props.information.title}</h2>
            <h3>{props.information.subtitle}</h3>
        </div>
    )
}
export default Header