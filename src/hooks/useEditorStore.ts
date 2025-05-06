import { create } from "zustand";
import getLocalStorage from "../utils/getLocalStorage";
import setLocalStorage from "../utils/setLocalStorage";
import getDate from "../utils/getDate";

export type dataProps = {
  createdAt: string;
  name: string;
  content: string;
};

type EditorProps = {
  menuOpen: boolean;
  setMenuOpen: (menu: boolean) => void;
  viewPreview: boolean;
  setViewPreview: (view: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  showDeleteModal: boolean;
  setShowDeleteModal: (show: boolean) => void;
  fileCurrent: dataProps;
  setFileCurrent: (fileIndex: number) => void;
  deleteFile: () => void;
  addFile: () => void;
  updateFile: (fileUpdate: dataProps) => void;
};

const useEditorStore = create<EditorProps>((set) => ({
  menuOpen: false,
  setMenuOpen: (menu: boolean) => set({ menuOpen: menu }),
  viewPreview: false,
  setViewPreview: (view: boolean) => set({ viewPreview: view }),
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
  addFile: () =>
    set(() => {
      getDate();
      const newFile = {
        createdAt: getDate(),
        name: `newFile${Math.floor(Math.random() * 1000)}.md`,
        content: "",
      };
      setLocalStorage([...getLocalStorage(), newFile]);
      return {
        fileCurrent: newFile,
      };
    }),
  updateFile: (fileUpdate: dataProps) =>
    set((state) => {
      const arrayUpdate = getLocalStorage().filter(
        (file: dataProps) => file.name != state.fileCurrent.name,
      );
      setLocalStorage([...arrayUpdate, fileUpdate]);
      return {
        fileCurrent: fileUpdate,
      };
    }),
}));

export default useEditorStore;
