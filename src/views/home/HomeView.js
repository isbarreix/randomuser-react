//import liraries
import React, { useEffect, useContext  } from 'react';
import './HomeView.css';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import UserCardInfo from '../../components/UserCardComponent';
import { Context as usersContext} from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import PresentationUserComponent from '../../components/PresentationUserComponent';
import Fade from '@material-ui/core/Fade';
const HomeView = () => {
  const history = useHistory();

  const  {state: {users, errorMessage}, getUsers, setUser } = useContext(usersContext);

  useEffect(() => {
    getUsers(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onCLickUser = (e, person) => {
    e.preventDefault();
    setUser(person);
    history.push(`/person/${person.login.uuid}`); 

  } 


  return (
  <div className="homeContainer">
    {
      !errorMessage ? (
        !users ? (
          <CircularProgress />
        ):(
          <>
            <Fade in={!!users}>
              <Grid container spacing={3}>
                {
                  users && users.length >=0 && (
                    users.map(person =>(
                      <Grid item xs={6} sm={3} lg={2}key= {!!person.login ? person.login.uuid : 'GridCard' + person.email}>
                        <UserCardInfo 
                          person={person}
                          image={!!person.picture ? person.picture.thumbnail : ''}
                          handleClick={ onCLickUser } 
                          detail={ PresentationUserComponent(person) }
                        />
                      </Grid>
                  ))) 
                  
                }
              </Grid>
            </Fade>
          </>
        )):(
          <Typography >
            { errorMessage }
          </Typography>
        )
    }
  </div>
  );
};

export default HomeView;
