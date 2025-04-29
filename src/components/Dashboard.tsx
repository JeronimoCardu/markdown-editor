import useEditorStore from "../hooks/useEditorStore";
import ToggleColorMode from "./ToggleColorMode";

export default function Dashboard() {
  const data = useEditorStore((state) => state.data);
  return (
    <>
      <div className="space-y-8">
        <img className="desktop:hidden" src="/images/logo.svg" alt="" />
        <h2 className="headingS text-gray-500">MY DOCUMENTS</h2>
        <button className="hover:bg-orangeHover headingM bg-orange w-full cursor-pointer rounded-[4px] p-2 text-white outline-0">
          + New Document
        </button>
        {data.map((file, index) => (
          <article className="flex items-center gap-4" key={index}>
            <img src="/images/icon-document.svg" alt="" />
            <div>
              <p className="bodyM text-gray-500">{file.createdAt}</p>
              <p className="hover:text-orange headingM cursor-pointer text-white">
                {file.name}
              </p>
            </div>
          </article>
        ))}
      </div>
      <ToggleColorMode />
    </>
  );
}
