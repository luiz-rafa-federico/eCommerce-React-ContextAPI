import styled from "styled-components";

export const Container = styled.div`
  border: 5px solid #dcdefe;
  border-radius: 20px;
  width: 500px;
  padding: 5px 15px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    border: none;
    background: transparent;
    align-items: center;
    flex: 1;
    color: #312e38;
    font-weight: bold;
    text-align: left;

    &::placeholder {
      font-size: 12px;
    }
  }
`;
