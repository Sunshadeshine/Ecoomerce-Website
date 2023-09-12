import React from 'react'
import Layout from '../components/Layout/Layout'
import './About.css'
const About = () => {
  return (
    <div className = "section_header">
       <Layout>
    <section>
      <div class="about-us">
         {/* about us story page */}
         {/* <img src='https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' alt ="about us"/> */}
      </div>
      <div className='d-flex About-ceo'>
        {/* meet the ceo */}
        <div className='ceo_image'>
          {/* ceo pictre */}
           <img src="/ceo3.jpg" alt="Logo"/>
        </div>
         <div className='ceo_data align-self-center'>
             <h2>Meet Our CEO</h2> 
              <div>CHARU PATEL</div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquam minima. Magni laboriosam facere exercitationem iste pariatur deleniti maiores quasi doloribus eius quibusdam. Mollitia iure quos in officiis voluptates deserunt.
               <br/>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquam minima. Magni laboriosam facere exercitationem iste pariatur deleniti maiores quasi doloribus eius quibusdam. Mollitia iure quos in officiis voluptates deserunt.
               <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquam minima. Magni laboriosam facere exercitationem iste pariatur deleniti maiores quasi doloribus eius quibusdam. Mollitia iure quos in officiis voluptates deserunt.   </p>
         </div>
      </div>
     
         <header className='d-flex flex-row justify-content-center align-items-center small_heading'>
          <div>
             <a href="/">HOME</a>
          </div>
          <div className='dot'>
          </div>
           <div>
            <a href="/about">THE COMPANY</a>
          </div>
          </header>
          <main>
             <h1>About Us</h1>
          <div>
            Welcome to Bagma Overseas, a government-recognized export firm based in Delhi-NCR, India, with a cutting-edge production hub in Panipat, Haryana. Led by an experienced CEO, we excel in crafting high-quality home textiles, specializing in floor mats and rugs.<br/><br/>

Our product range includes Floor Mats, Bath Mats, Tufted Bath Rugs, Anti-Slip Latexed Mats, Door Mats, Outdoor Mats, and more. We also offer Indian Cotton Rugs/Mats and Anti-Slip Rubberized Mats, serving both international and local markets.

<br/>Our diverse collection, available in various colors, sizes, and designs, undergoes rigorous quality control. Whether with or without anti-skid backing, our mats and rugs prioritize safety and convenience.<br/><br/>

From Reversible Mats to Children/Kids Mats, we employ various manufacturing techniques, catering to promotional and premium markets worldwide.

Bagma Overseas exports to the USA, UAE, Saudi Arabia, Qatar, Mauritius, Australia, and more. Locally, we serve hotels, resorts, wholesalers, and corporate clients.<br/>

Explore our range of Stock Mats, Rugs, Bath Mats, and more for immediate solutions.<br/>

Experience quality and diversity with Bagma Overseas - Your Home Textiles Partner
          </div>
       
          </main>
         
    </section>
    </Layout>
    </div>
   
  )
}

export default About