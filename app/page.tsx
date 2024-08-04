import React from "react";
import HeroHome from "@/components/heroHome";
import ProductSample from "@/components/productSample";
import Experience from "@/components/k-experience";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Process from "@/components/processes";
import ProductsView from "@/components/productsView";


const Home = () => {
    return (
        <section className="paddingX flex flex-col gap-[5rem] xl:gap-[200px] pt-[5rem]">
            <HeroHome/>
            <ProductSample/>
            <ProductsView/>
            <Experience/>
            <Testimonials/>
            <Faq/>
            <Process/>
        </section>
    );
};

export default Home;
