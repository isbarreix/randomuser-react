//import liraries
import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import './UserCardComponent.css';

// create a component
const UserCardInfo = ({person, handleClick, image, detail}) => {
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
            image={ image }
          /> 
        ): (
          <CardMedia
            className="cardMedia userCardMediaDetail"
            image={ image }
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
