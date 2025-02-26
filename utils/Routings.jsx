import React from "react";
import { Route, Routes,Outlet } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Campaign";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app1 from "../src/img/portfolio/app-1.jpg";
import app2 from "../src/img/portfolio/app-2.jpg";
import app3 from "../src/img/portfolio/app-3.jpg";
import product1 from "../src/img/portfolio/product-1.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import branding1 from "../src/img/portfolio/branding-1.jpg";
import book1 from "../src/img/portfolio/books-1.jpg";
import book2 from "../src/img/portfolio/books-2.jpg";
import book3 from "../src/img/portfolio/books-3.jpg";
import Hireus from "../src/services/Hireus";

const Routings = () => {

    const subTitle1 = "A picture speaks a thousand words, and we make sure yours tell the right story. Whether it's event or product photography, food styling, corporate branding, or lifestyle shots, our high-quality images bring your brand to life and leave a lasting impression.";
    const subTitle2 = "Social media is all about grabbing attention - and we create visuals that stop the scroll. From eye-catching Instagram ads to engaging carousels and bold infographics, our creatives are designed to captivate, inform, and drive action.";
    const subTitle3 = "Videos that tell stories, drive engagement, and convert viewers into customers. From high-energy event promos to sleek product showcases and brand storytelling, our videography captures the essence of your business with stunning visuals and dynamic edits.";


    return (
        <div>
            <Routes>
                {/* Home route now matches "/" */}
                <Route path="/" element={<Home />} />

                <Route path="/app-development" element={<AppDevelopment />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/seo-optimization" element={<Seo />} />
                <Route path="/campaign-creation" element={<Campaign />} />
                <Route path="/hireus" element={<Hireus />} />

                {/* Portfolio Nested Routes */}
                <Route path="/portfolio" element={<Outlet />}>
                    <Route path="photography" element={<ProductsTemp img={app1} title={'Photography'} subtitle={subTitle1} />} />
                    <Route path="SocialMediaCreatives" element={<ProductsTemp img={product1} title={'Social Media Creatives'} subtitle={subTitle2} />} />
                    <Route path="Videography" element={<ProductsTemp img={branding1} title={'Videography'} subtitle={subTitle3} />} />
                    <Route path="book1" element={<ProductsTemp img={book1} />} />
                    <Route path="app2" element={<ProductsTemp img={app2} />} />
                    <Route path="book3" element={<ProductsTemp img={book3} />} />
                    <Route path="product3" element={<ProductsTemp img={product3} />} />
                    <Route path="book2" element={<ProductsTemp img={book2} />} />
                    <Route path="app3" element={<ProductsTemp img={app3} />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Routings;
