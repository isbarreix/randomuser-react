//import liraries
import React, { useContext } from 'react';
import './DetailView.css';
import UserCardInfo from './../../components/UserCardComponent';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Context as usersContext} from '../../context/UserContext';


const DetailView = () => {
  const history = useHistory();
  const  {state: {user} } = useContext(usersContext);

  if(!user) {
    history.replace( '/' );
  } 
  return (<>
   { user && <div className="homeContainer">
      <Grid container spacing={1}>
        <UserCardInfo
          person={ user }

        />
      </Grid>
    </div>
   }
  </>);
};

export default DetailView;
