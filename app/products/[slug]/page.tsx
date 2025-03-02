
import * as React from 'react'
import Product from '@/components/Product';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  product:string;
  //params: Promise<{ slug : string }>;
  images: {
    id: string;
    file: {
      url: string;
      metadata: string;
    };
  }[];
}

export interface ProductProps {
  product: ProductType 

}

interface PageProps {
    params: Promise<{ slug : string }>;
} 

const getProductBySlugOrId = async (slug: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);

  return response.json();
};

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params; 
  const product = await getProductBySlugOrId(resolvedParams.slug);

  return <Product product={product} />;
};

export default Page;







/*
const Page = async ({ }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug();

  return ( 
    <main>
      <Product product={product} />
    </main>
  );
};

export default Page;*/



/*
export default async function ProductPage({ params }: Props) {
  
  const resolvedParams = await params; 
  const product = products.find((product: { slug: string; }) => product.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Product product={product} />
    </main>
  );
}*/




 
