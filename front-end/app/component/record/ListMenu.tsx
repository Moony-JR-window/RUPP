"use client";
import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragMoveEvent,
  DragEndEvent,
  DragCancelEvent,
} from "@dnd-kit/core";
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
  const [isDragging, setIsDragging] = useState<boolean>(false); // Track movement

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
    setIsDragging(false); // Reset movement tracker on start
  };

  const handleDragMove = (_event: DragMoveEvent) => {
    setIsDragging(true); // Set movement tracker when dragging
    setNoLink(false); // Disable links while moving
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (isDragging) {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        setItems(arrayMove(items, oldIndex, newIndex));
      }
    }
    setNoLink(true); // Enable links after movement or drag cancel
  };

  const handleDragCancel = (_event: DragCancelEvent) => {
    setNoLink(true); // Reset link state if dragging is canceled
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="w-full bg-red-200 h-full flex flex-wrap gap-5 justify-center pt-5">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} noLink={noLink} />
          ))}
          <button className="top-2 p-2 h-10 right-2 bg-blue-400 text-white">
            Edit
          </button>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ListMenu;
