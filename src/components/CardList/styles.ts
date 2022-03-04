import styled from "styled-components"

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


export const Character = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  background: black;
  color: white;
  width: 200px;

  &:hover {
    .wrapper {
      img {
        transform: scale(1.1);
      }
    }
  }

  .info {
    padding: 1rem;
    height: 80px;

    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }
`

export const Thumb = styled.div`
  margin: 0;
  overflow: hidden;
  padding: 0;

  .wrapper {
    height: 250px;
    position: relative;
    margin:0!important;

    img {
      object-fit: cover;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      object-position: top center;
    }
  }
`
