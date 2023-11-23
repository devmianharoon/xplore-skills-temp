import Image from "next/image"
export default function TestimonialsCol(props: any) {
    return (
        <div className="testimonials-col">
            <Image src={props.src} alt="oo.." />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                    praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                    deserunt. In quia repellat maxime.</p>
                <h3>{props.title}</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
        </div>
    )
}