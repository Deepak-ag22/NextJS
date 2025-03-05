import { signIn } from "next-auth/react";

export default function LoginPage(){
    return <>
    Not Signed In! <br/>
    <button onClick={()=> signIn("google",{callbackUrl:'/dashboard'})} className="border bg-amber-50">

        Sign in with google
    </button>
    </>
}

