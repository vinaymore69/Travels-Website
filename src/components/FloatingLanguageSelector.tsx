import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FloatingLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
          <Languages className="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="mb-2">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as "en" | "hi" | "mr")}
              className={`cursor-pointer ${language === lang.code ? "bg-accent" : ""}`}
            >
              <span className="mr-2 text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatingLanguageSelector;
