import Link from "next/link";
import styled from "@emotion/styled";

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="contianer">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/movie-maker.jpg" alt="Sites logo" />
            </a>
          </Link>
          <span className="logo-text">Movies we Liked</span>
          <Link href="/about">
            <a className="about">About</a>
          </Link>
          <Link href="/contact">
            <a className="contact">Contact</a>
          </Link>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;
    margin-left: 40px;

    img {
      height: 100px;
      width: 100px;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }

    .about {
      margin-left: 1700px;
    }

    .contact {
      margin-left: 20px;
    }
  }
`;

export default Header;
