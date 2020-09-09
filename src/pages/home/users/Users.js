import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Users.scss';

 class Users extends Component {
    render() {
        return (
            <Fragment>
                <div className="users-list py-2">
                <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Rochas O." src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rochas O."
          secondary={
            <React.Fragment>
             Neighborhood doing 
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tobi" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Tobi Onike"
          secondary={
            <React.Fragment>
            Wish I could come
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Oni" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oni of Ife"
          secondary={
            <React.Fragment>
            Paris recommendations
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
                  </div>
            </Fragment>
        )
    }
}

export default Users;
