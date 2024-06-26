import { useEffect } from "react";
import { langaueAtom } from "../atom/atomLanguage";

const useLanguage = () => {
  const lang = langaueAtom.useValue();
  useEffect(() => {
    if (lang == "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [lang]);
  function updateLanguage(value: string) {
    langaueAtom.update(value);
  }
  return { lang, updateLanguage };
};

export default useLanguage;
