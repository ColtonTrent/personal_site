
import React from 'react'
import Layout from '../../components/layout'
import Socal from '../../images/socal_earthquakes.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Earthquakes','Southern California', 'California','fault']}
            title = "Earthquakes in Southern California"
            />
        <div className= "Pic">
            <img src={Socal} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                EarthQuakes in Southern California since 2010.
                 </blockquote>       
        </div>
        </Layout>
    )
}