import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Final from '../images/final.png'
import Bigfoot from '../images/bigfoot.png'
import Italy from '../images/italy_2.png'
import Cost from '../images/least_cost_path.png'
import Map5 from '../images/map_5.png'
import Ruth from '../images/ruth_lake_crop.png'
import Socal from '../images/socal_earthquakes.png'
import Washignton from '../images/washington.png'




export default function cart() {
	return (
		<Layout>
		<SEO
		keywords = {['cartography','maps']}
    	title="Cartography"/>
		<div>
            <section classname="column">
				<div className="row">
					<a href="/images/final">
						<img src={Final} alt=""/>
						<blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Optimal Place for a Bunker During a Zombie Apocalypse.
                        </blockquote>	
                    </a>
					<a href="/images/socal">
                        <img src={Socal} alt="" />
                        <blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Earthquakes in Southern California since 2010.
                        </blockquote>
                    </a>
                    <a href="/images/italy">
                        <img src={Italy} alt="" />
                        <blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Ruins and Castles in Italy.
                        </blockquote>
					</a>
				</div>
            </section>
            <section classname="column">
				<div className="row">
					<a href="/images/cost">
						<img src={Cost} alt="" />
						<blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Least Cost Path of Wolpertingers in Humboldt County, CA.
                        </blockquote>
					</a>
                    <a href="/images/bigfoot">
						<img src={Bigfoot} alt="" />
						<blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Bigfoot Sightings in America.
                         </blockquote>
					</a>
					<a href="/images/washington">
						<img src={Washignton} alt="" />
						<blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Median Rent in the State of Washington by County, Displayed using Different Data Classification Types.
                        </blockquote>
					</a>
				</div>
            </section>
            <section classname="column">
				<div className="row">
					<a href="/images/map5">
						<img src={Map5} alt="" />
                        <blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Sea Level Rise Around Humboldt Bay.
                        </blockquote>
					</a>
					<a href="/images/ruth">
						<img src={Ruth} alt="" />
						<blockquote className="pl-4 font-serif leading-loose text-left border-l-4 border-gray-900">
                        Artistic Map of Ruth Lake, CA.
                        </blockquote>
					</a>									
				</div>
            </section>
		</div>
	    </Layout>
	)
}
