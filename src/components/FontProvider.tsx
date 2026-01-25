import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const { getFontClass } = useLanguage();

  useEffect(() => {
    const fontClass = getFontClass();
    
    // Remove existing font classes
    document.body.classList.remove('font-sans', 'font-hindi', 'font-marathi', 'font-indic');
    
    // Add the current language font class
    document.body.classList.add(fontClass);
  }, [getFontClass]);

  return <>{children}</>;
};

export default FontProvider;