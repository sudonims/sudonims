import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

export default function ExVTOP() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${url}/privacy`}
        component={() => {
          window.location.href =
            'https://github.com/sudonims/vtop-da-deadline/blob/master/PRIVACY.md';
          return null;
        }}
      />
      <Route
        path={`${url}/home`}
        component={() => {
          window.location.href =
            'https://chrome.google.com/webstore/detail/exvtop-extended-vtop/mmncmmodffimfglkgomlgbgpcgidkbij';
          return null;
        }}
      />
    </Switch>
  );
}
