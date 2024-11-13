import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('https://i.dobrzemieszkaj.pl/i/30/20/84/1920/luksusowy-apartament-jak-go-zaprojektowac-2.jpg');
`
export const Text = styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
  color: var(--white);
  font-size:62px;
  font-weight: 700;
  margin-bottom: 35px;
  text-shadow: #000000 1px 2px; 
}
p{
  color: var(--white);
  margin-bottom: 25px;
  text-shadow: #000000 1px 2px; 
}
span{
  background-color: var(--blue);
  border: 0;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 45px;
  line-height: 24px;
  border-radius: 3px;
  cursor: pointer;
}
span:hover{
  text-decoration-line: underline;
  }
`