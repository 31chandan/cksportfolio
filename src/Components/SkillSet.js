import React from "react";
import "../Component_StyleSheet/skillset.css";
import HtmlImg from "../Assets/HtmlImg.png";
import CssImg from "../Assets/CssImg.png";
import JSImg from "../Assets/JsImg.png";
import ReactImg from "../Assets/ReactImg.png";
import GitImg from "../Assets/gitImg.png";
import VsCImg from "../Assets/VsCodeImg.png";
import SkillSetSkills from "./SkillSetSkills";

const SkillSet = () => {
    const SkillsImage = [
        { id: 1, Image: HtmlImg, Text: "HTML" },
        { id: 2, Image: CssImg, Text: "CSS" },
        { id: 3, Image: JSImg, Text: "JS" },
        { id: 4, Image: ReactImg, Text: "REACT" },
        { id: 5, Image: GitImg, Text: "GITBASH" },
    ];

    const Tools = [{ id: 6, Image: VsCImg, Text: "VSCODE" }];

    return (
        <div className="skillset">
            <h2 className="skillset_title" data-aos="fade-up">
                Professional <span>Skillset</span>
            </h2>
            <SkillSetSkills Skills={SkillsImage} />
            <h2 className="skillset_title" data-aos="fade-up">
                <span>Tools</span> I Use
            </h2>
            <SkillSetSkills Skills={Tools} />
        </div>
    );
};

export default SkillSet;
