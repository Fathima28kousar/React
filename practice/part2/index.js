import ReactDOM from 'react-dom'

const header = (
    <div className='headerElement'>
        <h1>Hello World!</h1>
    </div>
)

const skills = ['HTML','CSS','JS']
const getUserInfo = (firstName,lastName,country,title,skills) => {
    return `${firstName} ${lastName}, ${title} developer is from ${country} .Knows skills ${skills.join('')}`
}
const userInfo = getUserInfo('fathima','kousar','india','software developer',skills)


const app = (
    <div className='app'>
        {header}
        {userInfo}
    </div>
)

const rootElement = document.querySelector('#root');
ReactDOM.render(app,rootElement);