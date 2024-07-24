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
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-3">
        Version 0.0.0
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
        &copy;  Benjam Bröijer, 2024
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
