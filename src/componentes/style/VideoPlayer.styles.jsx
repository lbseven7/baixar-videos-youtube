import styled from 'styled-components';

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #191919;

  
  h2 {
    color: #6a6a6a;
  }

  > input {
    border-radius: 5px;
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    border: none;
  }

  > input::placeholder {
    color: #a1a1a1;
    }

  > input:focus {
    outline: none;
    background: #6a6a6a;
  }
`;
