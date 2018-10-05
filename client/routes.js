/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import Home from './modules/Survey/pages/Home';
import SurveyMain from './modules/Survey/pages/SurveyMain';
import SurveySolution from './modules/Survey/pages/Solution';
import SurveyMetric from './modules/Survey/pages/Metrics';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home}
    />
    <Route
      path="/survey/:questionId"
      component={SurveyMain}
    />
    <Route
      path="/survey/solution/:uuid"
      component={SurveySolution}
    />
    <Route
      path="/metric/:questionId"
      component={SurveyMetric}
    />
  </Route>
);
