import create from "zustand";

export const useIsOpenNav = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));
