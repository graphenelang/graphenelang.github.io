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

import styles from './App.module.css';
import Nav from './Nav';

function App() {
  return (
    <div class={styles.App}>
      <Nav />
      <div class={styles.header}>
        <h1 class="title mb0">Graphene</h1>
        <p class={styles.description}>A statically typed, compiled, data oriented language.</p>
      </div>
    </div>
  );
}

export default App;
