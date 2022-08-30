import english from "../../translations/en.json";
import japanese from "../../translations/jp.json";

export type TTranslation = {
    siteTitle: string,
    name: string,
    job: string,
    location: string,
    github: string,
    resume: string,
    aboutMe: string,
    email: string,
    aboutTitle: string,
    aboutContent: string
}  

const en = english as TTranslation;
const jp = japanese as TTranslation;

export {
    en,
    jp
}