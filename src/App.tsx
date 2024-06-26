import { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import useLanguage from "./hook/useLanguage";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const { lang } = useLanguage();
  const [content, setContent] = useState("landing");
  useEffect(() => {
    if (!localStorage.getItem("list")) {
      localStorage.setItem("list", JSON.stringify([]));
    }
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
    }
  }, []);

  if (content == "landing") {
    return (
      <section className="h-lvh bg-[url('/cover2.jpg')]   bg-cover flex justify-center items-center ">
        c
        <div className="backdrop-blur-sm p-10 lg:p-40 flex justify-center items-center flex-col gap-16">
          <h1
            className={` text-2xl md:text-4xl ${
              lang == "en" ? "lg:text-8xl" : "lg:text-6xl"
            }  font-bold text-orange-500 `}
          >
            {lang == "en"
              ? "Your Todo List App"
              : "تطبيق قائمة المهام الخاصة بك"}
          </h1>
          <button
            onClick={() => {
              setContent("list");
            }}
            className="z-10 font-medium bg-orange-500 text-black px-10 py-4 rounded-lg hover:scale-110 hover:bg-orange-700 ease-in duration-200"
          >
            {lang == "en" ? "Make Your List" : "اصنع قائمتك"}
          </button>
        </div>
      </section>
    );
  }
  return (
    <section
      style={{ position: "relative" }}
      className="bg-slate-50 h-lvh flex flex-col  gap-8"
    >
      <NewTodo />
      <TodoList />
      <LanguageToggle />
    </section>
  );
}

export default App;
