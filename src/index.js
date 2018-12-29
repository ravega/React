import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import App from './App';
import Info from './Info';

// import registerServiceWorker from './registerServiceWorker'; To be included

ReactDOM.render(
    <BrowserRouter>
      <Main>
        <Route exact path="/" component={App}/>
        <Route exact path="/info/:name" component={Info}/>
      </Main>  
    </BrowserRouter>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

