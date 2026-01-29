import { useEffect, useState, type RefObject } from 'react'
import './Navbar.css'
import type { Language, Tab } from '../../types'
import { useLanguage } from '../../components/LanguageContext'
import { languages } from '../../types'
import Settings from '@mui/icons-material/SettingsRounded';

interface NavBarProps {
  sections: Record<string, RefObject<HTMLElement>>;
}

const tabs: Tab[] = [
    {
        name: "Education",
        element: "educationHeader"
    },
    {
        name: "Experience",
        element: "experienceHeader"
    },
    {
        name: "Projects",
        element: "projectsHeader"
    },
    {
        name: "About",
        element: "aboutHeader"
    },
    {
        name: "Resume",
        element: "resumeHeader"
    }
]

const languageButtons: {name: string, lang:Language}[] = [
    {name: "🇺🇸", lang: "en"},
    {name: "🇲🇽", lang: "es"},
    {name: "🇲🇫", lang: "fr"},
]

export default function NavBar({sections}: NavBarProps) {
    const {setLang,lang} = useLanguage();
    const [activeSection, setActiveSection] = useState<string>("");
    const scrollToSection = (element: string) => {
    const ref = sections[element as keyof typeof sections]?.current;
        if (ref) {
            const yOffset = -60; 
            const y = ref.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const [settings, setSettings] = useState(false)

    const isInView = (element: string) => {
        const ref = sections[element as keyof typeof sections];
        if (!ref?.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    useEffect(() => {
        const onScroll = () => {
            for (const tab of tabs) {
                if (isInView(tab.element)) {
                setActiveSection(tab.element); //cause refresh
                return;
                }
            }
            setActiveSection("");
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [sections]);
    return (
        <div className="navBar">
            <div className="languages" onMouseEnter={()=>{setSettings(true)}} onMouseLeave={()=>{setSettings(false)}}>
                <Settings></Settings>
                
                {settings ? (
                    <div className="languageMenu">
                    {languageButtons.map((l) => (
                        <button
                            key={l.lang}
                            className="languageButton"
                            onClick={() => setLang(l.lang)}
                            style={lang==l.lang ? {opacity:"100%"} : {}}
                        >
                        {l.name}
                        </button>
                    ))}
                    </div>
                )
                :
                    <></>
                }
            </div>

            <div>
                {tabs.map((tab: Tab) => (
                    <button
                        key={tab.element}
                        className={`navButton ${activeSection === tab.element ? "active" : ""}`}
                        onClick={() => scrollToSection(tab.element)}
                        >
                        {tab.name}
                    </button>
                ))}
            </div>
        </div>
    )
}