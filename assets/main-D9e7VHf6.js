import{P as a}from"./Pizza-VnJp2V88.js";const p=document.querySelector(".root"),s=t=>`
        <div class="pizza">
            <h2>${t.title}</h2>
            <p class="toppings">${t.toppings.join(",")}</p>
            <p>${t.description}</p>
            <span>£${t.price}</span>
        </div>
    `,r=(t,e)=>{const n=document.createElement("template");for(const o of t)n.innerHTML+=o;e.append(n.content)};document.addEventListener("DOMContentLoaded",async()=>{const e=(await a.loadAll()).map(s);r(e,p)});
