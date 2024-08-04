import {LocationAddress} from "@/components/LocationAddress";


export default function Locations() {
    return (
        <div>
            <div className={`text-base text-gray-40 font-medium`}>
                <span>Office Locations</span>
            </div>
            <div>
                <LocationAddress />
            </div>
        </div>
    )
}