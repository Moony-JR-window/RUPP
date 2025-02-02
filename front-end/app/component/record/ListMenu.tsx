"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface MenuItem {
  id: string;
  name: string;
  href: string;
}

const SortableItem = ({ item,noLink }: { item: MenuItem ; noLink:boolean}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-80 h-44"
    >{noLink ? <Link href={item.href}>
      <div className="w-80 h-44 bg-blue-200 hover:scale-105 transition-all rounded-md flex items-center justify-center">
        {item.name}
      </div>
    </Link> : <div className="w-80 h-44 bg-slate-300 hover:scale-105 transition-all rounded-md flex items-center justify-center">
      {item.name}
    </div>
      }
    </div>
  );
};

const ListMenu: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [noLink, setNolink] = useState<boolean>(true)

  // Load localStorage data after mounting
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("menuItems");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      } else {
        setItems([
          { id: "1", name: "Record", href: "/record" },
          { id: "2", name: "Record1", href: "/record1" },
          { id: "3", name: "Record2", href: "/record2" },
        ]);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("menuItems", JSON.stringify(items));
    }
  }, [items]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    if(event){
      setNolink(false);
    }
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    setNolink(true);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="w-full bg-red-200 h-full flex flex-wrap gap-5 justify-center pt-5">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} noLink={noLink} />
          ))}
          <button
            className=" top-2 p-2 h-10 right-2 bg-blue-400 text-white"
          >Edit</button>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ListMenu;