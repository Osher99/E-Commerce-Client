import React from 'react';
import { Product } from "../utils/interfaces.ts";
import { useQty } from "../hooks/useQty";

interface Props {
  item?: Product;
}

const Qty = ({ item }: Props) => {
  const { handleQuantityInput, handleSelect } = useQty();

  return (
      <div className="flex gap-x-6 items-center text-primary">
          {
              item?.amount < 6
                  ? (
                      <select
                          value={item?.amount}
                          onChange={(e) => handleSelect(e, item?.id)}
                          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
                      >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                      </select>
                  )
                  : (
                      <input
                          onBlur={(event: FocusEvent<HTMLInputElement>) => handleQuantityInput(event, item?.id)}
                          className="text-primary placeholder-primary::placeholder h-12 rounded-md p-4 w-[120px] outline-accent"
                          type="number"
                          min="1"
                          max="20"
                          value={item?.amount}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                              const value = parseInt(event.target.value);
                              if (!isNaN(value) && value > 0 && value <= 10) {
                                  // Only update the amount if the input is valid
                                  handleQuantityInput(event, item?.id);
                              }
                          }}
                      />
                  )}
      </div>
  );
};

export default Qty;
