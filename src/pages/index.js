import React from 'react'
import Layout from '../components/layout';
import Barchart from '../components/barchart';
import TickTable from '../components/test';
import SEO from '../components/seo';
import Bar2 from '../components/barchart_2'


function IndexPage () {
  return (
    <Layout>
    <SEO
    keywords={[`Climbing`, `Statistics`]}
    title="Home"/>
    <h1 style={{
      color: '#333',
      fontSize: '200%'
    }}>Home</h1>
    <TickTable />
    <Barchart/>
    <Bar2/>
  </Layout>
  );
}
export default  IndexPage;