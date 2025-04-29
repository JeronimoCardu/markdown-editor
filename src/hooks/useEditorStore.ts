import { create } from "zustand";
import dataJSON from "../../data.json";

export type dataProps = {
  createdAt: string;
  name: string;
  content: string;
};

type EditorProps = {
  menuOpen: boolean;
  setMenuOpen: (menu: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  showDeleteModal: boolean;
  setShowDeleteModal: (show: boolean) => void;
  fileCurrent: dataProps;
  data: dataProps[];
  deleteData: (fileToDelete: dataProps) => void;
};

const useEditorStore = create<EditorProps>((set) => ({
  data: dataJSON,
  menuOpen: false,
  setMenuOpen: (menu: boolean) => set({ menuOpen: menu }),
  theme: "light",
  setTheme: (theme: string) => set({ theme: theme }),
  showDeleteModal: false,
  setShowDeleteModal: (show: boolean) => set({ showDeleteModal: show }),
  fileCurrent: dataJSON[dataJSON.length - 1],
  deleteData: (fileToDelete: dataProps) =>
    set((state) => ({ data: state.data.filter((d) => d != fileToDelete) })),
}));

export default useEditorStore;
