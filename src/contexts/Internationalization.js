import PropTypes from 'prop-types';
import React from 'react';
import '../tools/internationalization';

export const InternationalizationContext = React.createContext();

export function InternationalizationProvider({ children }) {
  return (
    <InternationalizationContext.Provider>
      {children}
    </InternationalizationContext.Provider>
  );
}

InternationalizationProvider.propTypes = {
  children: PropTypes.node,
};
