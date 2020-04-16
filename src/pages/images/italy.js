
import React from 'react'
import Layout from '../../components/layout'
import Italy from '../../images/italy_2.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Italy','Ruins', 'Castles']}
            title = "Castles and Ruins in Italy"></SEO>
        <div className= "Pic">
            <img src={Italy} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Castles and Ruins  in Italy.
                 </blockquote>       
        </div>
        </Layout>
    )
}