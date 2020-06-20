import styled,{ keyframes } from 'styled-components';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Load = keyframes`
  0% {
    content: 'Loading';
  }
  25% {
    content: 'Loading.';
  }
  50% {
    content: 'Loading..';
  }
  75% {
    content: 'Loading...';
  }
  100% {
    content: 'Loading...';
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Loader = styled.div`
  width:  120px;
`

export const LoaderWheel = styled.div`
  animation: ${Spin} 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 100px;
  margin-bottom: 30px;
  width: 100px;
`

export const LoaderText = styled.div`
  color: #3e3f42;
  font-size: 28px;
  :after {
    content: 'Loading';
    animation: ${Load} 2.5s linear infinite;
  }
`