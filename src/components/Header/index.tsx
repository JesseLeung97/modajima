import { ToggleButton } from "../ToggleButton";
import { useLanguage } from "../LanguageManager";
import usFlag from "../../assets/images/usFlag.svg";
import jpFlag from "../../assets/images/jpFlag.svg";
import sunIcon from "../../assets/images/sunIcon.svg";
import moonIcon from "../../assets/images/moonIcon.svg";
import { useTheme } from "../ThemeManager";
import classes from "./styles.module.css";

const Header = () => {
    const { toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <header class={classes.header_container}>
            <ToggleButton toggleName={"themeToggle"} inputState={theme === "dark" ? "icon_1" : "icon_2"} iconToggle_1={sunIcon} iconToggle_2={moonIcon} toggleFunction={toggleTheme} />
            <ToggleButton toggleName={"languageToggle"} iconToggle_1={jpFlag} iconToggle_2={usFlag} toggleFunction={toggleLanguage} />
        </header>
    );
}

export {
    Header
}