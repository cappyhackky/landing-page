import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Hero from './Hero'
import Footer from './Footer'

const images = [
    '../img/img1.jpg',
    '../img/img2.jpg',
    '../img/img3.jpg'
  ]
  const data = [
    {
      "description":"Hand Bag",
      "image-url":"../img/bag.jpg"
    },
    {
      "description":"Jacket",
      "image-url":"../img/jacket.jpg"
    },
    {
      "description":"HP Printer",
      "image-url":"../img/printer.jpg"
    },
    {
      "description":"Teddy",
      "image-url":"../img/teddy.jpg"
    },
    {
      "description":"Denims",
      "image-url":"../img/trouser.jpg"
    },
    {
      "description":"Trouser",
      "image-url":"../img/trouserq.jpg"
    }
    
  ]

const Home = () => {
    return (
        <>
            <NavBar />
            <Carousel images={images} />
            <Hero data={data} />
            <Footer />
        </>
    )
}

export default Home