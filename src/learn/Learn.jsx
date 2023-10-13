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

import Nav from "../Nav"
import styles from "./Learn.module.css"
import { A } from '@solidjs/router'

function Section(props) {
    return (
        <section class={styles.section}>
            <h2 class={styles.section_title}>{props.title}</h2>
            {props.children}
        </section >
    )
}

function Learn() {
    return (
        <div>
            <Nav />
            <h1 class="page_title">Learn Graphene</h1>
            <Section title="Get started">
                <p>
                    The <em>Graphene programming language</em> book will guide you through the language.
                </p>
                <A href="/learn/book">Read the book</A>

            </Section>
        </div>
    );
}

export default Learn;
