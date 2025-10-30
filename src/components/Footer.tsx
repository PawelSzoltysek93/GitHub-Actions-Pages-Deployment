import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className="responsive flex justify-between w-xl ml-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t("footer.createdBy")}
        </p>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          {t("footer.legal")}
        </a>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          {t("footer.privacy")}
        </a>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label={t("footer.backToTop")}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
