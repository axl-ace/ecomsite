import SectionDesc from "./sectionDesc";
import Acordions from "./acordions";

export default function Faq() {
    return (
        <div className="flex flex-col gap-[60px]">
            <div>
                <SectionDesc
                    title="Questions? We Have Answers."
                    subtitle="FAQ"
                    paragraph="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
                />
            </div>
            <div
                className="border-t border-b w-full overflow-x-scroll border-t-whites-95 border-b-whites-95 lg:py-[40px] py-5 flex gap-8 items-center">
                <span className="font-semibold 2xl:text-[20px] text-base">ALL</span>
                <span className="font-medium 2xl:text-[20px] text-base text-gray-60">
					ORDERING
				</span>
                <span className="font-medium 2xl:text-[20px] text-base text-gray-60">
					SHIPPING
				</span>
                <span className="font-medium 2xl:text-[20px] text-base text-gray-60">
					RETURNS
				</span>
                <span className="font-medium 2xl:text-[20px] text-nowrap text-base text-gray-60">
					CUSTOMER SUPPORT
				</span>
            </div>
            <Acordions/>
        </div>
    );
}
