//import liraries
import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography } from '@material-ui/core';


// create a component
const UserCardInfo = ({person}) => {
  return (
    <Grid item xs={6} sm={3} md={2} lg={1}>
      <Card
      /*  onClick={() =>}   */
      className="card"
      style={{ height: "100% !important"}}
      >
        <CardMedia
          className="cardMedia"
          image={ person.picture.thumbnail }
        />
          <CardContent>
            <Typography><b>{person.name.last}</b>&nbsp;{person.name.first}</Typography>
            <Typography>{person.location.city}</Typography>
            <Typography>{person.location.state}</Typography>
            <Typography>{person.location.country}</Typography>
          
            </CardContent>

      </Card>
    </Grid>
  )
  ;
};


//make this component available to the app
export default UserCardInfo;
