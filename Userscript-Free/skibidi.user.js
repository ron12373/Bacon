// ==UserScript==
// @name         Test APIKEY Retention with Original Function
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Giữ nguyên APIKEY trong function mà không thay đổi
// @author       You
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

// Phần hàm APIKEY giữ nguyên như bạn yêu cầu
function APIKEY() {
    let apiKey = GM_getValue("APIKEY", null);  // Lấy giá trị APIKEY đã lưu trữ
    if (apiKey === null) {
        // Nếu không có giá trị lưu trữ, sử dụng giá trị mặc định
        apiKey = '';
        GM_setValue("APIKEY", apiKey);  // Lưu giá trị vào bộ nhớ
    }
    return apiKey;  // Trả về APIKEY đã lưu trữ hoặc giá trị mặc định
}

(function() {
    'use strict';

    // Lấy APIKEY từ hàm APIKEY()
    let apiKey = APIKEY();

    console.log("APIKEY hiện tại:", apiKey);

    // Bạn có thể sử dụng apiKey ở đây trong các phần khác của script
})();
