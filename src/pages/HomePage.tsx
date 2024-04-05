// import React from 'react'
import { Carousel } from "react-responsive-carousel"
import Banner from '../components/Banner'
//import Carasoul from "../components/Carasoul"
import CategoryList from "../components/CategoryList"
import HeroSlider from "../components/HeroSlider"
import AllCategory from "../components/AllCategory"
import img1 from "../assets/monkey_home_1.jpeg"
import img2 from "../assets/monkey_home_2.jpeg"
import img3 from "../assets/mankey_home_3.jpeg"
import BeforeFooter from "../components/BeforeFooter"
import img4 from "../assets/Banner01.jpeg"
import img5 from "../assets/Banner02.jpeg"
import img6 from "../assets/Banner04.jpeg"
import img7 from "../assets/Banner05.jpeg"
import Items from "../components/Items"
import useFetch from "../hooks/useFetch"
const HomePage = () => {
  const {data,error,loading} = useFetch("/products");

  return (
    <div className="">
      {/* <HeroSlider items={[img1, img2, img3]} /> */}
      <HeroSlider items={[img1, img2,img3]} />

      {/* ------------------ category jacket - sweatshirt - hoodies ------------------- */}

      <Items 
        list={["JACKETS", "SWEATSHIRTS", "HOODIES"]}
        data={data || []}
        error={error}
        loading={loading}
      />

      <HeroSlider items={[img4, img5]} />

      <Carousel
        showThumbs={false}
        showStatus={false}
      >
        <div><CategoryList />s</div>
        <div><CategoryList /></div>

      </Carousel>

      <HeroSlider items={[img6, img7]} />

      <Items />

      <AllCategory/>
      <Banner />
      <Items />
      <BeforeFooter/>
    </div>
  )
}

export default HomePage
