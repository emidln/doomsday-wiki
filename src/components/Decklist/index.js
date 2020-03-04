import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Collapsible from '../Collapsible';
import useStyles from './styles';


export default function Decklist({ collapsible, path, ...rest }) {

  const classes = useStyles();
  const { decks } = useStaticQuery(graphql`{
    decks: allDeck {
      edges {
        node {
          main
          relativePath
          side
        }
      }
    }
  }`);
  const node = decks.edges.find(({ node }) => node.relativePath === path);
  const { main, side } = node && node.node || {main: [], side: []};

  const row = ([ amount, card], index) => (
    <Typography children={`${amount} ${card}`} component="li" key={index} />
  );

  const wrapper = collapsible ? Collapsible : 'div';
  const title = <>Decklist: <Typography children={path} color="textSecondary" component="span" /></>;
  const deck = (!!main.length || !!side.length) && (
    <div className={classes.root}>
      <div className={classes.content}>
        {!collapsible && path && <Typography children={path} gutterBottom variant="h5" />}
        <Grid container>
          {!!main.length && (
            <Grid item xs={12} sm={6} md={8}>
              <Typography children="Maindeck" gutterBottom variant="h6" />
              {main.map((it, index) => <List children={it.map(row)} disablePadding key={index} />)}
            </Grid>
          )}
          {!!side.length && (
            <Grid item xs={12} sm={6} md={4}>
              <Typography children="Sideboard" gutterBottom variant="h6" />
              {side.map((it, index) => <List children={it.map(row)} disablePadding key={index} />)}
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );

  return React.createElement(wrapper, {...(collapsible && {title, zoom: true}), ...rest}, deck);
}


Decklist.propTypes = {
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  path: PropTypes.string.isRequired,
};
