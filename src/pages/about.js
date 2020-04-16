import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Profile from '../images/profile.jpg'

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
          Wilderness is not a luxury but a necessity of the human spirit, and as vital to our lives as water and good bread.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Edward Abbey
          </cite>

          <span classname="avatar"><img src={Profile} alt="" class="prof"/></span>
						<h1 class='prof'><strong>Colton Trent</strong></h1>

        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;