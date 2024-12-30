import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData} from "@remix-run/react";
import Header from "../components/header";
import ProductListHorizontal from "~/components/mainPageComp/productListHorizontal";
import ProductListVertical from "~/components/mainPageComp/productListVertical";

export const meta: MetaFunction = () => {
  return [
    { title: "Product App" },
    { name: "description", content: "Product Lists" },
  ];
};

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: number;         
  dropRatio: number;    
  countOfPrices: number;
  followCount: number;  
  url: string;          
};

type LoaderData = {
  horizontalProductList: Product[];
  productList: Product[];
  nextUrl: string | null;
};

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://mock.akakce.dev/page.json");

  if (!response.ok) {
    throw new Error("Veri yüklenemedi.");
  }

  const data: LoaderData = await response.json();

  return json(data);
};

export default function Index() {
  const { horizontalProductList, productList, nextUrl: initialNextUrl } = useLoaderData<LoaderData>();
  const [products, setProducts] = useState(productList);
  const [nextUrl, setNextUrl] = useState(initialNextUrl);
  

  const loadMore = async () => {
    if (nextUrl) {
      const fullUrl = nextUrl.startsWith("http") ? nextUrl : `https://mock.akakce.dev/${nextUrl}`;
      const response = await fetch(fullUrl);
      const data = await response.json();

      // Ürünleri ve nextUrl'i güncelle
      setProducts((prevProducts) => [...prevProducts, ...data.productList]);
      setNextUrl(data.nextUrl);
    }
  };

  return (
    <div className="vh-100">
      <Header />
      <ProductListHorizontal products={horizontalProductList} />
      <ProductListVertical
        products={products}
        nextUrl={nextUrl}
        loadMore={loadMore}
      />
    </div>
  );
}
