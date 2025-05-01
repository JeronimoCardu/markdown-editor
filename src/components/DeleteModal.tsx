import useEditorStore from "../hooks/useEditorStore";

export default function DeleteModal() {
  const fileCurrent = useEditorStore((state) => state.fileCurrent);
  const setShowDeleteModal = useEditorStore(
    (state) => state.setShowDeleteModal,
  );
  const deleteFile = useEditorStore((state) => state.deleteFile);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShowDeleteModal(false);
        deleteFile();
      }}
      className="deleteModal fixed top-60 left-1/2 z-100 w-9/10 -translate-x-1/2 space-y-4 rounded-[4px] bg-white p-6"
    >
      <h2 className="title4">Delete this document?</h2>
      <p className="paragraph font-[RobotoSlabRegular]">
        Are you sure you want to delete the '{fileCurrent.name}' document and
        its contents?
        <br />
        This action cannot be reversed.
      </p>
      <button
        onClick={() => {}}
        className="bg-orange hover:bg-orangeHover w-full cursor-pointer rounded-[4px] p-2 text-white outline-0"
      >
        Confirm & Delete
      </button>
    </div>
  );
}
