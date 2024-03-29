import ReactDOM from 'react-dom'
import App from './App'
import store from './Store';
import {Provider} from 'react-redux'


const rootElement = document.querySelector('#root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,rootElement);
// console.log(store)