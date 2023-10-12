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
import { createResource, createSignal } from "solid-js";

let asciidoctor = Asciidoctor();

const getChapter = async (id) => {
    const response = await fetch(`/src/assets/chapters/chapter${id}.adoc`);
    return await response.text();
}
function Book() {
    const [chapterid, setChapterid] = createSignal(0);
    const [chapter] = createResource(chapterid, getChapter);
    const renderedChapter = () => asciidoctor.convert(chapter(), { attributes: { showtitle: true } });

    return (
        <div style="text-align: center">
            <Nav />
            <Show when={!chapter.loading} fallback={<span>Loading...</span>}>
                <div innerHTML={renderedChapter()}></div>
            </Show>
        </div>
    );
}

export default Book;
