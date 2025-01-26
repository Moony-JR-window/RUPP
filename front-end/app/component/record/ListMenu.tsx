'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface MenuItem {
  id: string;
  name: string;
  href: string;
}

const ListMenu: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem('menuItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      // Default menu items if nothing is in localStorage
      setItems([
        { id: '1', name: 'Record', href: '/record' },
        { id: '2', name: 'Record1', href: '/record1' },
        { id: '3', name: 'Record2', href: '/record2' },
      ]);
    }
  }, []);

  // Save items to localStorage when they are updated
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(items));
  }, [items]);

  // Handle the drag-and-drop logic
  const onDragEnd = (result:DropResult ) => {
    const { source, destination } = result;

    // If dropped outside of a valid destination, do nothing
    if (!destination) return;

    // Reorder items
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removed);

    // Update state
    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list-menu" direction="horizontal">
        {(provided) => (
          <div
            className="w-full bg-red-200 h-full flex flex-wrap gap-5 justify-center pt-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    className="w-80 h-44"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Link href={item.href}>
                      <div className="w-80 h-44 bg-blue-200 hover:scale-105 transition-all rounded-md flex items-center justify-center">
                        {item.name}
                      </div>
                    </Link>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListMenu;
