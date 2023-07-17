import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#section1 .split .char", { yPercent: 50, autoAlpha: 0 });
    gsap.set("#section1 .desc1", { y: 30, autoAlpha: 0 });
    gsap.set("#header", { top: -200 });

    setTimeout(() => {
      gsap.to("#section1 .split .char", {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 0.1,
        duration: 2,
        ease: "circ.out",
      });
      gsap.to("#section1 .desc1", {
        autoAlpha: 1,
        y: 0,
        delay: 1,
      });
      gsap.to("#header", {
        autoAlpha: 1,
        top: 0,
        delay: 2,
      });
    }, 2000);

    const showNav = gsap
      .from("#header", {
        yPercent: -200,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });

    gsap.to("#section1 .desc2", {
      yPercent: -300,
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#section1",
        start: "top bottom",
        end: "bottom top",
        markers: false,
        scrub: true,
      },
    });

    gsap.to("#section1 .desc3", {
      yPercent: -300,
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#section1",
        start: "top bottom",
        end: "bottom top",
        markers: false,
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="section1" data-bgcolor="#ead0bc79">
      <h2 className="split">YOUNA</h2>
      <p className="desc1">
        Add elegance and charm to
        <br />
        your site with coding that
        <br />
        expresses your
      </p>
      <p className="desc2">
        when I start coding,
        <br />
        it will be timeless
        <br />
        for my story.
      </p>
      <div className="desc3">
        <img src="././images/header__me.png" alt="유나" />
        <div className="name">HELLO EVERYONE !</div>
      </div>
    </section>
  );
};

export default Intro;
