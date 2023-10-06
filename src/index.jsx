// Copyright (C) 2023 Devin Rockwell
// 
// This file is part of graphene-site.
// 
// graphene-site is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// graphene-site is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with graphene-site.  If not, see <http://www.gnu.org/licenses/>.

/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Learn from "./Learn";
import { Router, Route, Routes } from "@solidjs/router";
import Download from './Download';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/learn" component={Learn} />
        <Route path="/download" component={Download} />
      </Routes>
    </Router>
  ),
  root
);
