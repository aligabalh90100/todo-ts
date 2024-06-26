import useLanguage from "../hook/useLanguage";

const LanguageToggle = () => {
  const { updateLanguage, lang } = useLanguage();

  function handleLanguageChange() {
    lang == "en" ? updateLanguage("ar") : updateLanguage("en");
  }
  return (
    <div className="absolute top-4 right-8 cursor-pointer flex items-center content-center flex-col gap-2">
      <div
        onClick={handleLanguageChange}
        className="font-medium uppercase bg-slate-100 flex justify-center items-center w-12 h-12 rounded-full hover:shadow-2xl hover:shadow-gray-900"
      >
        {lang}
      </div>
    </div>
  );
};

export default LanguageToggle;
