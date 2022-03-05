import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">


        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}


        <img
          className="home__image"
          src="https://www.pubgmobile.com/en-US/images/pc_kv17.jpg"
          alt=""
        /> 


        <div className="home__row">
          <Product
            id="12321341"
            title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard"
            price={785.41}
            rating={5}
            image="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="YSSOA Gaming Office High Back Computer Leather Desk Mesh Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support, Red, with footrest"
            price={139.55}
            rating={4}
            image="https://m.media-amazon.com/images/I/61gmXNWdZML._AC_UL480_FMwebp_QL65_.jpg" 
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
            price={35.98}
            rating={2}
            image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
          />
           <Product
            id="12321341"
            title="Philips Audio SHP9600MB Wired Headphones with Microphone -Over-Ear Open-Back Headset, 50 mm Neodymium Drivers (SHP9600MB) - Black"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61GsEizLQ+L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Play Games Station Hat Joypad Hats Snapback Flat Bill Baseball Cap Men's Black"
            price={15.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61xvR-IeTIS._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>



      </div>
    </div>
  );
}

export default Home;