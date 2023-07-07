import React from "react";

const Scroll1 = () => {
  return (
    <div id="parallax__cont" style={{ color: "#883d00" }}>
      <section id="section1-1" className="parallax__item">
        <span className="parallax__item__num">CLONESITE</span>
        <span className="parallax__item__text1">
          클론 사이트는 원본 사이트인 '필라이즈'에서 영감을 받아 만들어진 클론
          사이트입니다.
          <br />
          클론 사이트는 필라이즈의 기능을 충실히 재현하며, 독특한 장점을
          제공합니다.
          <br />
          사용자들은 클론 사이트를 통해 원본 사이트와 동일한 편의성과
          <br />
          신뢰성을 경험할 수 있습니다. 지금 클론 사이트를 만나보세요!
        </span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <div className="button1">
          <button className="git">
            <a href="https://github.com/leeyouna21/web2023/tree/master/home">
              CODE
            </a>
          </button>
          <button className="site">
            <a href="https://leeyouna21.github.io/web2023/home/index.html">
              VIEW
            </a>
          </button>
        </div>
      </section>

      <section id="section1-2" className="parallax__item">
        <span className="parallax__item__num2">BOOK SITE</span>
        <span className="parallax__item__text2">
          이 사이트는 저의 취미인 책을 주제로 만들었습니다.
          <br />
          제가 스스로 코딩을 공부하고 디자인을 신경써서,
          <br />
          보는이에게 특별한 경험을 제공하고자 했습니다.
          <br />
          책과 코딩에 대한 열정을 담아 이 사이트를 만들었습니다.
          <br />
          제가 직접 책 데이터를 수집하고, 웹 디자인을 구성하며, 기능을 개발하여
          <br />
          사용자들에게 최고의 경험을 선사하고자 노력했습니다.
          <br />
          Api도 연결 돼 있어 카테고리를 클릭하시면 확인하실 수 있습니다.
        </span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <div className="button2">
          <button className="git2">
            <a href="https://github.com/leeyouna21/site2023-react01">CODE</a>
          </button>
          <button className="site2">
            <a href="https://yuna2023-site-react003.netlify.app/">VIEW</a>
          </button>
        </div>
      </section>

      <section id="section1-3" className="parallax__item">
        <span className="parallax__item__num3">PROJECT</span>
        <span className="parallax__item__text3">
          건강한 라이프스타일을 위한 식단 추천, 온리포유!
          <br />
          이 사이트는 사용자에게 건강하고 균형 잡힌 식단을 구성할 수 있도록
          돕습니다.
          <br />
          온리포유에서는 다양한 건강 음식들과 맛있는 레시피를 제공합니다.
          <br />
          온리포유는
          <span style={{ color: "#883d00" }}>
            PHP를 통해 회원가입, 로그인, 요리방 등 기능
          </span>
          을 구현하였습니다.
          <br />
          지금 온리포유을 경험해보세요!
        </span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <div className="button1">
          <button className="git">
            <a href="https://github.com/leeyouna21/teamproject">CODE</a>
          </button>
          <button className="site">
            <a href="http://yuna0508.dothome.co.kr/php2/php/main/main.php">
              VIEW
            </a>
          </button>
        </div>
      </section>

      <section id="section1-4" className="parallax__item">
        <span className="parallax__item__num2">WEBSTANDARD</span>
        <span className="parallax__item__text2">
          이 웹사이트는 제가 직접 웹 표준을 준수하여 만들었습니다.
          <br />
          제가 좋아하는 강아지를 주제로 제작하면서, 웹사이트 디자인과 기능을
          신중히 고려했습니다.
          <br />
          모든 디자인과 코드는 저 혼자서 완성했으며, 웹 표준을 준수하였습니다.
          <br />
          제가 이 웹사이트를 만들 때 웹 표준을 항상 고려하여 사용자들에게
          <br />
          최상의 환경을 제공하도록 노력했습니다.
        </span>
        <figure className="parallax__item__imgWrap">
          <div className="parallax__item__img"></div>
        </figure>
        <div className="button2">
          <button className="git2">
            <a href="https://github.com/leeyouna21/web2023/blob/master/site/site1/index.html">
              CODE
            </a>
          </button>
          <button className="site2">
            <a href="https://leeyouna21.github.io/web2023/site/site1/index.html">
              VIEW
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Scroll1;
