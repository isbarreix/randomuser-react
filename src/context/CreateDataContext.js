//import liraries
import React, { useReducer } from 'react';
  // generic reducer

  export default (reducer, actions, defaultValue) => {

    // context object

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
                
        
        return( <Context.Provider value={ { state: state, ...boundActions } }>
            { children }
            </Context.Provider>
        );
    }

    return {Context, Provider}
};

