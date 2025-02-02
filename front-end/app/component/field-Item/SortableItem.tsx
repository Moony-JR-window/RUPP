'use client'
import Link from "next/link";
import { MenuItem } from "../record/ListMenu";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";


const SortableItem = ({ item, noLink }: { item: MenuItem; noLink: boolean }) => {
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
        </div>}
        </div>
    );
};

export default SortableItem;