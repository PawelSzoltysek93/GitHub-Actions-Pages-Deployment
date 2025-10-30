import { Briefcase, Code, User } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.title")}{" "}
          <span className="text-primary">{t("about.titleHighlight")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.heading")}</h3>
            <p className="text-muted-foreground lg:text-xl">
              <Trans
                i18nKey="about.description1"
                components={{ highlight: <span className="text-primary" /> }}
              />
            </p>
            <p className="text-muted-foreground lg:text-xl">
              {t("about.description2")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("about.getInTouch")}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cards.webDev.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cards.webDev.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cards.uiux.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cards.uiux.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cards.project.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cards.project.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
