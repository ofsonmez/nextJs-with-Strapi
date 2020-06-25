import styled from "@emotion/styled";

function About() {
  return (
    <AboutStyled className="container">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non odio
        ut massa fringilla scelerisque. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Nulla suscipit, leo quis
        dignissim pellentesque, ipsum mauris scelerisque mi, sit amet hendrerit
        nisl libero at mauris. Nam molestie mi est, tristique efficitur tortor
        sollicitudin a. Nulla tristique velit in interdum pharetra. Morbi vitae
        suscipit risus. Maecenas accumsan et diam nec tempus. Nunc convallis
        justo nec elit pellentesque, eu semper ex bibendum. Proin lobortis sit
        amet lorem ac lacinia.
      </p>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  font-size: 40px;
`;

export default About;
