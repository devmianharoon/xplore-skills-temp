import Image from "next/image"
export default function FacilityCard(props:any){
    return(
        <div className="facilities-col">
                <Image src={props.src} alt=""/>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
    )
}