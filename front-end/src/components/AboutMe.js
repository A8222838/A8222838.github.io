import React from "react";

function AboutMe() {
  return (
    <section className="section about-page">
      <div className="section-center about-center">
        <article className="about-text">
          <h2>自我介紹</h2>
          <div className="underline"></div>
          <p>
            出生於2001年，生長於新北，大學就讀於中國文化大學。個性隨和且善於傾聽，會站在別人的角度換位思考，不易與人發生爭執，因此在團隊合作中，可以良好的溝通及互動，因為影響團隊效率除了專業技能外，人與人之間的互動更是關鍵。
            大學期間有參加過intel
            DevCup競賽概念組，從中收穫了團隊合作、發想能力、因應市場需求等，並且將從比賽獲得的經驗應用在大學專題上，大學專題題目為：物聯網暨軟硬體整合應用之沉浸式體驗-密室逃脫遊戲，負責網頁前端next.js。
          </p>
          <div className="about-stack"></div>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
