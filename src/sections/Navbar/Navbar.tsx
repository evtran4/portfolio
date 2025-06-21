import { useEffect, useState, type Ref, type RefObject } from 'react'
import './Navbar.css'
import type { Tab } from '../../types'

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
export default function NavBar({sections}: NavBarProps) {
    const [activeSection, setActiveSection] = useState<string>("");
    const scrollToSection = (element: string) => {
    const ref = sections[element as keyof typeof sections]?.current;
    if (ref) {
        const yOffset = -60; 
        const y = ref.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    };

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
            {tabs.map((tab: Tab) => (
                <button
                    key={tab.element}
                    className="navButton"
                    onClick={() => scrollToSection(tab.element)}
                    style={{
                    borderBottom: activeSection === tab.element ? "2px solid gray" : "none",
                    }}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    )
}