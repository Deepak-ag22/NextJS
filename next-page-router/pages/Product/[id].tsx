type Product = {
    id: number;
    title: string;
  };
  
  interface ProductDetailProps {
    product: Product;
  }
  
  const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
      <div>
        <h1>{product.id}</h1>
        <h1>{product.title}</h1>
      </div>
    );
  };
  
  interface ProductResponse {
    products: Product[];
  }
  
  export const getStaticPaths = async () => {
    let response = await fetch("https://dummyjson.com/products");
    const data: ProductResponse = await response.json(); 
    const paths = data.products.map((product) => ({
      params: { id: product.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context: any) => {
    const { id } = context.params;
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    const product: Product = await response.json();
  
    return {
      props: {
        product, 
      },
      revalidate: 10,
    };
  };
  
  export default ProductDetail;
  