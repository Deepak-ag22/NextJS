import { Metadata } from "next";

type Props = {
    params: Promise<{productid:string}>;
}

export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
    const id = (await params).productid;
    return{
        title:`product ${id}`
    }
}


export default  async function Productdetails({params}:{
    params:Promise<{productid:string}>;
}){
    const productId=(await params).productid;
    return <>
            <h2>Product Details Of {productId}</h2>
    </>
}