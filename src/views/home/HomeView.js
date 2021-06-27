//import liraries
import React, { useState, useEffect } from 'react';
import './HomeView.css';
import { CircularProgress, Grid } from '@material-ui/core';
import UserCardInfo from '../../components/UserCardComponent copy';
import { Typography } from '@material-ui/core';


const HomeView = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = () => {
    return fetch(`https://randomuser.me/api/?seed=asd&results=50&inc=name,location,id,picture,email`)
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

  useEffect(() => {
    let mounted = true;
    // pedido a la api
      fetchUsers().then(res => {
        if(mounted)
          setUsers(res.results);
      }).catch(()=> {
        setUsers([]);
      });
    // cleanup function
    return () => {
      mounted = false;
    };
  }, [!!users]);


  return (
    !users ? (
      <CircularProgress />
    ):(
      <>
        <div className="homeContainer">
          <Grid container spacing={1}>
            {
              users && users.length >=0 ? (
                users.map(person =>
                <UserCardInfo 
                  person= {person}
                  key= {person.email}
                />
              )
              ) : (
                <Typography >
                  Upps.. No hay información para mostrar
                </Typography>
              )
            }
          </Grid>
        </div>
      </>)
  );
};

export default HomeView;
