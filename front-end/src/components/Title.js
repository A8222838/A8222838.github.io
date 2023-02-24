import React from "react"
import Typed from "react-typed"

function Title() {
  return (
    <header className="title">
      <div className="section-center title-center">
        <article className="title-info">
          <div>
            <div className="underline"></div>
            <h1>我是黃名顗</h1>
            <div className="typing">
              <Typed
                strings={[
                  "文化大學 資訊工程學系...",
                ]}
                typeSpeed={87}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </div>
          </div>
        </article>
      </div>
    </header>
  );
}

export default Title;
