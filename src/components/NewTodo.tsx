import { FC, FormEvent, useRef } from "react";

import { todoAtom } from "../atom/atom-store";
import useLanguage from "../hook/useLanguage";
// if using React Context
const NewTodo: FC = () => {
  const { lang } = useLanguage();
  // const [error, setError] = useState<string | undefined>(undefined);
  // const { addTodo } = useContext(TodoContext);
  const ref = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();

  //   if (ref.current!.value.trim().length === 0) {
  //     return;
  //   } else {
  //     addTodo(ref.current!.value);
  //   }

  //   ref.current!.value = "";
  // };
  // =================================import "./i18n";
  // if using Atom
  function submitUsingAtom(event: FormEvent) {
    event.preventDefault();
    if (ref.current!.value.trim().length === 0) {
      // setError("Please Enter Valid Todo Item");
      return;
    }
    event.preventDefault();
    const todoList = todoAtom.value;
    todoAtom.update([...todoList, ref.current?.value]);
    ref.current!.value = "";
  }

  return (
    <form
      onSubmit={submitUsingAtom}
      className="mt-20 flex flex-col w-10/12 lg:w-6/12 items-start bg-white p-4 rounded-md mx-auto shadow-lg"
    >
      <label className="font-medium text-2xl my-2" htmlFor="text">
        {lang == "en" ? "Todo Text" : "نص العنصر"}
      </label>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-0">
        <input
          ref={ref}
          type="text"
          id="text"
          className="lg:w-9/12  bg-slate-100 h-10 outline-0 p-2 text-1xl border-b-2 border-solid border-orange-500 rounded-t-lg"
        />
        <button className="bg-orange-500 px-8 py-3 lg:py-0 rounded-md text-white font-medium  text-xs lg:text-1xl">
          {lang == "en" ? "Add List Item" : "اضافة عنصر للقائمة"}
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
