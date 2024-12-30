import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData,
  //  useFetcher
   } from "@remix-run/react";
import Header from "../components/header";
import ProductListHorizontal from "~/components/mainPageComp/productListHorizontal";
// import ProductListVertical from "~/components/mainPageComp/productListVertical";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Index() {
  const { horizontalProductList,
    //  productList,
    //   nextUrl
     } = useLoaderData<LoaderData>();
  // const fetcher = useFetcher<{ productList: Product[] }>();
  // const loadMore = () => {
  //   if (nextUrl) {
  //     fetcher.load(nextUrl);
  //   }
  // };

  // const newProducts = fetcher.data?.productList || productList;

  return (
    <div className="vh-100">
      <Header />
      <ProductListHorizontal products={horizontalProductList}/>
      {/* <ProductListVertical products={newProducts} nextUrl={nextUrl}/> */}
    </div>
  );
}

