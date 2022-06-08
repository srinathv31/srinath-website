import { createContext } from "react";

export const globalPropsContext = createContext<GlobalProps>({
    setIsDarkModeToggle: () => false,
    isDarkModeToggle: false
});

interface GlobalProps {
    isDarkModeToggle: boolean,
    setIsDarkModeToggle: (d: boolean) => void
}
