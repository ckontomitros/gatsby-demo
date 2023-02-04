import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About Page'>
<main>
        <p>Hi there ! I am a proud `creator`</p>
    </main>
    </Layout>
    
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;