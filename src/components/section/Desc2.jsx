import React, { useEffect, useRef } from "react";

const Desc2 = () => {
  const textContainerRef = useRef(null);
  const textElementRef = useRef(null);
  const textElement1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || window.scrollY;
      let textContainer = textContainerRef.current;
      let textElement = textElementRef.current;
      let textElement1 = textElement1Ref.current;

      if (scrollTop > textContainer.offsetTop - window.innerHeight / 2) {
        textElement.style.opacity = 1;
        textElement.style.transform = "translateY(0)";
      } else {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(50%)";
      }

      if (scrollTop > textContainer.offsetTop - window.innerHeight / 2 + 200) {
        textElement1.style.opacity = 1;
        textElement1.style.transform = "translateY(0)";
      } else {
        textElement1.style.opacity = 0;
        textElement1.style.transform = "translateY(50%)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="section5" data-bgcolor="#F4F0EA">
      <div className="award__wrap">
        <div className="award__container">
          <div className="award__inner" ref={textContainerRef}>
            <div className="arard__text01">since</div>
            <div className="arard__text02" ref={textElementRef}>
              2023
            </div>
            <div className="arard__text03" ref={textElement1Ref}>
              What to Watch From Now:
              <br />
              <span style={{ color: "#883d00" }}>
                JAVASCRIPT, REACT, NODE.JS, VUE
              </span>
              <br />I worked on it myself !!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc2;
