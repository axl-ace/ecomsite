import SectionDesc from "@/components/sectionDesc";
import Supstats from "@/components/Supstats";


const Ksupport = () => (
    <div className={`flex lg:flex-row flex-col gap-[1.87rem]`}>
        <div className={`w-[50%] `}>
            <SectionDesc
                title="klothic Support"
                subtitle="YOUR FASHION ALLY"
                paragraph="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."
            />
        </div>
        <Supstats/>
    </div>
)

export default Ksupport;