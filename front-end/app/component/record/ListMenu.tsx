"use client";
import React, { useEffect, useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableItem from "../field-Item/SortableItem";

export interface MenuItem {
  id: string;
  name: string;
  href: string;
}

const ListMenu: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [noLink, setNoLink] = useState<boolean>(true);

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

  const handleDragStart = (_event: DragStartEvent) => {
    setNoLink(false); // Disable links when dragging starts
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
    setNoLink(true); // Enable links after dragging ends
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="w-full bg-red-200 h-full flex flex-wrap gap-5 justify-center pt-5">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} noLink={noLink} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ListMenu;
