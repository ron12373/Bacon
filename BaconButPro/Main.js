// ==UserScript==
// @name          lolscripts
// @namespace     UwURobloxwq1
// @version       0.2
// @author        lolscripts
// @description   Bypass ad-links using the lolscripts API and get to your destination without ads!
// @include       /^https?:\/\/linkvertise\.com\/\d*\/\S*/
// @include       /^https?:\/\/\S*[.]*\/s\?\S*/
// @include       /^https?:\/\/\paster[.]so\/\S*/
// @include       /^https?:\/\/\boost[.]ink\/\S*/
// @include       /^https?:\/\/\mboost[.]me\/\S*/
// @include       /^https?:\/\/\bst[.]gg\/\S*/
// @include       /^https?:\/\/\booo[.]st\/\S*/
// @include       /^https?:\/\/\socialwolvez[.]com\/\S*/
// @include       /^https?:\/\/\www[.]sub2get[.]com\/\S*/
// @include       /^https?:\/\/\sub2get[.]com\/\S*/
// @include       /^https?:\/\/\v[.]gd\/\S*/
// @include       /^https?:\/\/\unlocknow[.]net\/\S*/
// @include       /^https?:\/\/\sub2unlock[.]com\/\S*/
// @include       /^https?:\/\/\sub2unlock[.]net\/\S*/
// @include       /^https?:\/\/\sub2unlock[.]io\/\S*/
// @include       /^https?:\/\/\sub4unlock[.]io\/\S*/
// @include       /^https?:\/\/\rekonise[.]com\/\S*/
// @include       /^https?:\/\/\adfoc[.]us\/\S*/
// @include       /^https?:\/\/\bstlar[.]com\/\S*/
// @include       /^https?:\/\/\work[.]ink\/\S*/
// @include       /^https?:\/\/\cety[.]app\/\S*/
// @grant         GM_addStyle
// @downloadURL   https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @updateURL     https://raw.githubusercontent.com/bypass-vip/userscript/master/bypass-vip.user.js
// @homepageURL   https://bypass.vip
// @icon          https://cdn.discordapp.com/attachments/1287088011225337977/1287112617760129145/1725682140651Sandstorm.png?ex=66f05c89&is=66ef0b09&hm=73442d20fd9807a90c582e5f3d1514f7ef488966f79f19e902ec3a2b33d3127f&
// @run-at document-idle
// ==/UserScript==

GM_addStyle(`
.lolscripts {
    width: 48px;
    height: 48px;
}

.lolscripts2 {
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    bottom: 20px;
    left: 20px;
    max-width: 50%; /* Increase the max-width to provide more space */
    max-height: 100%;
    background-color: rgba(50, 50, 50, 0.8);
    color: white;
    backdrop-filter: blur(10px);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(255, 255, 255, 0.2);
    z-index: 999999;
}

.lolscripts3 {
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.lolscripts4 {
    background: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 8px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: black;
}

.lolscripts5 button {
    margin-top: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 8px;
    min-width: 25%;
    height: auto;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.4);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.lolscripts6 {
    padding: 15px;
    overflow-y: auto;
    word-wrap: break-word;
    max-height: 200px;
    text-align: center;
    font-size: 16px;
}

.lolscripts7 {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`);

document.querySelector("body").innerHTML += `
    <div class="lolscripts2">
        <div class="lolscripts3">
            <img src="https://cdn.discordapp.com/attachments/1287088011225337977/1287112617760129145/1725682140651Sandstorm.png?ex=66f05c89&is=66ef0b09&hm=73442d20fd9807a90c582e5f3d1514f7ef488966f79f19e902ec3a2b33d3127f&" alt="LOGO" class="lolscripts">
            lolscripts
            <div2>X</div2>
            <img src="https://cdn.discordapp.com/attachments/1278332112444854406/1287411467012014150/image0.jpg?ex=66f172dc&is=66f0215c&hm=3022e450b4c581e4371cd4b2b778067d7a1b0ec92788b0da04efa29c0ebec920&" alt="LOGO" class="lolscripts">
            Bacon
            <button class="lolscripts4" onclick="this.parentElement.parentElement.remove();">&times;</button>
        </div>
        <div class="lolscripts6">
            <div class="bypass-vip-toast-result"></div>
            <div class="bypass-vip-toast-loading">
                <span class="lolscripts7"></span>
                <p>Loading bypass...</p>
            </div>
            <div class="lolscripts5" hidden>
                <button id="bypass-vip-copy">Copy</button>
                <button id="bypass-vip-open" hidden>Open</button>
            </div>
        </div>
    </div>
`;

fetch(`https://api.bypass.vip/bypass?url=${encodeURIComponent(window.location.href)}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".bypass-vip-toast-loading").hidden = true;
        if (data.status == 'success') {
            document.querySelector(".lolscripts5").hidden = false;
            document.querySelector(".bypass-vip-toast-result").innerText = data.result;
            try {
                new URL(data.result);
                document.querySelector("#bypass-vip-open").hidden = false;
            } catch (e) {}
        } else {
            document.querySelector(".bypass-vip-toast-result").innerText = data.message;
        }
    })
    .catch(err => {
        alert('Error bypassing link! The error has been logged to the console.');
        console.error('Fetch Error:', err);
    });

document.querySelector("#bypass-vip-copy").addEventListener("click", () => {
    navigator.clipboard.writeText(document.querySelector(".bypass-vip-toast-result").innerText)
    alert('Content has been copied to your clipboard');
});
document.querySelector("#bypass-vip-open").addEventListener("click", () => {
    window.location.href = document.querySelector(".bypass-vip-toast-result").innerText
});
