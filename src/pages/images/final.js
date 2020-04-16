import React from 'react'
import Layout from '../../components/layout'
import Final from '../../images/final.png'
import SEO from '../../components/seo'


export default function final() {
    return (
        <Layout>
            <SEO keywords ={['Zombies','Bunker']}
            title = "Zombie Bunker"
            />
        <div className= "Pic">
            <img src={Final} alt="" class="prof"/>
                <blockquote className="prof pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
                    Optimal Place for a Bunker During a Zombie Apocalypse.
                 </blockquote>
        
        </div>
        </Layout>
    )
}