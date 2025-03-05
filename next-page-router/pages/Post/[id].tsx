type Post = {
    id: number;
    title: string;
  };
  
  interface PostDetailProps {
    post: Post;
  }
  
  const PostDetail = ({ post }: PostDetailProps) => {
    return (
      <div>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
      </div>
    );
  };
  
  export async function getServerSideProps({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await res.json();
  
    return {
      props: { post },
    };
  }
  
  export default PostDetail;
  