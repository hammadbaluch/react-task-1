import React from 'react'
import './features.css'
import ItemFeature from '../itemFeature/ItemFeature'

export default function Features() {
  return (
    <section className="features container">

     <ItemFeature icon={<i class="fa-solid fa-tags"></i>} title={"Showcase Your App"} para={"Showcase your app in style with this professional looking template"}/>
     <ItemFeature icon={<i class="fa-solid fa-gear"></i>} title={"Easy to Customize"} para={"Easily customize the text and replace the images to suit your own app"}/>
     <ItemFeature icon={<i class="fa-solid fa-paintbrush"></i>} title={"Unlimited Colors"} para={"Easy change the colors in CSS that can go well with your branding"}/>   
     <ItemFeature icon={<i class="fa-solid fa-desktop"></i>} title={"Responsive, HTML5, CSS3"} para={"Our template is 100% responsive and built with modern standards"}/>   
     <ItemFeature icon={<i class="fa-solid fa-file"></i>} title={"Designed to Convert"} para={"Designed to engage your user and increase your conversion"}/>   
     <ItemFeature icon={<i class="fa-solid fa-circle-notch"></i>} title={"With no Boundries"} para={"Use Bootstrap and PaperKit to add additional components"}/>   
     
    </section>
  )
}
