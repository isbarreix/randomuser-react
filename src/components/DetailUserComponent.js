import React from 'react'

import './DetailUserComponent.css';

import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const DetailUserComponent = (person) => {
    return (
    <List dense>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Hi, My name is'}
          secondary={person.name.last + ' ' + person.name.first}
        />
      </ListItem>
      <Divider />
      {
      !!person.login && <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={'My username is'}
            secondary={person.login.username}
          />
          </ListItem>
        <Divider />
      </>
      }
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'My email address is'}
          secondary={person.email}
        />
      </ListItem>
      <Divider />
      {
        !!person.location && !!person.location.street && <>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={'My address is'}
            secondary={person.location.street.number +' '+ person.location.street.name}
          />
        </ListItem>
        <Divider />
      </>
      }
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'My phone number is'}
          secondary={person.phone}
        />
      </ListItem>
    </List>

  )
}

export default DetailUserComponent;
