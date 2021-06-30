//import liraries
import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import './UserCardComponent.css';

// create a component
const UserCardInfo = ({person, handleClick, detail}) => {
  if(!person) return null;
  return (
    <Card
      className="card userCard"
      elevation={3}
    >
      {
        !!handleClick ? (
          <CardMedia
            onClick={e => handleClick(e, person)}   
            className="cardMedia userCardMedia"
            image={ person.picture.thumbnail }
          /> 
        ): (
          <CardMedia
            className="cardMedia userCardMediaDetail"
            image={ person.picture.large }
          /> 
        )
      }

      {!!detail && (
          <CardContent className="userCardContent">
          
            {detail} 
            
          </CardContent> 
      )}
    </Card>
  )
  ;
};


//make this component available to the app
export default UserCardInfo;
