import React from 'react';
import { Link } from 'react-router-dom'
import { useCategoryNav } from "../hooks/useCategoryNav";
import { css } from "@emotion/react"; // Import css function from react-spinners
import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner component

export const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-color: lightgreen;
    align-items: center;
`;
const CategoryNav = () => {
  const { data, loading } = useCategoryNav();
  return (
      <aside className="hidden xl:flex">
        <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
          <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">קטגוריות</div>
          <div className="loading-spinner" hidden={!loading}>
                <ClipLoader color={"#123abc"} loading={loading} css={override} size={150} />
          </div>
          {!loading && (
          <div className="flex flex-col gap-y p-6">
              {data?.map((category) => {
                return (
                    <Link
                        key={category?.id}
                        to={`/products/${category?.id}`}
                        className="dir-rtl cursor-pointer uppercase leading-10"
                    >
                      {category?.attributes?.title}
                    </Link>
                );
              })}
          </div>
          )}
        </div>
      </aside>
  );
};

export default CategoryNav;
