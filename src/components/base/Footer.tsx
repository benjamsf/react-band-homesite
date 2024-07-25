import { Trans } from "react-i18next";
import { DropdownMenu } from "../items/DropdownMenu";
import { useLanguageChange } from "../localization/LanguageChange";

export function Footer() {
  // Use both common and dynamic namespaces
  const { changeLanguage, availableLanguages } = useLanguageChange();

  // Convert available languages to dropdown items
  const languageItems = availableLanguages.map((lang) => ({
    label: lang.name,
    value: lang.code,
  }));

  return (
    <div className="w-full bg-gray-800 z-50 overflow-hidden text-white font-heading text-uppercase text-center text-sm pt-5 mt-10 mx-auto">
      <hr className="mx-auto w-11/12" />

      <div className="pt-4 py-3">
        Version 0.0.0
        <br />
        <br />
        <DropdownMenu
          triggerLabel="Language"
          items={languageItems}
          onSelect={(value) => changeLanguage(value)}
        />
      </div>

      <hr className="mx-auto w-56" />

      <div className="py-5 text-xs">
        <Trans i18nKey="footer.MadeBy" />{" "}
        <a
          href="https://github.com/benjamsf"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Benjam Bröijer, 2024
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
