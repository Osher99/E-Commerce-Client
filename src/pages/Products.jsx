import React from 'react';
import Product from "../components/Product";
import CategoryNav from "../components/CategoryNav";
import { useProducts } from "./hooks/useProducts";

const Products = () => {
  const { data, title } = useProducts();
  return (
      <div className="mb-16 pt-40 lg:pt-0">
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
      </div>
  );
};

export default Products;
