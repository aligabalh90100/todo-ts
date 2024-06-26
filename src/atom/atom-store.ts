import { atom } from "@mongez/react-atom";

export const todoAtom = atom({
  key: "TodoList",
  default: JSON.parse(localStorage.getItem("list") || "[]"),
  beforeUpdate(list) {
    localStorage.setItem("list", JSON.stringify(list));
    return list;
  },
});

export const editAtom = atom<{ oldText: string; newText: string }>({
  key: "EditList",
  default: { oldText: "", newText: "" },
});
