import { useEffect, useState, type Ref, type RefObject } from 'react'
import './Navbar.css'
import type { Tab } from '../../types'

interface NavBarProps {
  sections: Record<string, RefObject<HTMLElement>>;
}

const tabs: Tab[] = [
    {
        name: "Experience",
        element: "experienceHeader"
    },
    {
        name: "About",
        element: "aboutHeader"
    }
]
export default function NavBar({sections}: NavBarProps) {
    const [activeSection, setActiveSection] = useState<string>("");
    const scrollToSection = (element: string) => {
        sections[element as keyof typeof sections]?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const isInView = (element: string) => {
        const ref = sections[element as keyof typeof sections];
        if (!ref?.current) return false;
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
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
            {tabs.map((tab: Tab)=>(
                <p onClick = {()=>{scrollToSection(tab.element)}} style={{textDecoration: (isInView(tab.element) ? "2px underline solid": "none")}}>{tab.name}</p>
            ))}
        </div>
    )
}