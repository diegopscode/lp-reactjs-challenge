import { createGlobalStyle } from "styled-components";

import Colors from "./Colors";

const GlobalStyles = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	body {
		background: #FFF;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: ${Colors.BLACK}
	}

	a {
		text-decoration: none;
	}

	ol, ul {
		list-style: none;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}

	button {
		border: 0;
		outline: none;
		appearance: none;
	}

	.app-container {
		position: relative;
		min-height: 100vh;
		padding-bottom: 60px;
	}

	.container {
		max-width: 1024px;
		margin: 0 auto;
	}
`;

export default GlobalStyles;
