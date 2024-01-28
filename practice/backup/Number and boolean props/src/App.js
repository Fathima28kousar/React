import Age from './Age'
import Status from './Status'
import Weight from './Weight'

function App(){
    let currentYear = 2020
    let birthYear = 1820
    let age = currentYear - birthYear
    let gravity = 9.81
    let mass = 75
    let currentYear1 = 2020
    let birthYear1 = 2015
    const age1 = currentYear1 - birthYear1
    let status = age1 >= 18

    return <div>
        <Age age={age} />
        <Weight weight={gravity * mass} />
        <Status status={status} />
    </div>
}
export default App

