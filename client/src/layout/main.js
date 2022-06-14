import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import BlogPage from '../pages/blog';
import PicturePage from '../pages/forum';
import VideoPage from '../pages/resources';
import HelloWorld from '../pages/deadzone';

export default class Main extends React.Component {
  render() {
    return (
        <main>
          <Switch>
            <Redirect from='/blog' to='/'/>
            <Route exact path="/" component={BlogPage} />
            <Route path="/forum" component={PicturePage} />
            <Route path="/resources" component={VideoPage} />
            <Route path="/deadzone" component={HelloWorld}/>
          </Switch>
        </main>
    )
  }
}