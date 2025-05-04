import { create } from "zustand";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorage from "../utils/setLocalStorage";

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
  setFileCurrent: (fileIndex: number) => void;
  deleteFile: () => void;
};

const useEditorStore = create<EditorProps>((set) => ({
  menuOpen: false,
  setMenuOpen: (menu: boolean) => set({ menuOpen: menu }),
  theme: "light",
  setTheme: (theme: string) => set({ theme: theme }),
  showDeleteModal: false,
  setShowDeleteModal: (show: boolean) => set({ showDeleteModal: show }),
  fileCurrent: getLocalStorage()[getLocalStorage().length - 1],
  setFileCurrent: (fileIndex: number) =>
    set({ fileCurrent: getLocalStorage()[fileIndex] }),
  deleteFile: () =>
    set((state) => {
      if (getLocalStorage().length <= 1) {
        return {}; // no cambia nada
      }
      const deleted = getLocalStorage().filter(
        (file: dataProps) => file.name != state.fileCurrent.name,
      );
      setLocalStorage(deleted);

      return getLocalStorage().length > 0
        ? {
            fileCurrent: deleted[deleted.length - 1],
          }
        : { fileCurrent: { name: "", content: "", createdAt: "" } };
    }),
}));

export default useEditorStore;
