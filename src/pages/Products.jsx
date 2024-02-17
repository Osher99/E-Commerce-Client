import React from 'react';
import Product from "../components/Product";
import CategoryNav from "../components/CategoryNav";
import { useProducts } from "./hooks/useProducts";
import { css } from "@emotion/react"; // Import css function from react-spinners
import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner component

export const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-color: lightgreen;
    align-items: center;
`;

const Products = () => {
  const { data, title, loading } = useProducts();
  return (
      <div className="mb-16 pt-40 lg:pt-0">
        <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
        {!loading && (
            <div className="container mx-auto">
            <div className="flex gap-x-[30px]">
              <main>
                {/* title */}
                <div className="dir-rtl py-3 text-xl uppercase text-center lg:text-right"> קטגוריית {title}</div>
                {/* product grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] dir-rtl">
                  {data?.map((product) => {
                      return (
                          <Product product={product} key={product.id} />
                      );
                  })}
                </div>
              </main>
                <CategoryNav />
            </div>
          </div>
        )}
      </div>
  );
};

export default Products;
