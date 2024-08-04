import {addresses} from "@/types";
import {addressData} from "@/constants/constantData";
import {PhoneIcon, ArrowRightIcon} from "@heroicons/react/24/solid";

export const LocationAddress = () => {
    return(
        <div className={`flex items-center lg:flex-row flex-col border border-whites-95 rounded-[1.25rem] mt-8 justify-between gap-[2.5rem] p-[2.5rem]`}>
            {
                addressData.map((address, index) => (
                    <Address key={index} title={address.title} subtitle={address.subtitle} button1={address.button1} button2={address.button2} />
                ))
            }
        </div>
    )
}

export  const Address = ({title,subtitle,button1,button2}:addresses) => {
    return (
        <div className={`flex flex-col gap-[1.5rem]`}>
            <div className={`flex flex-col gap-2.5`}>
                <span className={`text-base lg:text-lg  font-semibold`}>
                    {title}
                </span>
                <span className={`text-sm text-gray-40`}>
                    {subtitle}
                </span>
            </div>
            <div className={`flex gap-[0.65rem] items-center`} >
                <button className={`rounded-full lg:text-base text-sm flex items-center gap-[0.5rem] w-max py-[0.875rem] px-[1.25rem] border border-whites-95`}>
                    <PhoneIcon className={`text-black h-5`}/>
                    {button1}
                </button>
                <button className={`rounded-full lg:text-base text-sm flex items-center gap-[0.5rem] w-max py-[0.875rem] text-white px-[1.25rem] bg-black`}>
                    {button2}
                    <ArrowRightIcon className={`text-white h-5`}/>
                </button>
            </div>
        </div>
    )
}