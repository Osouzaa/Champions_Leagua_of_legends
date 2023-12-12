import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 390px) {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const ContentView = styled.div`
  @media screen and (min-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

const Right = styled.div`
  @media screen and (min-width: 390px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2em;

    .Content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2em;

      p {
        position: relative;
        left: 5em;
        top: 0.5em;
        font-size: 24px;
      }
    }

    p {
      font-size: 30px;
      color: #ffffff;
    }
    button {
      margin-top: 4.5em;
    }
    .contentButton {
      display: flex;
      gap: 1em;

      button {
        padding: 6px 10px;
        color: #ffffff;
        background-color: #e74c3c;
        border: 2px solid #c0392b;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
`;

const Left = styled.div`
  @media screen and (min-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #ffffff;

    h1 {
      margin-top: 1em;
      text-align: center;
      text-transform: uppercase;
      font-size: 28px;
    }
  }
`;

const Description = styled.div`
  @media screen and (min-width: 390px) {
    width: 90%;
    font-size: 14px;
    margin: 1em 0em;
    text-align: justify;
  }
`;

const List = styled.ul`
  @media screen and (min-width: 390px) {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    list-style: none;
  }
`;

const ContentHabilidaddes = styled.div`
  @media screen and (min-width: 390px) {
    margin-top: 2em;
    display: flex;
    gap: 3em;

    li {
      margin-left: 0;
    }
  }
`;

export {
  Container,
  Right,
  Left,
  ContentView,
  Description,
  List,
  ContentHabilidaddes,
};
