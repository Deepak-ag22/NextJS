import { Card } from "@/Components/card";
import Link from "next/link";

export default function Notifications(){
    return <><Card>
       <div>Notifications </div>
      <div>
        <Link href="/complex-dashboard/archived" className="blue text-xs">Archived</Link>
      </div>
        </Card></>
}