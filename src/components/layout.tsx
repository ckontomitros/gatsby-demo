import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { container } from './layout.module.css';
interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}
const Layout = ({ pageTitle , children }: LayoutProps) => {
  return (
    <div className={container}>
    <main>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
    </div>
  );
};
export default Layout;