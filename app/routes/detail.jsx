import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header";
import DetailPageIndex from "../components/detailPageComp";

export default function Detail() {
  const location = useLocation();
  const [productDetails, setProductDetails] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const productUrl = queryParams.get("productUrl");
  useEffect(() => {
    if (productUrl) {
      fetch(productUrl)
        .then((response) => response.json())
        .then((data) => {
          setProductDetails(data);
        })
        .catch((error) => console.error("Error fetching product details:", error));
    }
  }, [productUrl]);

  return (
    <div className="vh-100">
        <Header/>
        {productDetails && <DetailPageIndex product={productDetails} />}
    </div>
  );
}