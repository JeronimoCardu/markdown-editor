import { Outlet } from "react-router-dom";
import Dashboard from "../../components/Dashboard";
import DeleteButton from "../../components/DeleteButton";
import DeleteModal from "../../components/DeleteModal";
import MenuButton from "../../components/MenuButton";
import SaveButton from "../../components/SaveButton";
import useEditorStore from "../../hooks/useEditorStore";

export default function Header() {
  const menuOpen = useEditorStore((state) => state.menuOpen);
  const showDeleteModal = useEditorStore((state) => state.showDeleteModal);
  const setShowDeleteModal = useEditorStore(
    (state) => state.setShowDeleteModal,
  );
  const fileCurrent = useEditorStore((state) => state.fileCurrent);
  const updateFile = useEditorStore((state) => state.updateFile);

  return (
    <div
      onClick={() => showDeleteModal && setShowDeleteModal(false)}
      className={`${menuOpen ? "fixed" : ""} ${showDeleteModal ? "overflow-y-hidden" : ""} flex`}
    >
      {menuOpen && (
        <aside
          className={`${showDeleteModal && "brightness-50 dark:brightness-150"} bg-black-900 desktop:w-1/5 relative h-screen flex-col px-6 py-10 sm:w-1/3`}
        >
          <Dashboard />
        </aside>
      )}
      <section
        className={`${menuOpen ? "w-2/4 sm:w-full" : "w-full"} relative`}
      >
        {showDeleteModal && <DeleteModal />}

        <header
          className={`${showDeleteModal && "brightness-50 dark:brightness-150"} bg-black-800 flex h-[4.5em] w-full items-center justify-between px-4`}
        >
          <div className="flex items-center justify-start gap-6">
            <MenuButton />
            <div className="desktop:flex hidden h-10 items-center justify-center border-r-1 border-white px-4">
              <img src="/images/logo.svg" alt="" />
            </div>
            <svg
              width="14px"
              className="fill-white"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z" />
            </svg>
            <div className="flex flex-col">
              <label
                className="tablet:block bodyM hidden text-gray-500"
                htmlFor="document"
              >
                Document Name
              </label>
              <input
                id="document"
                className="headingM cursor-pointer text-white outline-0"
                type="text"
                value={fileCurrent.name}
                onChange={(e) => {
                  updateFile({
                    createdAt: fileCurrent.createdAt,
                    name: e.target.value,
                    content: fileCurrent.content,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DeleteButton />
            <SaveButton />
          </div>
        </header>
        <Outlet />
      </section>
    </div>
  );
}
