import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
`

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  h2{
    color: var(--white);
    font-size: 3.875rem;
    margin-bottom: 25px;
  }
  p{
    color: var(--white);
    margin-bottom: 25px;
  }
`