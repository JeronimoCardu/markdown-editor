import useEditorStore, { dataProps } from "../hooks/useEditorStore";
import getLocalStorage from "../utils/getLocalStorage";
import ToggleColorMode from "./ToggleColorMode";

export default function Dashboard() {
  const data = getLocalStorage();
  const setFileCurrent = useEditorStore((state) => state.setFileCurrent);
  const addFile = useEditorStore((state) => state.addFile);
  const setMenuOpen = useEditorStore((state) => state.setMenuOpen);
  return (
    <>
      <div className="h-full space-y-8">
        <img className="desktop:hidden" src="/images/logo.svg" alt="" />
        <h2 className="headingS text-gray-500">MY DOCUMENTS</h2>
        <button
          onClick={() => {
            setMenuOpen(false);
            addFile();
          }}
          className="hover:bg-orangeHover headingM bg-orange w-full cursor-pointer rounded-[4px] p-2 text-white outline-0"
        >
          + New Document
        </button>
        <section className="scrollbarDashboard h-6/10 space-y-6 overflow-y-auto">
          {data &&
            data.map((file: dataProps, index: number) => (
              <article
                onClick={() => {
                  setMenuOpen(false);
                  setFileCurrent(index);
                }}
                className="flex cursor-pointer items-center gap-4"
                key={index}
              >
                <img src="/images/icon-document.svg" alt="" />
                <div>
                  <p className="bodyM text-gray-500">{file.createdAt}</p>
                  <p className="hover:text-orange headingM text-white">
                    {file.name}
                  </p>
                </div>
              </article>
            ))}
        </section>
        <ToggleColorMode />
      </div>
    </>
  );
}
