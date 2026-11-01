import React from 'react'
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import img1 from "../../assets/product/p-1.jpg"
import img2 from "../../assets/product/p-2.jpg"
import img3 from "../../assets/product/p-3.jpg"
import img4 from "../../assets/product/p-4.jpg"
import img5 from "../../assets/product/p-5.jpg"
import img6 from "../../assets/product/p-9.jpg"
import img7 from "../../assets/product/p-7.jpg"

const ProductData =[
    {
        id:1,
        img:img1,
        title:"Beat Headphone",
        price:"120$",
        aosDelay:"0"
    },
    {
        id:2,
        img:img2,
        title:"Rockey Mountains",
        price:"420$",
        aosDelay:"200"
    },
    {
        id:3,
        img:img3,
        title:"Googles",
        price:"320$",
        aosDelay:"400"
    },
    {
        id:4,
        img:img4,
        title:"Printed",
        price:"220$",
        aosDelay:"600"
    },
    {
        id:5,
        img:img5,
        title:"Sen Hizer",
        price:"740$",
        aosDelay:"800"
    },
    {
        id:6,
        img:img6,
        title:"Beats Solo",
        price:"120$",
        aosDelay:"1000"
    },
    {
        id:7,
        img:img7,
        title:"Razer",
        price:"720",
        aosDelay:"1200"
    },
]
const Products = () => {
  return (
    <div id="shop">
        <div className="container">
            {/* headere section */}
            <Heading title="Our Products" subtitle={"Explore Our Products"}/>
            {/* body section */}
            <ProductCard data={ProductData}/>
        </div>
    </div>
  )
}

export default Products