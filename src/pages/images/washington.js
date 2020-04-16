
import React from 'react'
import Layout from '../../components/layout'
import Washington from '../../images/washington.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Washington','Rent', 'Data Classification']}
            title = "Rent in Washington State"
            />
        <div className= "Pic">
            <img src={Washington} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                Median Rent in the State of Washington by County, Displayed using Different Data Classification Types.
                 </blockquote>       
        </div>
        </Layout>
    )
}