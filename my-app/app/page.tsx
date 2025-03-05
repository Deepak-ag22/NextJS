"use client"
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicComp = dynamic(()=>import("./components/DynamicComp"))

export default function Home() {
  let [show,setShow]= useState(false);
  return (
    <div>
      {show && <DynamicComp/>}
      <button onClick={()=>setShow((prev)=>!prev)} className="bg-gray-100">{(show)?"Don't Show":"Show popUp"}</button>
    </div>
  );
}
