
import { notFound} from "next/navigation";

function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}
export default async function ProductReview({
    params}:{params: Promise<{productid:string; reviewId:string}>;}){

        const random =  getRandomInt(2);

        if(random==1){
            throw new Error("Error loading review..")
        }

        const {productid,reviewId} = await params
        if(parseInt(reviewId)>1000){
            notFound();
        }
        return <>
        <h1>Review {reviewId} For product {productid}</h1>
        </>
    }
    