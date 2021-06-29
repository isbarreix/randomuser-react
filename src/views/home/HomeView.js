//import liraries
import React, { useState, useEffect, useContext  } from 'react';
import './HomeView.css';
import { CircularProgress, Grid } from '@material-ui/core';
import UserCardInfo from '../../components/UserCardComponent';
import { Typography } from '@material-ui/core';
import { Context as usersContext} from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const HomeView = () => {
  const history = useHistory();

  const  {state: {users, errorMessage}, getUsers, setUser } = useContext(usersContext);

  useEffect(() => {
    getUsers(users);
  }, []);

  useEffect(() => {
    setUser(null);
  }, []);

  const onCLickUser = (e, person) => {
    e.preventDefault();
    setUser(person);
    //redireccionamos
/*     history.push(`/person/${}/${person.ord}`); */
    history.push(`/person/${person.login.uuid}`); 

  } 


  return (
    !users ? (
      <CircularProgress />
    ):(
      <>
        <div className="homeContainer">
          <Grid container spacing={1}>
            {
              users && users.length >=0 && (
                users.map(person =>
                <UserCardInfo 
                  person= {person}
                  key= {person.email}
                  handleClick={ onCLickUser} 
                />
              )) 
            }
            {
              errorMessage &&
                <Typography >
                  Upps.. No hay información para mostrar
                </Typography>
              
            }
          </Grid>
        </div>
      </>)
  );
};

export default HomeView;
