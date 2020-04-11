import React from 'react'
import Layout from '../components/layout';
import Barchart from '../components/barchart';
import TickTable from '../components/test';
import SEO from '../components/seo';


function IndexPage () {
  return (
    <Layout>
    <SEO
    keywords={[`gatsby`, `react`]}
    title="Home"/>
    <h1 style={{
      color: '#333',
      fontSize: '200%'
    }}>Home</h1>
    <TickTable />
    <Barchart />
  </Layout>
  );
}
export default  IndexPage;
