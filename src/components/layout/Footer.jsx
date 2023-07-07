import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="section9">
      <div className="footer__wrap">
        <div className="footer__container">
          <div className="footer__inner1">
            <ul>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/"
                  className="underline-rotate"
                >
                  MAIN
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/mysql/index.html"
                  className="underline-rotate"
                >
                  MYSQL
                </Link>
              </li>
              <li>
                <Link
                  to="https://yuna2023-site-react003.netlify.app/"
                  className="underline-rotate"
                >
                  REACT
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/quiz/quizEffect01.html"
                  className="underline-rotate"
                >
                  QUIZ
                </Link>
              </li>
              <li>
                <Link
                  to="https://yuna-game.web.app/"
                  className="underline-rotate"
                >
                  TETRIS
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__inner1__01">
            <ul>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/mouseEffect/mouseEffect01.html"
                  className="underline-rotate"
                >
                  MOUSE EFFECT
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/site/site1/index.html"
                  className="underline-rotate"
                >
                  CREATE SITE
                </Link>
              </li>
              <li>
                <Link
                  to="https://master--transcendent-duckanoo-0a216a.netlify.app/"
                  className="underline-rotate"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/parallax/parallax01.html"
                  className="underline-rotate"
                >
                  PARALLAX
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__inner1__02">
            <ul>
              <li>
                <Link
                  to="http://yuna0508.dothome.co.kr/php2/php/main/main.php"
                  className="underline-rotate"
                >
                  TEAMPROJECT
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/parallax/parallaxAA.html"
                  className="underline-rotate"
                >
                  DYNAMIC
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/search/searchEffect.html"
                  className="underline-rotate"
                >
                  SEARCH SITE
                </Link>
              </li>
              <li>
                <Link
                  to="https://leeyouna21.github.io/web2023/javascript/slide/slideEffect01.html"
                  className="underline-rotate"
                >
                  SLIDE
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__inner2">
          <span className="footer__text">YOUNA</span>
        </div>
        <div className="footer__inner3">
          <div className="inner__text1">©2023</div>
          <div className="inner__text2">MADE BY : YOUNA</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
