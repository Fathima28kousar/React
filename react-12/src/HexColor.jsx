const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return '#' + color;
}

const headerColor = hexaColor(); // Generate color once

const headerStyles = {
    height: '100px',
    width: '100vh',
    backgroundColor: headerColor
}

const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h1 style={headerStyles}>{headerColor}</h1>
            <h1 style={headerStyles}>{headerColor}</h1>
        </div>
    </header>
)

const HexaColor = () => (
    <div>
        <Header />
    </div>
)

export default HexaColor;