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

import Asciidoctor from "asciidoctor";
import Nav from "../Nav";
import { Index, Show, createResource, createSignal } from "solid-js";
import { Motion } from "@motionone/solid"
import styles from "./Book.module.css";
import "./asciidoctor.css"

let asciidoctor = Asciidoctor();

const getChapter = async (id) => {
    const response = await fetch(`chapters/chapter${id}.adoc`);
    return await response.text();
}

const contents = [
    "The Graphene Programming language",
    "Introduction",
    "Getting Started"
];

function Book() {
    const [chapterid, setChapterid] = createSignal(0);
    const [chapter] = createResource(chapterid, getChapter);
    const numChapters = contents.length;
    const renderedChapter = () => asciidoctor.convert(chapter(), { standalone: true, attributes: { showtitle: true, StyleSheet: false }, doctype: "book" });
    const [width, setWidth] = createSignal(0);

    function Sidebar() {

        return (
            <>
                <Motion.button
                    id={styles.open}
                    onClick={() => setWidth(width() ? 0 : 20)}
                    animate={{ left: `${width() ? width() + 5 : 1}em` }}
                    transition={{ duration: 0.25 }}
                >
                    <i class="material-symbols-outlined">menu</i>
                </Motion.button>
                <Motion
                    animate={{ width: `${width()}em` }}
                    transition={{ duration: 0.25 }}
                    class={styles.Sidebar}
                >
                    <Index each={contents}>{(title, i) =>
                        <button onClick={() => setChapterid(i)}>
                            {i}. {title}
                        </button>
                    }</Index>
                </Motion>
            </>
        );
    }

    return (
        <div class={styles.Book}>
            <Motion
                animate={{ ["margin"]: `0 0em 0 ${width()}em` }}
                transition={{ duration: 0.25 }}
            >
                <Nav />
            </Motion>
            <Sidebar />
            <Show when={!chapter.loading} fallback={<span>Loading...</span>}>
                <Motion
                    animate={{ margin: `0 5em 1em ${width() + 5}em` }}
                    transition={{ duration: 0.25 }}
                    class={styles.chapter_container}
                    innerHTML={renderedChapter()}
                />
            </Show>
            <Show when={chapterid() < numChapters - 1}>
                <button class={styles.nav_button} id={styles.next} onClick={() => setChapterid(chapterid() + 1)}><i class="material-symbols-outlined">chevron_right</i></button>
            </Show>
            <Show when={chapterid() != 0}>
                <Motion.button
                    animate={{ left: `${width() ? width() + 4 : 0}em` }}
                    transition={{ duration: 0.25 }}
                    class={styles.nav_button}
                    id={styles.previous}
                    onClick={() => setChapterid(chapterid() - 1)}
                >
                    <i class="material-symbols-outlined">chevron_left</i>
                </Motion.button>
            </Show>
        </div >
    );
}

export default Book;
