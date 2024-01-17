import ReactDOM from 'react-dom'
class Parent{
    constructor(firstName,lastName,country,title){
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.title = title
    }
    getPersonInfo(){
        return `${this.firstName} ${this.lastName}, ${this.title} developer base in ${this.country}`

    }
    parentMethod(){

    }
}
const p1 = new Parent('fathima','kousar','Finland','full stack')

class Child extends Parent {
    constructor(firstName,lastName,country,title,skills){
        super(firstName,lastName,country,title)
        this.skills = skills
    } 
    getSkills(){
        let len = this.skills.length
        return len > 0 ? this.skills.join('') : 'No skills found'
    }
}
const skills = ['HTML','CSS','JS','REACT']
const child = new Child(
    'lubna',
    'sadiya',
    'new york',
    'graphic designer',
    skills
)


const app = (
    <div>
        {child}
        {p1}
    </div>
)

const rootElement = document.querySelector('#root')
ReactDOM.render(app,rootElement)