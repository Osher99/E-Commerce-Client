import React from 'react';
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { useSearch } from "./hooks/useSearch";

const Search = () => {
    const { data, searchVal } = useSearch();
    return (
      <div className="mb-[30px] pt-40 md:pt-40 lg:pt-4 xl:pt-0">
        <div className="container mx-auto">
            <div className="flex justify-center gap-x-[30px]">
                <div>
                    {/* title */}
                    <div className="dir-rtl py-3 text-xl uppercase text-center lg:text-right">
                        {data?.length > 0 ? `${data.length} תוצאות נמצאו חיפוש עבור ${searchVal} ` : `לא נמצאו תוצאות עבור ${searchVal}`}
                    </div>
                    {/* products grid */}
                    <div className="grid frid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                        {
                            data?.map((product) => {
                                return (
                                    <Product product={product} key={product?.id} />
                                );
                            })
                        }
                    </div>
                </div>
                {/* category nav */}
                <CategoryNav />
            </div>
        </div>
      </div>
  );
};

export default Search;
