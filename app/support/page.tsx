import React from 'react'
import Ksupport from "@/components/Ksupport";
import Locations from "@/components/Locations";
import Ordering from "@/components/Ordering";
import ReturnPolicy from "@/components/returnPolicy";
import Faq from "@/components/faq";

const Support = () => {
    return (
        <section className={`paddingX flex flex-col gap-[5rem]`}>
            <div className={`pt-16`}>
                <Ksupport/>
            </div>
            <div>
                <Locations/>
            </div>
            <div>
                <ReturnPolicy/>
            </div>
            <div>
                <Ordering/>
            </div>
            <div>
                <Faq/>
            </div>
        </section>
    )
}

export default Support