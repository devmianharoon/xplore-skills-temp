import Link from "next/link"
export default function Button(props:any){
    return(
    <Link href="/" className="hero_btn">{props.title}</Link>)
}