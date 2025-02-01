"use client";

import { Dropdown } from "flowbite-react";
import { HiLink, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

function GeneratorDropDown() {
  return (
    <Dropdown label="Dropdown">
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        Dropdown
      </button>

      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          bonnie@flowbite.com
        </span>
      </Dropdown.Header>

      <Dropdown.Item icon={HiLink}>Website</Dropdown.Item>
      <Dropdown.Item icon={HiLink}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default GeneratorDropDown;
