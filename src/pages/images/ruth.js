
import React from 'react'
import Layout from '../../components/layout'
import Ruth from '../../images/ruth_lake_crop.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Ruth Lake','Humboldt', 'California','Lake']}
            title = "Ruth Lake, California"
            />
        <div className= "Pic">
            <img src={Ruth} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Artistic Map of Ruth Lake, CA.
                 </blockquote>       
        </div>
        </Layout>
    )
}