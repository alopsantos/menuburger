import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 20px;
  justify-content: space-around;
  display: flex;
  background: ${props => props.theme.colors.gray50};
  position: fixed;
  z-index: 18;
  div.logo {
    a {
      span {
        height: 100%;
        display: flex;
        align-items: center;
      }
      svg {
        height: 100%;
        padding: 5px 0;
      }
    }
  }
  @media (max-width: 768px) {
    div.logo {
      display: flex;
      flex: 1;
      justify-content: center;
      margin-right: 20px;
      a {
        span {
          display: flex;
          height: 100%;
        }
        svg {
        height: 100%;
        padding: 5px 0;
      }
      }
    }
  }
`
export const Burgerdiv = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 99;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    border-radius: 10px;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open
        ? props => props.theme.colors.gray50
        : props => props.theme.colors.gray100};
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  z-index: 19;
  li {
    padding: 18px 10px;
    margin-left: 20px;
    a {
      font-family: 'Archive', sans-serif;
      color: ${props => props.theme.colors.gray700};
      svg {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.black300};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: flex-start;
    li {
      a {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: ${props => props.theme.colors.gray50};
        svg {
          margin-right: 25px;
          display: block;
        }
        :hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`
export const Overlay = styled.div`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 16;
  background: ${props => props.theme.colors.blackO50};
`
