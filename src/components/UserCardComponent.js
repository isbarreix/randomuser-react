//import liraries
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Grid, Typography } from '@material-ui/core';


// create a component
const UserCardInfo = ({person, handleClick}) => {
  return (
    <Grid item xs={6} sm={3} md={2} lg={1}>
      <Card
        className="card"
        style={{ height: "100% !important"}}
      >
        <CardMedia
          className="cardMedia"
          image={ person.picture.thumbnail }
        /> 
        <CardContent>
          <Typography><b>{person.name.last}</b>&nbsp;{person.name.first}</Typography>
          <Typography>{person.location.city},</Typography>
          <Typography>{person.location.state},</Typography>
          <Typography>{person.location.country}</Typography>
        
        </CardContent> 
      { 
        !!handleClick && (     
          <CardActions style={{justifyContent:"center"}}>
            <Button 
              size="small"
              onClick={e => handleClick(e, person)}   
            >Learn More
            </Button>
          </CardActions>
        )
      }
      </Card>
    </Grid>
  )
  ;
};


//make this component available to the app
export default UserCardInfo;
