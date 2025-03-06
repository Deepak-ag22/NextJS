import Link from "next/link";

export default function F2(){
    return <>
    <div>F1 Page</div>
    <Link href={"/f1/f2"}>f1 link</Link>
    <Link href={"/f3"}>f3 link</Link>
    </>
}