import React from 'react';
import ProductSlider from "./ProductSlider";
import {useRelatedProducts} from "../hooks/useRelatedProducts";

interface Props {
    categoryTitle: string;
}

const RelatedProducts = ({ categoryTitle }: Props) => {
  const { data } = useRelatedProducts(categoryTitle);
  return (
      <div className="mb-16">
        <div className="container mx-auto dir-rtl">
            <h2 className="h2 mb-6 text-center xl:text-right">
                מוצרים דומים
            </h2>
            <ProductSlider data={data} />
        </div>
      </div>
  );
};

export default RelatedProducts;
