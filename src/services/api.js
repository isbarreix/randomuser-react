/*
  Se establecieron una serie de parametros fijos para la solicitud de información estos incluyen: nombre dirección, id, imagen, email teléfono y datos de login de los usuarios.
En esta versión se estableció un fijo de 50 persona, según la documentación de randomuser.me un set establecido de usuarios a partir de la seed rotulada 'asd'.
Una mejora de esta funcion de usuarios seria pasar la informacion que se quiere de los usuarios y la cantidad de estos a través de los parámetros de la función, pero por la razon del Context Provider(#) se opto por hacerlo fijo.
*/

export const fetchUsers = () => {
  return fetch(`https://randomuser.me/api/?seed=asd&results=50&inc=name,location,id,picture,email,login,phone`)
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