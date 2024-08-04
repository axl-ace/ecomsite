import SectionDesc from "@/components/sectionDesc";
import {ArrowRightIcon} from "@heroicons/react/24/solid";
import {cancellationData, returnData} from "@/constants/constantData";


export default function ReturnPolicy() {
    return (
        <div className={`flex flex-col gap-[3.75rem]`}>
            <div className={`flex justify-between lg:flex-row flex-col gap-5 items-start lg:items-center`}>
                <SectionDesc
                    title={`Return Policy`}
                    subtitle={`Easy Returns at Klothink`}
                    paragraph={`Explore our hassle-free return policy designed to ensure your satisfaction with every purchase.`}
                />
                <div>
                    <button
                        className={`rounded-full lg:text-sm text-sm font-semibold flex items-center gap-[0.5rem] w-max py-[0.875rem] text-black px-[1.25rem] bg-whites-95`}>
                        Read Return Policy
                        <ArrowRightIcon className={`text-black h-5`}/>
                    </button>
                </div>
            </div>

            <div className={`flex justify-between lg:flex-row flex-col gap-[2.5rem] lg:items-center p-[2.5rem] border border-whites-95 rounded-[1rem]`}>
                {
                    returnData.map((data, index) => (
                        <div key={index} className={`${index == returnData.length - 2 ? " lg:px-[2.5rem]" : ''} ${index == cancellationData.length - 2 && index == cancellationData.length - 1 && " "}`}>
                            <div className={`flex flex-col gap-1.5`}>
                                <span className={`text-base lg:text-lg font-semibold`}>{data.heading}</span>
                                <span className={`text-base text-gray-40`}>{data.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}