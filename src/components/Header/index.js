import React, { useContext } from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SidebarContext } from '../../contexts/Sidebar';
import Rosetta from './Rosetta';
import useStyles from './styles';

export default function Header() {
  const { toggleDrawer } = useContext(SidebarContext);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        {isMobile && (
          <IconButton color="inherit" onClick={toggleDrawer()}>
            <MenuIcon />
          </IconButton>
        )}
        <Rosetta component={Box} ml="auto" />
      </Toolbar>
    </AppBar>
  );
}
