import ReactDOM from 'react-dom'
import App from './App'
import { createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
const store = createStore(rootReducer)


const rootElement = document.querySelector('#root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

,rootElement);
// console.log(store)