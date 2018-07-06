import React from 'react';

//separate from React, throwing react codes onto the browser
//DOM: Document object model
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	//target on the 'root' div in public/index
	//<App></App>, or 
	<App />,
	document.getElementById('root')
);
