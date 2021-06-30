//import liraries
import React, { useContext } from 'react';
import './DetailView.css';
import UserCardInfo from './../../components/UserCardComponent';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Context as usersContext} from '../../context/UserContext';
import DetailUserComponent from '../../components/DetailUserComponent';
import Fade from '@material-ui/core/Fade';

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
    <div className="viewContainer">
      { user && (
        <div className="viewCol">
          <Grid item sm={6}>
            <Fade in={user}>
              <UserCardInfo
                person={ user }
                detail={ DetailUserComponent(user) }
              />
            </Fade>
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


  </>);
};

export default DetailView;
