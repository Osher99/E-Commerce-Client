import React from 'react';
import { Link } from 'react-router-dom'
import { useCategoryNav } from "../hooks/useCategoryNav";

const CategoryNav = () => {
  const { data } = useCategoryNav();
  return (
      <aside className="hidden xl:flex">
        <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
          <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">קטגוריות</div>
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
        </div>
      </aside>
  );
};

export default CategoryNav;
