const hexColor =() =>{
    let str = '0123456789abcdef';
    let color = '';
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random()*str.length);
        color += str[index];
    }
    return '#' + color
}

const colors = [];
for(let i=0; i<32; i++){
    colors.push(hexColor());
}

const headerStylesArray = colors.map((color)=>({
    height: '100px',
    width: '100px',
    backgroundColor: color,
    border: '2px solid black',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const HexColor =() =>{
    return<div className="container mt-5 ml-auto" >
            <center>
                <h1>30 Days of React</h1>
                <h6>HexaDecimal colors</h6>
            </center>
            <div className="col-10 ml-5">
                <div className="row">
                    {headerStylesArray.map((style,index)=>(
                        <p key={index} style={style} >{colors[index]}</p>
                    ))}
                </div>
            </div>
        </div>
}
export default HexColor
