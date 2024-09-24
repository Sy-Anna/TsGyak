interface Diak{
    neve: string;
    jegye: number;
}

import './style.css'

document.addEventListener("DOMContentLoaded", () => {
    const erdemjegyek: Array<Diak>=[];
    let nev = document.querySelector<HTMLInputElement>("#nevInput")!;
    let jegy = document.querySelector<HTMLInputElement>("#jegyInput")!;

    document.getElementById("hozzaadBtn")!.addEventListener("click", (e) => {
        e.preventDefault();
        let diak = {
            neve: nev.value,
            jegye: parseInt(jegy.value),
        }
        erdemjegyek.push(diak);
    })
    document.getElementById("kiiratBtn")!.addEventListener("click", (e) => {
        e.preventDefault();
        let valami = document.getElementById("listazas")!;
        valami.innerHTML="";
        for (const diak of erdemjegyek) {
            const valami2 = document.createElement("div")
            valami2.innerHTML=`
            <div>
                nev: ${diak.neve} ${diak.jegye}
            </div>`
            valami.append(valami2);

        }
    })
})