//import liraries
import createDataContext from './CreateDataContext';
import { fetchUsers } from '../services/api';
/*
 * Que queria realizar. Una aplicacion que cuando se encuentre en el listado de usuarios busque un conjunto de usuarios desde la API, recuperando la pequeña informacion previa que cumple los requisitos (thumbaids, full name, id).
  Cuando se interactua con alguna de las miniaturas de los usuarios pasar a una nueva pagina y a partir de tipo de identificador univoco recuperar mayor informacion del usuario desde la API y mostrarla (los anteriores mas telefono,email, username..) 
 * (#) Dado que la api hay casos en el que no se puede recuperar la informacion de un usuario a partir de un set de resultados mas detallado en (##) 
  se tuvo que optar por otra estrategia de recuperacion, la misma es hacer un guardado de estos mismos y de un usuario en particular, este mismo es el se encuentra implicado en la interaccion. 
  Los sustentos de esta estrategia son: 
    busca que en el caso que haya un cambio de API que provea la misma informacion haga un impacto minimo en la aplicacion, en este caso se crearia un nuevo archivo UserContext y la aplicacion operaria de la misma forma.
    En el caso que se busque hacer un paginado P de los usuarios con una cantidad N, se guardarian todo el tiempo N usuarios de la pagina P. En el cambio de pagina P' se cambiarian los usuarios guardados a los que se hallan en la pagina P', 
    logrando que no halla problemas de memoria.
 ## https://github.com/RandomAPI/Randomuser.me-Node/issues/97
*/

const authReducer = (state, action) => {
    switch (action.type) {
        case 'log_error':
            return {...state, errorMessage: action.payload };
        case 'update_users':
                return {...state, users: action.payload};
        case 'update_user':
          return {...state, user: action.payload};
        default:
            return state;
    }
};

/* Realiza un llamado a la api de los usuarios. En el caso que esta responda acorde actualizara el listado de usarios y en el caso contrario actualizara la muestra de errores.
 * 
*/
const getUsers = dispatch => async (users) => {
  if(!users)
    fetchUsers().then(res => {
      dispatch({ type: 'update_users', payload: res.results });
    }).catch(() => {
      dispatch({ type: 'log_error', payload: 'Upps.. No hay información para mostrar' });
    });
  
}

/*
 *  Actualiza al usuario seleccionado.
*/

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