import Link from "next/link"
import Button from "../button/page"
import Navbar from "../navbar/page"
export default function Header(){
    return(
    <section className="header">
   <Navbar/>

    <div className="text_box">
        <h2>GET READY</h2>
        <p id="headtext">TO DISCOVER CAMPUS</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br/> esse blanditiis in quae perspiciatis quo.
        </p>
        <Button title="Visit Us To Know More"/>
       
    </div>
</section>
)
}