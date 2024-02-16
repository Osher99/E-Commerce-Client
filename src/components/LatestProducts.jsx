import React from 'react';
import ProductSlider from "./ProductSlider";
import { useLatestProduct } from "../pages/hooks/useLatestProduct";

const LatestProducts = () => {
  const { data } = useLatestProduct();
  return (
      <div className="mb-16">
        <div className="container mx-auto">
          <h2 className="h2 mb-6 text-center x1:text-left">
            מוצרים אחרונים
          </h2>
        </div>
        <ProductSlider data={data} />
      </div>
  );
};

export default LatestProducts;
