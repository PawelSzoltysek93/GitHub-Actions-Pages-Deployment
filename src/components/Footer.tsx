import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className="responsive flex justify-between w-xl ml-8">
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; {new Date().getFullYear()} Created by Pawel Szoltysek
        </p>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          Legal Notice
        </a>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          Privacy Policy
        </a>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
