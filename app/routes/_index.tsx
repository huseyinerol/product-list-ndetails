import type { MetaFunction } from "@remix-run/node";
import Header from "../components/header";
import MainPageComponent from "../components/mainPageComp"

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
      <MainPageComponent />
    </div>
  );
}

