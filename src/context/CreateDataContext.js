//import liraries
import React, { useReducer } from 'react';

  /*
    This function let automate the process of creation and design behavior of an object Context. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
    Passing a initial or default state of the share data, a Reducer function that determines changes to an application’s state using actions it receives to determine this change and a set of helpers functions with differents callback functions that we want to make available to our child components so they can somehow dispatch an action to change the share data (state) in that context. 
    Return/export an a context object and a provider function with a generic variable name that provide data wich can be consumed by the components that are sybscribed.
  */


  const CustomContext = (reducer, actions, defaultValue) => {
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
  }
  
  export default CustomContext;


