import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About Page'>
<main>
        <p>Hi there ! I am a proud `creator`</p>
        <br />
        <StaticImage alt='my pic' src='../images/profile_slack.jpeg'/>
    </main>
    </Layout>
    
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Page"  />;
