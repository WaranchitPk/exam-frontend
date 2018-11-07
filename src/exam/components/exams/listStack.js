import React from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

const ListStack = ({
                     listStack
                   }) => (
  <div>
    {
      listStack === null || listStack === undefined ? <CircularProgress size={50}/>
        : <Paper>
          {
            listStack.data.map(result => (
              <div key={result.id}>
                <List>
                  <ListItem button={true}>
                    <ListItemText primary={result.stack_data}/>
                  </ListItem>
                  <Divider/>
                </List>
              </div>
            ))
          }
        </Paper>
    }
  </div>
);

export default ListStack;
