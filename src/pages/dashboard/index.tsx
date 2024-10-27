import Widget from "./widget.tsx";
import {ContainerOutlined, TruckOutlined} from "@ant-design/icons";

export default function Dashboard() {
    return (
        <div>
            <div className={"grid grid-cols-3 gap-5"}>
                <Widget title={"Companies"} value={30} icon={<ContainerOutlined className={"text-4xl"} />}/>
                <Widget title={"Vehicles"} value={30} icon={<TruckOutlined className={"text-4xl"} />}/>
            </div>
        </div>
    );
}