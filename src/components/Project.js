import React from "react";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import WifiIcon from "@mui/icons-material/Wifi";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

function ProjectA06() {
  return (
    <div className="project-info">
      <h3>物聯網暨軟硬體整合應用之沉浸式體驗-密室逃脫遊戲</h3>
      <div className="project-desc">
        <PersonalVideoIcon />
        <p>
          前端：製作管理者使用的UI，拿取後端的資訊，讓管理者可以從網頁界面上控制遠端機關。
        </p>
        <h4>Next.js</h4>
        <br />
        <WifiIcon />
        <p>
          後端：判斷玩家是否做出通過機關條件，並控制機關通關與否的狀態，且回覆給前端和機關。
        </p>
        <h4>Next.js</h4>
        <h4>SQLLITE</h4>
        <br />
        <SelectAllIcon />
        <p>
          Iot：利用網路，將機關串聯起來，即可掌握機關的狀態，且可遠端控制，無須人力長時間監控。
        </p>
        <h4>Arduino</h4>
        <h4>ESP8266</h4>
        <br />
      </div>
      <Link href="https://github.com/A8222838/A06.git" target="_blank">
        <GitHubIcon />
      </Link>
    </div>
  );
}

function ProjectReactTest() {
  return (
    <div className="project-info">
      <h3>個人網頁試做</h3>
      <div className="project-desc">
        <PersonalVideoIcon />
        <p>將履歷內容以網頁形式呈現出來做為練習，並以REACT作為框架。</p>
        <h4>Next.js</h4>
        <br />
      </div>
      <Link href="https://github.com/A8222838/REACT-TEST.git" target="_blank">
        <GitHubIcon />
      </Link>
    </div>
  );
}

function Project() {
  return (
    <section className="section projects">
      <div className="section-center projects-center">
        <article className="title-info">
          <div>
            <div className="head-name">
              <h2>專案</h2>
            </div>
            <div className="underline"></div>
            <ProjectA06/>
            <br />
            <ProjectReactTest/>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Project;
