import Header from './Header';

function App() {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library'
    }
    return (
        <div>
            <Header information={data} />
        </div>
    )
}
export default App;
