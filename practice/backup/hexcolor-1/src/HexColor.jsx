const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return '#' + color;
}

const headerColor1 = hexaColor(); 
const headerColor2 = hexaColor(); 
const headerColor3 = hexaColor(); 
const headerColor4 = hexaColor(); 
const headerColor5 = hexaColor(); 

const headerStyles1 = {
    height: '100px',
    width: '100vw',
    backgroundColor: headerColor1
}

const headerStyles2 = {
    height: '100px',
    width: '100vw',
    backgroundColor: headerColor2
}

const headerStyles3 = {
    height: '100px',
    width: '100vw',
    backgroundColor: headerColor3
}

const headerStyles4 = {
    height: '100px',
    width: '100vw',
    backgroundColor: headerColor4
}
const headerStyles5 = {
    height: '100px',
    width: '100vw',
    backgroundColor: headerColor5
}

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1 style={headerStyles1}>{headerColor1}</h1>
            <h1 style={headerStyles2}>{headerColor2}</h1>
            <h1 style={headerStyles3}>{headerColor3}</h1>
            <h1 style={headerStyles4}>{headerColor4}</h1>
            <h1 style={headerStyles5}>{headerColor5}</h1>
            
        </div>
    </header>
)

const HexaColor = () => (
    <div>
        <Header />
    </div>
)

export default HexaColor;