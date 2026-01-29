import { createContext, useContext, useState, useEffect } from 'react'
import { languages, type Language } from '../types'


  type LanguageContextType = {
    lang: Language
    setLang: (lang: Language) => void
    t: typeof languages.en
  }


  const LanguageContext = createContext<LanguageContextType | null>(null)

  const getLanguage = () => {
    const l = localStorage.getItem("evt_language")

    if (l && languages.hasOwnProperty(l)) {
      return l as Language;
    } 
    return "en"
    
  }

  export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>(getLanguage())

    useEffect(()=>{
      localStorage.setItem("evt_language", lang)
    },[lang])

    return (
      <LanguageContext.Provider
        value={{
          lang,
          setLang,
          t: languages[lang]
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}