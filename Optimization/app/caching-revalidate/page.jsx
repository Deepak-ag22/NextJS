import { revalidateTag } from "next/cache";


async function getPosts() {
    const res = await fetch("https://dummyjson.com/posts/", {
        next: { tags: ["posts"] },
    });
    const { posts } = await res.json();
    return posts;
}


// Server action for revalidation
async function revalidate() {
    "use server";
    revalidateTag("posts");
}


export default async function Home() {
    const posts = await getPosts();


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                </div>
            ))}
            <form action={revalidate}>
                <button
                    className="m-2 border border-black cursor-pointer"
                    type="submit"
                >
                    Purge Cache!
                </button>
            </form>
        </div>
    );
}
