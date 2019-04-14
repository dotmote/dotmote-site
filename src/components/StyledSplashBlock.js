import React from 'react';
import styled from 'styled-components';

const SplashBlock = ({ className, children, style }) => (
	<div className={className} style={{ ...style }}>
		{children}
	</div>
);

const StyledSplashBlock = styled(SplashBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export default StyledSplashBlock;
