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
            'https://sudonims.github.io/vtop-da-deadline/privacy';
          return null;
        }}
      />
      <Route
        path={`${url}/home`}
        component={() => {
          window.location.href = 'https://sudonims.github.io/vtop-da-deadline/';
          return null;
        }}
      />
    </Switch>
  );
}
