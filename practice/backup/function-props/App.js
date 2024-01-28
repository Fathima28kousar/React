import Button from './Button'
function App() {
    // const showDate = (time) => {
    //     const months = [
    //       'January',
    //       'February',
    //       'March',
    //       'April',
    //       'May',
    //       'June',
    //       'July',
    //       'August',
    //       'September',
    //       'October',
    //       'November',
    //       'December',
    //     ]
      
    //     const month = months[time.getMonth()].slice(0, 3)
    //     const year = time.getFullYear()
    //     const date = time.getDate()
    //     return ` ${month} ${date}, ${year}`
    //   }
    const sayHi = () =>{
        alert('Hi')
    }
    // const handleTime = () =>{
    //     alert(showDate(new Date()))
    // }
    return <div>
        <Button text='Say Hi!' onClick={sayHi}/>
        <Button text='Show Time' onClick={() => alert(new Date())} />
        {/* <Button text='Time' onClick={handleTime} /> */}
    </div>
}
export default App