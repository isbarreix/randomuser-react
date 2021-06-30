import React from 'react'
import './PresentationUserComponent.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PresentationUserComponent = (person) => {
  return (
    <List dense>
    <ListItem className="presentationListItem">
      <ListItemText
        primary={person.name.last + ' ' + person.name.first}
        secondary={person.location.city + ', ' + person.location.country}
      />
    </ListItem>
  </List>
  )
}

export default PresentationUserComponent;
