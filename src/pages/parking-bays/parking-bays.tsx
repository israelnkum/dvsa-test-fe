import { useState } from "react";
import FindParkingBayForm from "./find-parking-bay-form.tsx";

export default function ParkingBays() {
    const [bays, setBays] = useState([]);

    return (
        <div className={"grid grid-cols-2"}>
            <div className={"bg-white w-fit p-3"}>
                <FindParkingBayForm callback={setBays}/>
            </div>
           <div>
               {bays.length > 0 && <h3 className={"mb-2 text-2xl"}>Contiguous Parking Bays</h3>}
               <div className={"grid grid-cols-3 gap-4"}>

                   {
                       bays.map((item, index) => (<div className={"bg-white p-2"} key={index}>{JSON.stringify(item)}</div>))
                   }
               </div>
           </div>
        </div>
    );
}