
import React from 'react'
import Layout from '../../components/layout'
import Cost from '../../images/least_cost_path.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Path','Wolpertinger', 'Bay','HUmboldt']}
            title = "Least Cost Path"
            />
        <div className= "Pic">
            <img src={Cost} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Least Cost Path of Wolpertingers in Humboldt County, CA.
                 </blockquote>       
        </div>
        </Layout>
    )
}