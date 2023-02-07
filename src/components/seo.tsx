import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

const Seo = ({title}: {title: string}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};
export default Seo;