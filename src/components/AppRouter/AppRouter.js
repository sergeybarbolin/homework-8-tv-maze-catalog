// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './../Search';
import ShowPage from './../ShowPage';

export default () => (
    <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/shows/:id" component={ShowPage} />
    </Switch>
)