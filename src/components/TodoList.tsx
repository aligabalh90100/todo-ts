import { FC, useState } from "react";

import { editAtom, todoAtom } from "../atom/atom-store";
import Modal from "./Modal";
import useLanguage from "../hook/useLanguage";

const TodoList: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { lang } = useLanguage();
  // if using React Context
  // const { items, removeTodo, replaceTodo } = useContext(TodoContext);
  // useEffect(() => {
  //   if (localStorage.getItem("list")) {
  //     replaceTodo(JSON.parse(localStorage.getItem("list") || '""'));
  //   }
  // }, []);
  // ===============================================
  // if using React Atom
  const items = todoAtom.useValue();
  function handleRemove(text: string) {
    const newTodoList = items.filter((item: string) => item !== text);
    todoAtom.update(newTodoList);
  }
  function onClose() {
    setOpen(false);
  }

  return (
    <>
      <ul className=" flex flex-col w-10/12 lg:w-6/12 items-start bg-white p-4 rounded-md mx-auto shadow-md">
        {items.length !== 0 ? (
          items.map((item: string, i: number) => {
            return (
              <div key={i} className="flex w-full justify-between">
                <li key={i}>{item}</li>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      editAtom.change("oldText", item);
                      setOpen(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-black hover:text-red-600"
                    onClick={() => handleRemove(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>{lang == "en" ? "Your list is empty" : "لا يوجد مهام"}</p>
        )}
      </ul>
      <Modal open={open} onCLose={onClose} />
    </>
  );
};
export default TodoList;
