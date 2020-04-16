import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
    return (
    <Layout>
        <SEO Keywords={['contact','phone','number','email']}
         title= "Contact"/>
             <h1 style={{
                    color:'#333',
                    fontSize: '200%',
                }}>Contact</h1>

            <p style={{
                color: '#333',
            }}
                href="crtrent43@gmail.com">
                Email: Crtrent43@gmail.com</p>
            <a style={{
                color: '#333',
                }}
                href="https://github.com/coltontrent"
                >Github: ColtonTrent </a>
            <a style={{
                color: '#333',
                }}
                href="https://www.linkedin.com/in/colton-trent-7690821a1/"
                >Linkedin: Colton Trent </a>
    </Layout>
    )
}
