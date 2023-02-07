import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <main>
        Hello gatsby
        <br />
        <StaticImage alt="A demo image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2010%2F06%2F17%2F4161594%2F2_Getty04.jpg&f=1&nofb=1&ipt=1ce8b174960233f88e18e5e3b44fe0f5d7edb8a21430da3a345ede80756f2c9d&ipo=images"/>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
