// ==UserScript==
// @name         Test APIKEY Retention with Original Function
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Giữ nguyên APIKEY trong function mà không thay đổi
// @author       You
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @downloadURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// @updateURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// ==/UserScript==

// Phần hàm APIKEY giữ nguyên như bạn yêu cầu
function APIKEY() {
    const APIKEY = ''; // Giá trị mặc định của APIKEY
    return APIKEY;
}

(function() {
    'use strict';

    // Kiểm tra xem APIKEY đã được lưu chưa
    let apiKey = GM_getValue("APIKEY", null); // Nếu không có, giá trị mặc định là null

    // Nếu chưa có APIKEY lưu trữ, lưu lại giá trị ban đầu
    if (apiKey === null) {
        apiKey = APIKEY(); // Lấy APIKEY từ hàm
        GM_setValue("APIKEY", apiKey); // Lưu APIKEY vào bộ nhớ của Tampermonkey
        console.log("APIKEY đã được lưu:", apiKey);
    } else {
        console.log("APIKEY đã được lưu trữ và giữ nguyên:", apiKey);
    }

    // Sử dụng APIKEY trong script
    console.log("APIKEY hiện tại:", apiKey);
})();
