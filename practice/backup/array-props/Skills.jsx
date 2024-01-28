const Skills = (props) => {
    const skillList = props.skills.map((skill) => <li>{skill}</li>)
    return <div>
        <ul>{props.skills[0]}</ul>
        <ul>{props.skills[1]}</ul>
        <ul>{props.skills[2]}</ul>
        <ul>{props.skills}</ul>
        <ul>{skillList}</ul>
    </div>
}
export default Skills