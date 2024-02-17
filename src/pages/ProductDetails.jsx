import React from 'react';
import RelatedProducts from "../components/RelatedProducts";
import { useProductDetails } from "./hooks/useProductDetails";

const ProductDetails = () => {
  const {
      data, categoryTitle, addToCart, id
  } = useProductDetails();

  if (!data) {
      return (
          <div className="container mx-auto dir-rtl">
              טוען...
          </div>
      );
  }

  return (
      <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
          <div className="container mx-auto">
              {/* text */}
              <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
                  <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
                      <img
                          src={`${BACK_END_URL}${data?.[0]?.attributes?.image?.data?.[0]?.attributes?.url}`}
                          alt=""
                          className="w-full max-w-[55%]"
                      />
                  </div>
                  <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center dir-rtl">
                      {/* category title */}
                      <div className="uppercase text-accent text-lg font-medium mb-2">
                          קטגוריית {categoryTitle}
                      </div>
                      {/* title */}
                      <h2 className="h2 mb-4">
                          {data?.[0]?.attributes?.title}
                      </h2>
                      {/* description */}
                      <p className="mb-12">
                          {data?.[0]?.attributes?.description}
                      </p>
                      {/* price and buttons */}
                      <div className="flex items-center gap-x-8">
                          {/* price */}
                          <button
                              onClick={() => addToCart(data?.[0], id)}
                              className="btn btn-accent font-semibold text-xl transform transition-transform hover:scale-105 hover:shadow-md"
                          >
                              הוסף לעגלה
                          </button>
                          <div className="text-3xl text-accent font-semibold">
                              ₪{data?.[0]?.attributes?.price}
                          </div>
                      </div>
                  </div>
              </div>
              {/* related products */}
              <RelatedProducts categoryTitle={categoryTitle} />
          </div>
      </div>
  );
};

export default ProductDetails;
