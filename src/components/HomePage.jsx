import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import MainTags from './MainTags'
import Content from './Content'
import Footer from './Footer'
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div className = "homepage-custom-border-box">
            <Navbar/>
            <Banner/>
            <MainTags/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default HomePage
