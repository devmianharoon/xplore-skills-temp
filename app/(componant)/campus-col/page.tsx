import Image from "next/image";
export default function CampusCol (props:any){
    return(
        <div className="campus-col">
                <Image src={props.src} alt=""/>
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
            </div>
    )
}