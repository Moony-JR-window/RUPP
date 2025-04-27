"use client";
import React, { useEffect, useState } from "react";
import SortableItem from "../field-Item/SortableItem";
import { useRouter } from "next/navigation"; // Import router

export interface MenuItem {
  id: string;
  name: string;
  href: string;
}

const ListMenu: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("menuItems");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      } else {
        setItems([
          { id: "1", name: "Record", href: "/record" },
          { id: "2", name: "Record1", href: "/record1" }, // This one will be customized when clicked
          { id: "3", name: "Record2", href: "/record2" },
        ]);
      }
    }
  }, []);

  const handleClick = (item: MenuItem) => {
      router.push(item.href); // Else normal href
  };

  return (
    <div className="w-full bg-red-200 h-full flex flex-wrap gap-5 justify-center pt-5">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="cursor-pointer h-24 w-48 p-4 bg-white rounded shadow hover:bg-gray-100"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ListMenu;
