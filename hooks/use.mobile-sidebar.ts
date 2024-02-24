'use client';

import { create } from 'zustand';

type MobileSideProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSideProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
