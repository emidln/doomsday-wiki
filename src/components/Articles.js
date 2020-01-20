import { StaticQuery, graphql } from 'gatsby';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Prettylink from './Prettylink';


export default class Articles extends React.PureComponent {
  render() {
    const query = graphql`{
      articles: allFile(
        filter: {relativeDirectory: {glob: "articles/**/*"}},
        sort: {fields: fields___slug, order: ASC}
      ) {
        nodes {
          childMarkdownRemark {frontmatter {authors title}}
          fields {date slug}
        }
      }
    }`;
    return <StaticQuery query={query} render={({ articles }) => (
      <>
        <Typography children="Articles" gutterBottom variant="h3" />
        <List disablePadding>
          {articles.nodes.map(({ childMarkdownRemark: content, fields }, index) => {
            const title = content.frontmatter.title;
            const authors = content.frontmatter.authors ? ` by ${content.frontmatter.authors}` : '';
            return (
              <ListItemText component={Prettylink}
                            key={index}
                            primary={<Prettylink children={title} href={fields.slug} />}
                            secondary={`${fields.date}${authors}`} />
            );
          })}
        </List>
      </>
    )} />;
  }
}
