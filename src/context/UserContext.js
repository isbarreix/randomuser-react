//import liraries
import createDataContext from './CreateDataContext';
import { history } from '../App';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'log_error':
            return {... state, errorMessage: action.payload };
        case 'update_users':
                return {...state, users: action.payload};
        case 'update_user':
          return {...state, user: action.payload};
        default:
            return state;
    }
};

const fetchUsers = () => {
  return fetch(`https://randomuser.me/api/?seed=asd&results=50&inc=name,location,id,picture,email,login`)
    .then(res => { 
      if(!!res && res.ok)
        return res.json();
      else 
        return Promise.reject();
    })
    .catch((e) => {
      return Promise.reject();
    });
}


const getUsers = dispatch => async (users) => {
  if(!users)
    fetchUsers().then(res => {
      dispatch({ type: 'update_users', payload: res.results });
    }).catch(() => {
      dispatch({ type: 'log_error', payload: 'Upps.. No hay información para mostrar' });
    });
  
}

const setUser = dispatch => (user) => {
  dispatch({ type: 'update_user', payload: user });
 

}


export const { Context, Provider } = createDataContext(
    authReducer,
    { 
        getUsers, setUser
    }, 
    {
      users: null,
      user: null,
      errorMessage: null
    }
);