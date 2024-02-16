import React from 'react';
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useCategoryNavMobile } from "../hooks/useCategoryNavMobile";

interface Props {
    setCatNavMobile: (flag: boolean) => void;
}

const CategoryNavMobile = ({ setCatNavMobile }: Props) => {
  const { data } = useCategoryNavMobile();
  return (
      <div className="w-full h-full bg-primary p-8">
        {/* close icon */}
        <div
            onClick={() => setCatNavMobile(false)}
            className="flex justify-end mb-8 cursor-pointer"
        >
          <FiX className="text-3xl" />
        </div>
          <div className="flex flex-col gap-y-8 dir-rtl text-center" onClick={() => setCatNavMobile(false)}>
              {
                  data?.map((category) => {
                      return (
                          <Link to={`products/${category?.id}`} className="uppercase font-medium text-center" key={category?.id}>
                              {category?.attributes?.title}
                          </Link>
                      )
                  })
              }
          </div>
      </div>
  );
};

export default CategoryNavMobile;
