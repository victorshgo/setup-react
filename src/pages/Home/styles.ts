import styled from "styled-components";

export const Image = styled.img`
  height: 40vh;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 20s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 2.5rem;
  line-height: 2;
`;

export const Link = styled.a`
  color: var(--primary);
  font-size: 1.75rem;
`;
