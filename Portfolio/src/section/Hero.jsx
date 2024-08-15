import HeroImg from "../assets/hero-img.png";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import twitterLight from "../assets/twitter-light.svg";
import twitterDark from "../assets/twitter-dark.svg";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import linkedinLight from "../assets/linkedin-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import Style from "./HeroStyle.module.css";
const skill_L = [
  {
    skill: "HTML + CSS",
    level: "advance",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#2532EA",
  },
  {
    skill: "java",
    level: "advance",
    color: "#60DAFB",
  },
  {
    skill: "git And gitHub",
    level: "intermediate",
    color: "#C3DCAF",
  },
];
function Hero() {
  return (
    <>
      <section id="hero">
        <div className={Style.container}>
          <div className={Style.ModColorContainer}>
            <div className={Style.imgcard}>
              <img src={HeroImg} alt="" srcset="" className={Style.Avatar} />
              <img className={Style.ModColor} src={Moon} alt="" srcset="" />
            </div>
          </div>

          <div className={Style.info}>
            <h1>Tran Duc Phat</h1>
            <h2>Developer</h2>
            <ul>
              <li>
                <a href="">
                  <img src={twitterDark} alt="" srcset="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={githubDark} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={linkedinDark} alt="" srcset="" />
                </a>
              </li>
            </ul>
            <p className={Style.description}>
              With a passion for developing modern React web apps for commercial
              businesses.
            </p>
            <a href="#" download>
              <button className="hover">Resume</button>
            </a>
            <div className={Style.listSkill}>
              {skill_L.map((skillObj) => (
                <SkillList skillObj={skillObj} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SkillList({ skillObj }) {
    {  /* Cach 1 
    if (skillObj.level === "beginner") {
        return (
          <>
            <div className={Style.skill} style={{ background: skillObj.color }}>
              <span>{skillObj.skill}</span>
              <span>👶</span>
            </div>
          </>
        );
    }else {
        return (
          <>
            <div className={Style.skill}  style={{background : skillObj.color}}>
              <span>{skillObj.skill}</span>
              <span> 💪</span>
            </div>
          </>
        );
    } */
    }

    // Cach 2 
     return (
       <>
         <div className={Style.skill} style={{ background: skillObj.color }}>
           <span>{skillObj.skill}</span>
           <span>
             {skillObj.level === "beginner" && "👶"}
             {skillObj.level === "advance" && "💪"}
             {skillObj.level === "intermediate" && "👍"}
           </span>
         </div>
       </>
     );
}
export default Hero;
