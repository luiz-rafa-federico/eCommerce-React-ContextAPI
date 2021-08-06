import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  margin-top: 5px;
  background-color: #fff;
`;

export const CardsDisplay = styled.div`
  width: 100vw;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 15px solid #dcdefe;
  margin-top: 20px;
  border-radius: 15px;
`;

export const Container404 = styled(CheckoutCard)`
  border: none;
  border-radius: unset;
  margin: auto;
  width: 100vw;
  height: 100vh;
  max-width: 1100px;
  margin-top: 5px;
  background-color: #fff;
  h1 {
    margin-bottom: -30px;
  }
  button {
    width: 25%;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    img {
      width: 90%;
    }
    button {
      width: 90%;
    }
  }
`;
