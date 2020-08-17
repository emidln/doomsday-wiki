import TranslateIcon from 'mdi-react/TranslateIcon';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Rosetta({ component: Component, ...rest }) {

  const [ menu, setMenu ] = useState(null);
  const [ , i ] = useTranslation();

  const onClose = () => {
    setMenu(null);
  };

  const onOpen = event => {
    setMenu(event.currentTarget);
  };

  const onSelect = language => () => {
    i.changeLanguage(language);
    onClose();
  };

  useEffect(() => {
    console.log(i.languages, i.language);
  }, [i]);

  return (
    <Component {...rest}>
      <IconButton color="inherit" onClick={onOpen}>
        <TranslateIcon />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={menu}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        onClose={onClose}
        open={!!menu}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem onClick={onSelect('en')}>English</MenuItem>
        <MenuItem onClick={onSelect('fr')}>Français</MenuItem>
        <MenuItem onClick={onSelect('zh')}>中文</MenuItem>
      </Menu>
    </Component>
  );
}

Rosetta.defaultProps = {
  component: 'div',
};

Rosetta.propTypes = {
  component: PropTypes.elementType,
};
