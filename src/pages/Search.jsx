import React from 'react';
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { useSearch } from "./hooks/useSearch";
import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner component
import { css } from "@emotion/react"; // Import css function from react-spinners

const override = css`
  display: flex;  
  justify-content: center;
  margin: 0 auto;
  border-color: lightgreen;
  align-items: center;
`;

const Search = () => {
    const { data, searchVal, loading } = useSearch();
    return (
      <div className="mb-[30px] pt-40 md:pt-40 lg:pt-4 xl:pt-0">
        <div className="loading-spinner" hidden={!loading}>
            <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
        </div>
        {!loading && (
        <div className="container mx-auto">
            <div className={`flex ${!data || data?.length === 0 ? 'justify-between' : 'justify-center'} gap-x-[30px]`}>
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
    )}
      </div>
  );
};

export default Search;
