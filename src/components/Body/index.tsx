import momo from "../../assets/images/Momoka.jpg";
import classes from "./styles.module.css";
import { Location } from "../../assets/images/Location";
import { Cog } from "../../assets/images/Cog";
import { Github } from "../../assets/images/Github";
import { Email } from "../../assets/images/Email";
import { useLanguage } from "../LanguageManager";
import { useEffect, useState } from "preact/hooks";
import { Resume } from "../../assets/images/Resume";
import { About } from "../../assets/images/About";
import { jp } from "../LanguageManager/translation";

const Body = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOgPos, setIsOgPos] = useState<boolean>(true);

    const flipAbout = (isOpen: boolean) => {
        setIsOpen(false);
        setIsOgPos(false);
        setTimeout(() => {
            setIsOgPos(true);
        }, 250);
    }

    const setOpenCheckOgPos = (isOpen: boolean) => {
        if(!isOgPos) {
            return;
        }
        setIsOpen(isOpen);
    }

    return (
        <section class={classes.content_container}>
            <img class={classes.image_container} src={momo}></img>
            <div class={classes.text_container}>
                <h1 class={`${classes.main_title} ${language === jp ? classes.jp_main_title : ""}`}>{language.name}</h1>
                <div class={`${classes.info_container} ${classes.info_container_top} ${language === jp ? classes.info_container_japanese : ""}`}>
                    <div class={classes.icon_padding}>
                        <Cog className={classes.icon} />
                    </div>
                    <h2 class={`${classes.title} ${language === jp ? classes.jp_title : ""}`}>{language.job}</h2>
                </div>
                <div class={`${classes.info_container} ${classes.info_container_bottom} ${language === jp ? classes.info_container_japanese : ""}`}>
                    <div class={classes.icon_padding}>
                        <Location className={classes.icon_large}/>
                    </div>
                    <h2 class={`${classes.title} ${language === jp ? classes.jp_title : ""}`}>{language.location}</h2>
                </div>
                <div class={classes.links_container}>
                    <a class={classes.link} onClick={() => setOpenCheckOgPos(!isOpen)}>
                        <About className={classes.link_icon}/>
                        <span class={`${classes.link_text} ${language === jp ? classes.link_text_japanese : ""}`}>{language.aboutMe}</span>
                    </a>
                    <a class={classes.link} target="_blank" href="../Momoka_Odajima_CV.pdf">
                        <Resume className={classes.link_icon}/>
                        <span class={`${classes.link_text} ${language === jp ? classes.link_text_japanese : ""}`}>{language.resume}</span>
                    </a>
                    <a class={classes.link} target="_blank" href="mailto:mmkodj@gmail.com">
                        <Email className={classes.link_icon}/>
                        <span class={`${classes.link_text} ${language === jp ? classes.link_text_japanese : ""}`}>{language.email}</span>
                    </a>
                </div>
            </div>
            <div class={`${classes.about_overlay} ${isOpen ? classes.about_overlay_open : ""} ${!isOgPos ? classes.about_overlay_right : ""}`} onClick={() => flipAbout(false)}>
                <h2 class={`${classes.main_title} ${classes.about_title} ${language === jp ? classes.jp_about_title : ""}`}>{language.aboutTitle}</h2>
                <span class={classes.about_content}>{language.aboutContent}</span>
                <div class={classes.close_button}>x</div>
            </div>
        </section>
    );
}

export {
    Body
}