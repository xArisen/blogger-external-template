import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import MainTags from './MainTags'
import Content from './Content'
import Footer from './Footer'

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <MainTags/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default HomePage
