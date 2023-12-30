import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

interface StateCart {
  isCartMenuOpen: boolean;
  openCartMenu: () => void;
  closeCartMenu: () => void;
}

export const useUiStoreCart = create<StateCart>()((set) => ({
  isCartMenuOpen: false,
  openCartMenu: () => set({ isCartMenuOpen: true }),
  closeCartMenu: () => set({ isCartMenuOpen: false }),
}));
