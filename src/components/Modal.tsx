import { FormEvent, useEffect, useRef } from "react";
import { editAtom, todoAtom } from "../atom/atom-store";
import useLanguage from "../hook/useLanguage";

const Modal = ({ open, onCLose }: { open: boolean; onCLose: () => void }) => {
  const { lang } = useLanguage();
  const [editListText, setEditText] = editAtom.useState();
  const oldText = editAtom.use("oldText");

  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal?.showModal();
    }
    return () => modal?.close();
  }, [open]);
  function hadnleEdit(event: FormEvent) {
    event.preventDefault();
    const oldList = todoAtom.value;
    const editIndex = oldList.indexOf(oldText);
    oldList[editIndex] = editListText.newText;
    todoAtom.update([...oldList]);
    editAtom.reset();
    dialog.current?.close();
  }

  return (
    <dialog ref={dialog} onClose={onCLose} className="w-6/12 p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-medium text-lg ">
          {lang == "en" ? "Edit List Item" : "تعديل العنصر"}
        </h1>
        <button
          className="text-red-600"
          onClick={() => dialog.current?.close()}
        >
          X
        </button>
      </div>
      <form onSubmit={hadnleEdit}>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-0">
          <input
            onChange={(e) =>
              setEditText({
                oldText: editListText.oldText,
                newText: e.target.value,
              })
            }
            type="text"
            name="text"
            defaultValue={oldText}
            className=" lg:w-9/12 bg-slate-100 h-8 outline-0 p-2 text-1xl border-b-2 border-solid border-orange-500 rounded-t-lg"
          />
          <button className="bg-orange-500 px-8 py-3 lg:py-0 rounded-md text-white font-medium  text-xs lg:text-1xl">
            {lang == "en" ? "Edit Todo" : "تعديل النص"}
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
