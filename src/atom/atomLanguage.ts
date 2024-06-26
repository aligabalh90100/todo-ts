import { atom } from "@mongez/react-atom";
export const langaueAtom = atom({
  key: "Language",
  default: localStorage.getItem("language") as string,
  beforeUpdate(lng) {
    localStorage.setItem("language", lng);
    return lng;
  },
});
