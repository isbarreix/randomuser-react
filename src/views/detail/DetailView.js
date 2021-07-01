//import liraries
import React, { useContext } from 'react';
import './DetailView.css';
import UserCardInfo from './../../components/UserCardComponent';
import { Grid, Button, Grow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Context as usersContext} from '../../context/UserContext';
import DetailUserComponent from '../../components/DetailUserComponent';

const DetailView = () => {
  const history = useHistory();
  const  {state: {user} } = useContext(usersContext);

  const returnHome = () => {
    history.replace( '/' );
  }

  if(!user) {
    returnHome();
    return null;
  } 

  return (<>
    <Grow in={!!user}>
      <div className="viewContainer">
      { user && (
        <div className="viewCol">
          <Grid item sm={6}>
              <UserCardInfo
                person={ user }
                image={!!user.picture ? user.picture.large: ''}
                detail={ DetailUserComponent(user) }
              />
           
          </Grid>
        </div>
      )}
      <div className="viewCol">
        <Button
          variant="contained" 
          color="secondary"
          onClick={()=> returnHome()}
        >
          Return to home
        </Button>
      </div>

    </div>
    </Grow>
  </>);
};

export default DetailView;
