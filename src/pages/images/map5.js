
import React from 'react'
import Layout from '../../components/layout'
import Map from '../../images/map_5.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Sea level','Rise', 'Bay','HUmboldt']}
            title = "Sea Level Rise"
            />
        <div className= "Pic">
            <img src={Map} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Sea Level Rise Around Humboldt Bay.
                 </blockquote>       
        </div>
        </Layout>
    )
}