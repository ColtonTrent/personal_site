import React from 'react'
import Layout from '../../components/layout'
import Bigfoot from '../../images/bigfoot.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Bigfoot','Sightings']}
            title = "Bigfoot Sightings"
            />
        <div className= "Pic">
            <img src={Bigfoot} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Bigfoot Sightings in America.
                 </blockquote>
        
        </div>
        </Layout>
    )
}