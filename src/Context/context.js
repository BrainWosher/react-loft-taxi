import {createContext} from 'react';

const Context = createContext({
    auth: () => '',
    loginStatus: () => false
});
export default Context;