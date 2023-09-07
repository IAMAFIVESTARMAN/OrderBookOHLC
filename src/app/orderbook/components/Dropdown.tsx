import React from "react";
import { DropdownProps } from "@/app/types/typesAndEnums";

const Dropdown = ({ onDropDownChange, pair }: DropdownProps) => {
  return (
    <div>
      <label
        htmlFor="currencyPair"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <select
        id="currencyPair"
        onChange={onDropDownChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="tBTCUSD">Bitcoin</option>
        <option value="tLTCUSD">Litecoin</option>
        <option value="tETHUSD">Ethereum </option>
        <option value="tTRTUSD">Terra</option>
      </select>
    </div>
  );
};

export default Dropdown;
