import { create } from "zustand";

type EditorProps = {
  menuOpen: boolean;
  setMenuOpen: (menu: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

const useEditorStore = create<EditorProps>((set) => ({
  menuOpen: false,
  setMenuOpen: (menu: boolean) => set({ menuOpen: menu }),
  theme: "light",
  setTheme: (theme: string) => set({ theme: theme }),
}));

export default useEditorStore;
