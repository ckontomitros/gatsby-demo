import * as React from 'react';
import { HeadFC, Link, PageProps, useStaticQuery, graphql } from 'gatsby';
import { container } from './layout.module.css';
interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}
const Layout = ({ pageTitle , children }: LayoutProps) => {
  // query for title
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
    <div className={container}>
      <header> {data.site.siteMetadata.title} </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>

      <h1>{pageTitle}</h1>
      {children}
    </main>
    </div>
  );
};
export default Layout;