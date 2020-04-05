import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Paragraph({ children }) {
  const component = children[0].type.displayName === 'ParsedHtml' ? 'div' : 'p';
  return <Typography children={children} component={component} gutterBottom />;
}


Paragraph.propTypes = {
  children: PropTypes.node,
};