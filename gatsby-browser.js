const React = require ('react');
const Layout = require('./src/components/Layout').default;
const { InternationalizationProvider } = require('./src/contexts/Internationalization');
const { SidebarProvider } = require('./src/contexts/Sidebar');
const { ThemeProvider } = require('./src/contexts/Theme');

exports.shouldUpdateScroll = () => 'body';

/* eslint-disable-next-line react/display-name, react/prop-types */
exports.wrapPageElement = ({ element, ...rest }) => (
  <Layout {...rest}>{element}</Layout>
);

/* eslint-disable-next-line react/display-name, react/prop-types */
exports.wrapRootElement = ({ element }) => (
  <InternationalizationProvider>
    <SidebarProvider>
      <ThemeProvider>
        {element}
      </ThemeProvider>
    </SidebarProvider>
  </InternationalizationProvider>
);
