import type { MetaFunction } from "@remix-run/node";
import Header from "../components/header";
import ProductListHorizontal from "~/components/mainPageComp/productListHorizontal";
import ProductListVertical from "~/components/mainPageComp/productListVertical";

export const meta: MetaFunction = () => {
  return [
    { title: "Product App" },
    { name: "description", content: "Product Lists" },
  ];
};

export default function Index() {
  return (
    <div className="vh-100">
      <Header />
      <ProductListHorizontal />
      <ProductListVertical />
    </div>
  );
}

