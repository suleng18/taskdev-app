'use client';

import { ElementRef, useRef, useState } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';

import { cn } from '@/lib/utils';
import { ListWithCards } from '@/types';

import { CardForm } from './card-form';
import { CardItem } from './card-item';
import { ListHeader } from './list-header';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export const ListItem = ({ data, index }: ListItemProps) => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader data={data} />
      </div>
    </li>
  );
};
