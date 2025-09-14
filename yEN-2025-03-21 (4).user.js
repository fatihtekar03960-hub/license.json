// ==UserScript==
// @name         yEN
// @namespace    http://tampermonkey.net/
// @version      2025-03-21
// @description  try to take over the world!
// @author       You
// @match        https://agarz.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=agarz.com
// @grant        none
// ==/UserScript==
const url = "https://kullaniciadi.github.io/betik-lisans/license.json";


(function() {
    'use strict';

    let yemAcik = false;
    let gostergeGorunur = true;

    // Stil oluştur
    const style = document.createElement("style");
    style.innerHTML = `
        .yem-durumu {
            position: fixed;
            bottom: 5px;
            right: 1px;
            padding: 1px 14px;
            font-size: 13px;
            font-weight: bold;
            font-family: 'Segoe UI', sans-serif;
            color: white;
            background-color: #aa0000;
            border: 2px solid #ff5555;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
            transition: all 0.3s ease;
            z-index: 9999;
            cursor: default;
        }

        .yem-durumu.acik {
            background-color: #00aa00;
            border-color: #55ff55;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
        }

        .yem-durumu:hover::after {
            content: " (R: Aç/Kapa • H: Yardım • F: Gizle)";
            font-size: 11px;
            color: #ccc;
            margin-left: 8px;
        }
    `;
    document.head.appendChild(style);

    // Gösterge div
    const yemDurumuDiv = document.createElement("div");
    yemDurumuDiv.className = "yem-durumu";
    yemDurumuDiv.innerText = "Yem: Kapalı";
    document.body.appendChild(yemDurumuDiv);

    // Tuş dinleyicileri
    document.addEventListener("keydown", function(e) {
        const key = e.key.toLowerCase();

        if (key === "r") {
            yemAcik = !yemAcik;
            updateYemDurumu();
        }

        if (key === "f") {
            gostergeGorunur = !gostergeGorunur;
            yemDurumuDiv.style.display = gostergeGorunur ? "block" : "none";
        }

        if (key === "h") {
            alert("🟢 R: Yem Aç/Kapa\n🟠 H: Yardım penceresi\n🔵 F: Göstergiyi gizle/göster\n📍 Cris20");
        }
    });

    // Güncelleme fonksiyonu
    function updateYemDurumu() {
        if (yemAcik) {
            yemDurumuDiv.innerText = "Yem: Açık";
            yemDurumuDiv.classList.add("acik");
        } else {
            yemDurumuDiv.innerText = "Yem: Kapalı";
            yemDurumuDiv.classList.remove("acik");
        }
    }
})();


function sendFeed() {
    if (typeof ws !== "undefined" && ws.readyState === 1) {
        ws.send(new Uint8Array([22])); // Agar.io feed paketi (r tuşu)
        console.log("Yem atıldı");
    } else {
        console.warn("WebSocket bağlantısı yok veya kapalı");
    }
}

let autoFeedActive = false;
let autoFeedInterval;

// r tuşuna basıldığında otomatik yem atmayı aç/kapat
const feedToggleKey = "r";
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === feedToggleKey && document.activeElement.tagName !== "INPUT") {
        autoFeedActive = !autoFeedActive;
        if (autoFeedActive) {
            autoFeedInterval = setInterval(sendFeed, 100);
            console.log("Otomatik yem atma: AÇIK");
        } else {
            clearInterval(autoFeedInterval);
            console.log("Otomatik yem atma: KAPALI");
        }
    }
});

(function() {
    'use strict';

    // Panel oluştur
    const panel = document.createElement("div");
    panel.id = "keyPanel";
    panel.style.position = "fixed";
    panel.style.right = "780px";  // 🔹 Şikayet butonunun yanına hizalama
    panel.style.bottom = "5px";  // 🔹 Alt kısma yakın
    panel.style.zIndex = "1";
    panel.style.background = "rgba(0,0,0,0.6)";
    panel.style.padding = "10px";
    panel.style.borderRadius = "10px";
    panel.style.display = "grid";
    panel.style.gridTemplateColumns = "repeat(5, 40px)";
    panel.style.gap = "5px";
    panel.style.fontFamily = "Arial";
    panel.style.color = "#1259ff";
    panel.style.textAlign = "center";
    panel.style.userSelect = "none";

    document.addEventListener("mouseup", () => {
        mouseBox.style.background = "rgba(50,50,50,0.7)";
    });

})();



(function() {
    'use strict';

    // Buton oluştur
    let btn = document.createElement("button");
    btn.innerText = "TURBO 🚀";
    btn.id = "ffaBtn";
    btn.style.position = "fixed";
    btn.style.left = "10";
    btn.style.bottom = "310px";
    btn.style.padding = "3px 3px";
    btn.style.background = "red";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "9999";
    btn.style.fontWeight = "bold";

    document.body.appendChild(btn);

    // Butona tıklanınca haykır gönder
    btn.addEventListener("click", () => {
        let chatInput = document.querySelector("#chat_textbox"); // sohbet kutusu
        if (chatInput) {
            chatInput.value = "ENAYİLER REKORA GİRDİ FFA-"; // mesaj
            let e = new KeyboardEvent("keydown", {keyCode: 13, which: 13}); // Enter
            chatInput.dispatchEvent(e);
        }
    });

    // F4 ile butonu aç/kapa
    document.addEventListener("keydown", function(e) {
        if (e.key === "F4") {
            let b = document.getElementById("ffaBtn");
            if (b.style.display === "none") {
                b.style.display = "block";
            } else {
                b.style.display = "none";
            }
        }
    });

})();


(function() {
    'use strict';

    const backgroundImageUrl = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80";

    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background: url("${backgroundImageUrl}") no-repeat center center fixed !important;
            background-size: cover !important;
            color: #ffffff !important;
            font-family: 'Segoe UI', sans-serif !important;
        }

        * {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.85) !important;
        }

        a, span, div, td, th {
            color: #ffffff !important;
            font-weight: bold !important;
        }

        table, .table, .content, .box, .panel, .container, .panel-body {
            background-color: rgba(0, 0, 0, 0.65) !important;
            border-radius: 10px;
            padding: 10px;
        }

        input, button, select, textarea {
            background-color: rgba(255, 255, 255, 0.15) !important;
            color: #ff0022 !important;
            border: 1px solid #ffffff !important;
            border-radius: 5px;
        }

        h1, h2, h3, h4 {
            color: #ffffff !important;
            font-weight: bold !important;
        }
    `;
    document.head.appendChild(style);
})();




// Sağdaki giriş kutularını F tuşu ile aç/kapat
const hesapKutusu = document.querySelector("#yesno_settings");

document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "6" && document.activeElement.tagName !== "INPUT") {
        if (hesapKutusu) {
            hesapKutusu.style.display = hesapKutusu.style.display === "none" ? "block" : "none";
        }
    }
});

// Sağdaki Hesap Yönetimi panelini F tuşuyla gizle/göster
document.addEventListener("keydown", function (e) {
    if (e.key.toLowerCase() === "6" && document.activeElement.tagName !== "INPUT") {
        const hesapPaneli = document.querySelector("#idUserContainer"); // Sağ kutunun dış kapsayıcısı
        if (hesapPaneli) {
            hesapPaneli.style.display = hesapPaneli.style.display === "none" ? "block" : "none";
        }
    }
});




/* --  Aşağıdaki sayıları ve benzeri şeyleri değiştirebilirsiniz. Sadece "4", "5" gibi değiştirin. Çentiklerin içine yazın. Yeni sayı yazacaksanız çentikleri silmeyin. --*/
//ESC Resim Değiştirme
$("h2").replaceWith('<h2 style="color: white;font-family:ubuntu;font-size:65px;">CRİS20</h2>');
//-------------------------------------------------
//Tab tuşuna bastığında oyun ayarları açılır
var oyunayarlari = "Tab";
//-------------------------------------------------
//Sürekli Oyna "3" tuşu sürekli oynayı açar. / "b" tuşu sürekli oyna butonunu gizle&göster
var süreklioyna = "3";
var süreklioynagizle = "b";
//-------------------------------------------------
//F4 Tuşu soldaki tüm butonları gizler.
var butongizleme = "F4";
//-------------------------------------------------
//İzlediğiniz oyuncunun ismi ~ skoru "6" / Oyunda iseniz ffa toplam skor gözükür. "7"
var izleyiciskor = "4";
var ffatoplamskor = "5";
//-------------------------------------------------
//Renk paneli "Capslock" Açar.
var renkpaneli = "CapsLock";
//-------------------------------------------------
//Respawn.Ffadan çık gir tuşu (R tuşu olarak değiştirildi)
var ffadançıkgir = '"'

//-------------------------------------------------
//Parça Saydamlığı (G tuşu)
var parças = "g";
// Saydamlık değerleri
const defaultAlpha = 0.6;
let currentAlpha = defaultAlpha;
(function () {
"use strict";
var meaningful_var_212 = document.getElementsByTagName("img");
var meaningful_var_243 = 0;
while (meaningful_var_243 < meaningful_var_212.length) {
if (meaningful_var_212[meaningful_var_243].src == "https://agarz.com/banner.png") {
meaningful_var_212[meaningful_var_243].src = resim;
}
meaningful_var_243 = meaningful_var_243 + 1;
}
$("title").text("AgarZ - çok oyunculu tarayıcı oyunu");
const meaningful_var_227 = {
cellLineWidth: 3,
virusLineWidth: 18,
cellBorderColor: "#fff",
virusFillColor: "#00B9E8",
virusStrokeColor: "#61DFFF"
};
const meaningful_var_78 = {
cellLineWidth: localStorage.getItem("cellLineWidth") || meaningful_var_227.cellLineWidth,
virusLineWidth: localStorage.getItem("virusLineWidth") || meaningful_var_227.virusLineWidth,
cellBorderColor: localStorage.getItem("cellBorderColor") || meaningful_var_227.cellBorderColor,
virusFillColor: localStorage.getItem("virusFillColor") || meaningful_var_227.virusFillColor,
virusStrokeColor: localStorage.getItem("virusStrokeColor") || meaningful_var_227.virusStrokeColor
};
cameraManager.onSendStart = function () {};
const meaningful_var_23 = document.createElement("div");
meaningful_var_23.id = "settingsPanel";
meaningful_var_23.style.position = "absolute";
meaningful_var_23.style.top = "41%";
meaningful_var_23.style.left = "13%";
meaningful_var_23.style.transform = "translateY(-50%)";
meaningful_var_23.style.backgroundColor = "black";
meaningful_var_23.style.color = "white";
meaningful_var_23.style.padding = "10px";
meaningful_var_23.style.border = "2px solid white";
meaningful_var_23.style.borderRadius = "15px";
meaningful_var_23.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
meaningful_var_23.style.display = "none";
meaningful_var_23.style.zIndex = "1";
meaningful_var_23.style.width = "250px";
document.body.appendChild(meaningful_var_23);
document.addEventListener("keydown", function (meaningful_var_237) {
if (meaningful_var_237.key === oyunayarlari) {
if (meaningful_var_23.style.display === "none") {
meaningful_var_23.style.display = "block";
} else {
meaningful_var_23.style.display = "none";
}
}
});
const meaningful_var_20 = document.createElement("button");
meaningful_var_20.style.textShadow = "rgb(255, 255, 255) 0px 0px 10px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 0px 30px";
meaningful_var_20.innerText = "Ayar Paneli-2";
meaningful_var_20.style.position = "absolute";
    meaningful_var_20.style.left = "89px";
meaningful_var_20.style.fontSize = "13px";
meaningful_var_20.style.transform = "scaleY(0.9)";
meaningful_var_20.style.transformOrigin = "center top";
meaningful_var_20.style.width = "97px";
meaningful_var_20.style.top = "53.3%";
meaningful_var_20.style.backgroundColor = "transparent";
meaningful_var_20.style.color = "white";
meaningful_var_20.style.border = "2px solid white";
meaningful_var_20.style.borderRadius = "15px";
meaningful_var_20.style.padding = "5px";
meaningful_var_20.style.cursor = "pointer";
meaningful_var_20.style.zIndex = "1";
document.body.appendChild(meaningful_var_20);
document.addEventListener("keydown", function (meaningful_var_276) {
if (meaningful_var_276.key === butongizleme) {
if (meaningful_var_20.style.display === "none") {
meaningful_var_20.style.display = "block";
} else {
meaningful_var_20.style.display = "none";
}
}
});
meaningful_var_20.addEventListener("mouseover", function () {
meaningful_var_20.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
});
meaningful_var_20.addEventListener("mouseout", function () {
meaningful_var_20.style.backgroundColor = "transparent";
});
meaningful_var_20.addEventListener("mouseout", function () {
meaningful_var_20.style.backgroundColor = "transparent";
});
meaningful_var_20.addEventListener("click", function () {
meaningful_var_23.style.display = meaningful_var_23.style.display === "none" ? "block" : "none";
});
const meaningful_var_90 = document.createElement("h3");
meaningful_var_90.innerText = "️Oyun Ayarları️";
meaningful_var_90.style.margin = "0 0 10px 0";
meaningful_var_90.style.fontFamily = "fantasy";
meaningful_var_90.style.color = "red";
meaningful_var_23.appendChild(meaningful_var_90);
function meaningful_var_76(meaningful_var_166, meaningful_var_195, meaningful_var_161) {
const meaningful_var_145 = document.createElement("div");
meaningful_var_145.style.display = "flex";
meaningful_var_145.style.alignItems = "center";
meaningful_var_145.style.marginBottom = "10px";
const meaningful_var_292 = document.createElement("label");
meaningful_var_292.innerText = meaningful_var_166;
meaningful_var_292.style.flex = "none";
meaningful_var_145.appendChild(meaningful_var_292);
const meaningful_var_136 = document.createElement("div");
meaningful_var_136.style.flex = "none";
meaningful_var_136.style.display = "flex";
meaningful_var_136.style.alignItems = "center";
meaningful_var_195.style.marginRight = "10px";
meaningful_var_136.appendChild(meaningful_var_195);
meaningful_var_136.appendChild(meaningful_var_161);
meaningful_var_145.appendChild(meaningful_var_136);
meaningful_var_23.appendChild(meaningful_var_145);
}
const meaningful_var_220 = document.createElement("input");
meaningful_var_220.type = "range";
meaningful_var_220.min = 1;
meaningful_var_220.max = 7;
meaningful_var_220.value = meaningful_var_78.cellLineWidth;
meaningful_var_220.style.width = "60%";
const meaningful_var_33 = document.createElement("span");
meaningful_var_33.innerText = meaningful_var_78.cellLineWidth;
meaningful_var_76("Kenar Kalınlıı: ", meaningful_var_220, meaningful_var_33);
const meaningful_var_98 = document.createElement("input");
meaningful_var_98.type = "range";
meaningful_var_98.min = 1;
meaningful_var_98.max = 25;
meaningful_var_98.value = meaningful_var_78.virusLineWidth;
meaningful_var_98.style.width = "60%";
const meaningful_var_112 = document.createElement("span");
meaningful_var_112.innerText = meaningful_var_78.virusLineWidth;
meaningful_var_76("Diken Kalınlıı: ", meaningful_var_98, meaningful_var_112);
const meaningful_var_267 = document.createElement("input");
meaningful_var_267.type = "color";
meaningful_var_267.value = meaningful_var_78.cellBorderColor;
meaningful_var_76("Oyuncu Kenar Rengi: ", meaningful_var_267, document.createElement("span"));
const meaningful_var_125 = document.createElement("input");
meaningful_var_125.type = "color";
meaningful_var_125.value = meaningful_var_78.virusFillColor;
meaningful_var_76("Diken İç Rengi: ", meaningful_var_125, document.createElement("span"));
const meaningful_var_65 = document.createElement("input");
meaningful_var_65.type = "color";
meaningful_var_65.value = meaningful_var_78.virusStrokeColor;
meaningful_var_76("Diken Kenar Rengi: ", meaningful_var_65, document.createElement("span"));
const meaningful_var_261 = document.createElement("button");
meaningful_var_261.innerText = "Renkleri Sıfırla";
meaningful_var_261.style.marginTop = "10px";
meaningful_var_261.style.width = "100%";
meaningful_var_261.style.padding = "5px";
meaningful_var_261.style.border = "2px solid white";
meaningful_var_261.style.borderRadius = "5px";
meaningful_var_261.style.backgroundColor = "red";
meaningful_var_261.style.color = "white";
meaningful_var_261.style.cursor = "pointer";
meaningful_var_23.appendChild(meaningful_var_261);
meaningful_var_261.addEventListener("click", function () {
meaningful_var_78.cellBorderColor = meaningful_var_227.cellBorderColor;
meaningful_var_78.virusFillColor = meaningful_var_227.virusFillColor;
meaningful_var_78.virusStrokeColor = meaningful_var_227.virusStrokeColor;
meaningful_var_267.value = meaningful_var_227.cellBorderColor;
meaningful_var_125.value = meaningful_var_227.virusFillColor;
meaningful_var_65.value = meaningful_var_227.virusStrokeColor;
localStorage.setItem("cellBorderColor", meaningful_var_227.cellBorderColor);
localStorage.setItem("virusFillColor", meaningful_var_227.virusFillColor);
localStorage.setItem("virusStrokeColor", meaningful_var_227.virusStrokeColor);
meaningful_var_217();
});
meaningful_var_220.addEventListener("input", function () {
meaningful_var_78.cellLineWidth = this.value;
meaningful_var_33.innerText = this.value;
localStorage.setItem("cellLineWidth", this.value);
meaningful_var_217();
});
meaningful_var_98.addEventListener("input", function () {
meaningful_var_78.virusLineWidth = this.value;
meaningful_var_112.innerText = this.value;
localStorage.setItem("virusLineWidth", this.value);
meaningful_var_217();
});
meaningful_var_267.addEventListener("input", function () {
meaningful_var_78.cellBorderColor = this.value;
localStorage.setItem("cellBorderColor", this.value);
meaningful_var_217();
});
meaningful_var_125.addEventListener("input", function () {
meaningful_var_78.virusFillColor = this.value;
localStorage.setItem("virusFillColor", this.value);
meaningful_var_217();
});
meaningful_var_65.addEventListener("input", function () {
meaningful_var_78.virusStrokeColor = this.value;
localStorage.setItem("virusStrokeColor", this.value);
meaningful_var_217();
});
function meaningful_var_217() {
if (typeof cellManager !== "undefined" && cellManager.updateAndDraw) {
cellManager.updateAndDraw = function () {
var meaningful_var_137 = [];
var meaningful_var_16 = fpsManager.getDeltaTime();
for (var meaningful_var_102 = 0; meaningful_var_102 < this.cellList.length; meaningful_var_102++) {
var meaningful_var_283 = this.cellList[meaningful_var_102];
if ((meaningful_var_283.cellType === 1 || meaningful_var_283.cellType === 3) && meaningful_var_16 > 100) {} else {
meaningful_var_283.updatePos();
meaningful_var_283.drawOneCell();
if (spectatorId === meaningful_var_283.pID || playerId === meaningful_var_283.pID) {
if (options.get("drawEdge")) {
meaningful_var_137.push(meaningful_var_283);
}
}
}
}
switch (renderMode) {
case 1:
ctx.strokeStyle = meaningful_var_78.cellBorderColor;
ctx.lineWidth = meaningful_var_78.cellLineWidth / cameraManager.scale;
for (var meaningful_var_148 = 0; meaningful_var_148 < meaningful_var_137.length; meaningful_var_148++) {
if (meaningful_var_137[meaningful_var_148].size_draw >= 0) {
ctx.beginPath();
ctx.arc(meaningful_var_137[meaningful_var_148].x_draw, meaningful_var_137[meaningful_var_148].y_draw, meaningful_var_137[meaningful_var_148].size_draw, 0, Math.PI * 2, false);
ctx.stroke();
}
}
break;
case 2:
for (var meaningful_var_74 = 0; meaningful_var_74 < meaningful_var_137.length; meaningful_var_74++) {
prog_cell.drawLine(meaningful_var_137[meaningful_var_74]);
}
break;
}
};
}
if (typeof window.Cell !== "undefined" && typeof window.Cell.prototype !== "undefined") {
const meaningful_var_81 = window.Cell.prototype.drawOneCell_virus_ctx;
window.Cell.prototype.drawOneCell_virus_ctx = function () {
if (options.get("transparentRender") === true) {
ctx.globalAlpha = 0.3;
} else {
ctx.globalAlpha = 0.1;
}
const meaningful_var_15 = fpsManager.getDeltaTime();
ctx.fillStyle = meaningful_var_78.virusFillColor;
ctx.strokeStyle = meaningful_var_78.virusStrokeColor;
if (options.get("simpleGreen") === true || meaningful_var_15 > 50) {
this.drawSimple(ctx);
ctx.fill();
ctx.globalAlpha = 1;
ctx.lineWidth = meaningful_var_78.virusLineWidth;
ctx.stroke();
} else {
this.movePoints();
this.drawFancy(ctx);
ctx.lineWidth = meaningful_var_78.virusLineWidth;
ctx.stroke();
ctx.fill();
}
};
}
}
meaningful_var_217();
(function () {
'use strict';
function meaningful_var_178() {
const meaningful_var_117 = window.drawTopMessage;
window.drawTopMessage = function (meaningful_var_24, meaningful_var_196) {
const meaningful_var_242 = 25;
meaningful_var_117.call(this, meaningful_var_24, meaningful_var_242);
};
}
window.addEventListener("load", function () {
setTimeout(meaningful_var_178, 1000);
});
function meaningful_var_8() {
const meaningful_var_22 = document.querySelector("a[onclick=\"return fb_popup_show();\"]");
if (meaningful_var_22) {
meaningful_var_22.parentNode.removeChild(meaningful_var_22);
}
}
function meaningful_var_99() {
const meaningful_var_225 = document.querySelectorAll("br");
meaningful_var_225.forEach(meaningful_var_170 => {
const meaningful_var_162 = meaningful_var_170.textContent.trim();
if (meaningful_var_162.includes("[") && meaningful_var_162.includes("]")) {
meaningful_var_170.parentNode.removeChild(meaningful_var_170);
}
});
}
meaningful_var_8();
meaningful_var_99();
const meaningful_var_48 = new MutationObserver(function (meaningful_var_226) {
meaningful_var_226.forEach(function (meaningful_var_13) {
meaningful_var_13.addedNodes.forEach(function (meaningful_var_258) {
if (meaningful_var_258.nodeType === 1 && meaningful_var_258.matches("a[onclick=\"return fb_popup_show();\"]")) {
meaningful_var_258.parentNode.removeChild(meaningful_var_258);
}
meaningful_var_99();
});
});
});
const meaningful_var_193 = {
childList: true,
subtree: true
};
meaningful_var_48.observe(document.body, meaningful_var_193);
})();
$("#instructions").hide();
document.querySelector("#settings > div:nth-child(2)").remove();
$("#oynamaBtn").hide();
$("#idUyari").remove();
$("#idBottomInfo").remove();
$("#mainform").remove();
$("#idYayin").remove();
$("#idGooglePlay").remove();
$("#idGooglePlay").remove();
$("#soundContainer").hide();
$("#FfagzleBtn").remove();
$("#bothackBtn").hide();
$("#showMessageOverlays").remove();
$("#showMessageDialog").remove();
$("#showMessageTxt").remove();
$("#showMessageOk").remove();
$("a.form-control.btn.btn-info").remove();
$("both").remove();
$("#idDiscord").remove();
const meaningful_var_214 = document.createElement("div");
meaningful_var_214.style.textAlign = "center";
meaningful_var_214.style.color = "white";
meaningful_var_214.style.fontSize = "18px";
meaningful_var_214.style.backgroundColor = "transparent";
meaningful_var_214.style.borderRadius = "25px";
meaningful_var_214.style.fontFamily = "fantasy";
meaningful_var_214.style.textShadow = "0 0 10px #ffffff, 0 0 20px #000000, 0 0 30px #ffffff";
document.getElementById("helloDialog").appendChild(meaningful_var_214);
const meaningful_var_167 = document.getElementById("yesno_settings");
const meaningful_var_43 = meaningful_var_167.getElementsByTagName("label");
chatManager.CHAT_FONT = "16px ubuntu";
chatManager.CHAT_FONTSIZE = 16;
chatManager.CHAT_FONT_BOLD = "16px ubuntu";
chatManager.CHAT_SOLID = "15px";
function meaningful_var_52(meaningful_var_68) {
var meaningful_var_218;
var meaningful_var_259;
meaningful_var_218 = document.getElementsByTagName("head")[0];
if (!meaningful_var_218) {
return;
}
meaningful_var_259 = document.createElement("style");
meaningful_var_259.type = "text/css";
meaningful_var_259.innerHTML = meaningful_var_68;
meaningful_var_218.appendChild(meaningful_var_259);
}
meaningful_var_52("#chatInputContainer {text-shadow:rgb(0, 0, 0) 0px 0px 10px, rgb(255 255 255) 0px 0px 9px, rgb(255 255 255) 0px 0px 0px;");
meaningful_var_52("button, html input[type=button], input[type=reset], input[type=submit] {border-radius: 25px");
meaningful_var_52("a:focus,a:hover {color:red;text-decoration:underline;");
meaningful_var_52("#idUserContainer { background-color:transparent;   border-radius: 14px;font-family: Ubuntu");
meaningful_var_52("#idSolMenu {background-color: transparent; border-radius: 14px;font-family: Ubuntu");
meaningful_var_52("#helloDialog { background-color:transparent;");
meaningful_var_52("#idTwitch {background-color: #00000000;top: 9%;border-radius: 14px;font-family: Ubuntu");
meaningful_var_52("#idDiscord {border-radius: 14px;font-family: Ubuntu;");
meaningful_var_52("body {color:white !important;}");
    meaningful_var_52("a {color: #ffffff;");
meaningful_var_52("#myTeam { width: 100%;");
meaningful_var_52("#finalLeaderboardDialog { background-color: #000000;");
meaningful_var_52("#enterPriceConfirmDialog {background-color: #000000;");
meaningful_var_52(".btn-primary { background-color: #000000;border-color: #000000;");
meaningful_var_52(".btn-warning {background-color: #000000;border-color: #000000;");
meaningful_var_52("#gamemode { width:35%; background-color: black;");
meaningful_var_52("#nick, #locationKnown #region { width: 65%;");
meaningful_var_52("#txtSkin {width: 100%;");
meaningful_var_52(".btn-warning.active, .btn-warning.focus, .btn-warning:active, .btn-warning:focus, .btn-warning:hover, .open>.dropdown-toggle.btn-warning {  background-color: #00c718;border-color: #ffffff;");
meaningful_var_52("#spectateBtn {background-color:rgb(0 0 0 / 71%);}&apos; #000000;border-color: #000000;color: white;width:100%;");
meaningful_var_52("#replayBtn {background-color:rgb(0 0 0 / 71%);}&apos; #000000;border-color: #000000;color: white;width:100%;");
meaningful_var_52(".myDialog {    background-color: #000000;");
meaningful_var_52(".isim-link {background-color: #404040;");
meaningful_var_52(".isim-popup {background-color: #000;border: 3px solid #fff;");
meaningful_var_52(".skin-popup {background-image: url(https://i.hizliresim.com/8w37a9t.jpg?_gl=1*1rzaquh*_ga*MTkxNjYzODg5MS4xNzIxNTkyMTQ0*_ga_M9ZRXYS2YN*czE3NTMzNzI0NzkkbzM0JGcxJHQxNzUzMzcyNDg4JGo1MSRsMCRoMA..);background-color: #000000;border: solid 3px;");
meaningful_var_52(".btn-primary.active, .btn-primary.focus, .btn-primary:active, .btn-primary:focus, .btn-primary:hover, .open>.dropdown-toggle.btn-primary {background-color: #ff0000;border-color:white;");
meaningful_var_52(".form-control {    height: 32px;color:white;border-radius:15px;background-color:transparent;");
meaningful_var_52(".checkbox input[type=checkbox], .checkbox-inline input[type=checkbox], .radio input[type=radio], .radio-inline input[type=radio] {accent-color: red;");
document.getElementById("playBtn").innerText = "𝐎𝐘𝐍𝐀";
document.getElementById("spectateBtn").innerText = "𝐈̇𝐙𝐋𝐄";
document.getElementById("replayBtn").innerText = "𝐓𝐄𝐊𝐑𝐀𝐑";

let showOnlyMySkin = false;

const isimFavori = document.getElementById("isimFavori");
const skinFavori = document.getElementById("skinFavori");
if (isimFavori && skinFavori) {
  isimFavori.value = "İsim Favori ";
  skinFavori.value = "  Skin Favori  ";
  skinFavori.style.left = "-4px";
  skinFavori.style.top = "-1px";
  isimFavori.style.top = "-1px";
  let container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "0px";
  container.style.top = "57%";
  container.style.transform = "scaleY(0.9)";
  container.style.transformOrigin = "center top";
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.justifyContent = "flex-start";
  container.style.gap = "10px";
  container.style.zIndex = "1";

  const button100K = document.createElement("button");
  button100K.style.top = "35px";
  button100K.style.left = "-180px";
  button100K.innerText = "100K";
  button100K.style.position = "relative";
  button100K.style.backgroundColor = "transparent";
  button100K.style.border = "2px solid white";
  button100K.style.color = "white";
  button100K.style.textShadow = "0 0 10px #ffffff, 0 0 0px #000000, 0 0 30px #ffffff";
  button100K.style.padding = "5px";
  button100K.style.cursor = "pointer";
  button100K.style.width = "60px";
  button100K.style.fontSize = "13px";
  button100K.style.borderRadius = "15px";
  button100K.style.transition = "background-color 0.3s";
  button100K.addEventListener("mouseover", () => {
    button100K.style.backgroundColor = "red";
  });
  button100K.addEventListener("mouseout", () => {
    button100K.style.backgroundColor = "transparent";
  });
  button100K.addEventListener("click", () => {
    const chatInput = document.getElementById("chat_textbox");
    if (chatInput) {
      chatInput.value = "-bt 100000";
      chatInput.focus();
      const enterEvent = new KeyboardEvent("keydown", { keyCode: 13, bubbles: true });
      chatInput.dispatchEvent(enterEvent);
      chatInput.value = "";
      button100K.blur();
    }
  });

  const button500K = document.createElement("button");
  button500K.innerText = "500K";
  button500K.style.top = "35px";
  button500K.style.left = "-180px";
  button500K.style.position = "relative";
  button500K.style.backgroundColor = "transparent";
  button500K.style.border = "2px solid white";
  button500K.style.color = "white";
  button500K.style.textShadow = "0 0 10px #ffffff, 0 0 0px #000000, 0 0 30px #ffffff";
  button500K.style.padding = "5px";
  button500K.style.cursor = "pointer";
  button500K.style.width = "60px";
  button500K.style.fontSize = "13px";
  button500K.style.borderRadius = "15px";
  button500K.style.transition = "background-color 0.3s";
  button500K.addEventListener("mouseover", () => {
    button500K.style.backgroundColor = "red";
  });
  button500K.addEventListener("mouseout", () => {
    button500K.style.backgroundColor = "transparent";
  });
  button500K.addEventListener("click", () => {
    const chatInput = document.getElementById("chat_textbox");
    if (chatInput) {
      chatInput.value = "-bt 500000";
      chatInput.focus();
      const enterEvent = new KeyboardEvent("keydown", { keyCode: 13, bubbles: true });
      chatInput.dispatchEvent(enterEvent);
      chatInput.value = "";
      button500K.blur();
    }
  });

  const skinShowButton = document.createElement("button");



  container.appendChild(isimFavori);
  container.appendChild(skinFavori);
  container.appendChild(button100K);
  container.appendChild(button500K);
  document.body.appendChild(container);

  const buttons = [isimFavori, skinFavori, button100K, button500K, skinShowButton];
  buttons.forEach(button => {
    button.style.position = "relative";
    button.style.backgroundColor = "transparent";
    button.style.border = "3px solid white";
    button.style.color = "white";
    button.style.textShadow = "11 11 101px #ffffff, 111 111 0px #000000, 0 0 30px #ffffff";
    button.style.padding = "5px";
    button.style.transform = "scaleY(0.9)";
    button.style.transformOrigin = "center top";
    button.style.cursor = "pointer";
    button.style.width = "80px";
    button.style.fontSize = "15px";
    button.style.borderRadius = "15px";
    button.style.zIndex = "1";
    button.style.transition = "background-color 0.3s";
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "red";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "transparent";
    });
  });

  let isVisible = true;
  function toggleVisibility() {
    isVisible = !isVisible;
    buttons.forEach(button => {
      button.style.display = isVisible ? "block" : "none";
    });
  }

  document.addEventListener("keydown", meaningful_var_40 => {
    if (meaningful_var_40.key === butongizleme) {
      toggleVisibility();
    }
  });
}

const originalDrawOneCellPlayer = window.Cell.prototype.drawOneCell_player_ctx;
window.Cell.prototype.drawOneCell_player_ctx = function () {
  if (options && options.get("transparentRender") == true) {
    ctx.globalAlpha = currentAlpha;
  } else {
    ctx.globalAlpha = currentAlpha;
  }
  if (this.tailDbg.length > 0) {
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 1;
    for (var meaningful_var_59 = 0; meaningful_var_59 < this.tailDbg.length; meaningful_var_59++) {
      ctx.strokeStyle = "rgba(255,255,255)";
      ctx.beginPath();
      ctx.arc(this.tailDbg[meaningful_var_59].x, this.tailDbg[meaningful_var_59].y, 5, 0, Math.PI * 2, false);
      ctx.stroke();
    }
  }
  if (this.nodeDbg.length > 0) {
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 1;
    for (var meaningful_var_59 = 0; meaningful_var_59 < this.nodeDbg.length; meaningful_var_59++) {
      ctx.beginPath();
      ctx.arc(this.nodeDbg[meaningful_var_59].x, this.nodeDbg[meaningful_var_59].y, 6, 0, Math.PI * 2, false);
      ctx.stroke();
    }
  }
  ctx.fillStyle = showOnlyMySkin && this.pID !== playerId ? "#000000" : this.color;
  this.drawSimple(ctx);
  ctx.fill();
  if (this.isDrawSkin() && (!showOnlyMySkin || this.pID === playerId)) {
    var meaningful_var_63 = "//cdn.agarz.com/" + this.skinName;
    if (!skins.hasOwnProperty(this.skinName)) {
      skins[this.skinName] = new Image();
      skins[this.skinName].src = meaningful_var_63;
      if (!skins[this.skinName].src.endsWith(".png")) {
        skins[this.skinName].src += ".png";
      }
      skins[this.skinName].onload = function () {
        skinsLoaded[this.skinName] = true;
      }.bind(this);
    }
    if (skinsLoaded.hasOwnProperty(this.skinName)) {
      var meaningful_var_250 = skins[this.skinName];
      ctx.save();
      ctx.clip();
      ctx.drawImage(meaningful_var_250, this.x_draw - this.size_draw, this.y_draw - this.size_draw, this.size_draw * 2, this.size_draw * 2);
      ctx.restore();
      var meaningful_var_251 = playerInfoList[this.pID];
      if (meaningful_var_251 != null && meaningful_var_251.userId == record_uid && record_uid != 0) {
        ctx.drawImage(crownImage, this.x_draw - this.size_draw * 0.5, this.y_draw - this.size_draw * 2, this.size_draw, this.size_draw);
      }
    }
  }
  ctx.globalAlpha = 1;
  if (this.pID == playerId) {
    ctx.fillStyle = meaningful_var_110;
  } else {
    var meaningful_var_278 = getLeaderboardExt(this.pID);
    if (meaningful_var_278 == null) {
      ctx.fillStyle = ColorManager.Current.Name_Default;
    } else if (meaningful_var_278.sameTeam == 1) {
      ctx.fillStyle = ColorManager.Current.Name_SameTeamOnList;
    } else if (meaningful_var_278.sameClan == 1) {
      ctx.fillStyle = ColorManager.Current.Name_SameClanOnList;
    }
  }
  if (this.isDrawName()) {
    ctx.font = this.getNameSize() + "px auto";
    this.calcNameWidth(ctx);
    var meaningful_var_264 = this.x_draw - this.nameWidth * 0.5;
    ctx.fillText(this.name, meaningful_var_264, this.y_draw);
  }
  if (this.isDrawClan()) {
    var meaningful_var_223 = this.getClanName();
    var meaningful_var_295 = Math.floor(this.getNameSize() * 0.5);
    ctx.font = meaningful_var_295 + "px Ubuntu";
    var meaningful_var_248 = ctx.measureText(meaningful_var_223).width;
    var meaningful_var_200 = this.x_draw - meaningful_var_248 * 0.5;
    ctx.fillText(meaningful_var_223, this.y_draw - meaningful_var_295 * 2);
  }
  if (this.isDrawScore() || meaningful_var_216 && cellManager.playerCellList && cellManager.playerCellList.length && cellManager.playerCellList.some(meaningful_var_126 => meaningful_var_126.pID === this.pID)) {
    ctx.font = this.getNameSize() + "px Ubuntu";
    var meaningful_var_147 = this.getScore();
    var meaningful_var_260 = meaningful_var_147.dotFormat();
    var meaningful_var_141 = this.x_draw - this.scoreWidth * 0.5;
    ctx.fillText(meaningful_var_260, this.y_draw + this.getNameSize());
  }
};
const style = document.createElement("style");
style.innerHTML = `
.form-group:nth-child(2) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 5px 0 !important;
  padding: 0 !important;
  width: 100% !important;
}
.form-group:nth-child(2) > br, .form-group:nth-child(2) > div {
  display: none !important;
}
#playBtn {
  margin: 0 0 5px 0 !important;
  padding: 5px !important;
  background-color: rgb(0 0 0 / 71%) !important;
  border: 2px solid #000000 !important;
  color: white !important;
  border-radius: 15px !important;
  cursor: pointer !important;
  text-align: center !important;
  font-family: Ubuntu !important;
  font-size: 14px !important;
  position: relative !important;
  z-index: 1 !important;
}
#spectateBtn, #replayBtn {
  margin: 0 !important;
  padding: 5px !important;
  background-color: rgb(0 0 0 / 71%) !important;
  border: 2px solid #000000 !important;
  color: white !important;
  border-radius: 15px !important;
  cursor: pointer !important;
  text-align: center !important;
  font-family: Ubuntu !important;
  font-size: 14px !important;
  position: relative !important;
  z-index: 1 !important;
}
.button-container {
  display: flex !important;
  justify-content: center !important;
  gap: 5px !important;
  margin: 0 !important;
}
.form-group:nth-child(1) {
  margin-bottom: 10px !important;
}
`;
document.head.appendChild(style);

const observer = new MutationObserver(() => {
  const formGroupButtons = document.querySelector(".form-group:nth-child(2)");
  const playBtn = document.getElementById("playBtn");
  const spectateBtn = document.getElementById("spectateBtn");
  const replayBtn = document.getElementById("replayBtn");

  if (formGroupButtons && playBtn && spectateBtn && replayBtn) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(spectateBtn);
    buttonContainer.appendChild(replayBtn);

    formGroupButtons.innerHTML = "";
    formGroupButtons.appendChild(playBtn);
    formGroupButtons.appendChild(buttonContainer);
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
var meaningful_var_289;
var meaningful_var_75;
var meaningful_var_171 = 50;
function meaningful_var_29(meaningful_var_182) {
switch (meaningful_var_182.keyCode) {}
if (meaningful_var_182.keyCode == 32) {
meaningful_var_87();
setTimeout(meaningful_var_87, meaningful_var_171 * 2);
}
function meaningful_var_87() {
$("body").trigger($.Event("keydown", {
keyCode: 32
}));
$("body").trigger($.Event("keyup", {
keyCode: 32
}));
}
}
})();
window.addEventListener("load", function () {
var meaningful_var_215 = document.querySelector("a[onclick=\"return fb_popup_show();\"]");
if (meaningful_var_215) {
meaningful_var_215.parentNode.removeChild(meaningful_var_215);
}
});
window.addEventListener("load", function () {
var meaningful_var_62 = document.getElementById("helloDialog");
if (!meaningful_var_62) {
meaningful_var_62 = document.createElement("div");
meaningful_var_62.id = "helloDialog";
document.body.appendChild(meaningful_var_62);
}
var meaningful_var_127 = document.createElement("button");
meaningful_var_127.textContent = "Kısa Yol Tuşları";
meaningful_var_127.style.marginBottom = "10px";
meaningful_var_127.style.fontSize = "15px";
meaningful_var_127.style.padding = "10px 17px";
meaningful_var_127.style.backgroundColor = "transparent";
meaningful_var_127.style.color = "white";
meaningful_var_127.style.border = "none";
meaningful_var_127.style.borderRadius = "10px";
meaningful_var_127.style.cursor = "pointer";
meaningful_var_127.style.position = "relative";
meaningful_var_127.style.left = "-280px";
meaningful_var_127.style.top = "-200px";
meaningful_var_127.style.transition = "background-color 0.3s, color 0.3s";
meaningful_var_127.style.backgroundImage = "url(https://i.hizliresim.com/hon719d.gif)";
meaningful_var_127.addEventListener("mouseover", function () {
meaningful_var_127.style.backgroundColor = "#333";
});
meaningful_var_127.addEventListener("mouseout", function () {
meaningful_var_127.style.backgroundColor = "transparent";
});
var meaningful_var_18 = document.createElement("div");
meaningful_var_18.style.position = "fixed";
meaningful_var_18.style.top = "50%";
meaningful_var_18.style.left = "50%";
meaningful_var_18.style.transform = "translate(-50%, -50%)";
meaningful_var_18.style.display = "none";
meaningful_var_18.style.zIndex = "1000";
meaningful_var_18.style.backgroundColor = "black";
meaningful_var_18.style.padding = "20px";
meaningful_var_18.style.border = "1px solid #ccc";
meaningful_var_18.style.borderRadius = "5px";
meaningful_var_18.style.width = "600px";
meaningful_var_18.style.color = "#333";
meaningful_var_18.style.fontFamily = "Arial, sans-serif";
meaningful_var_18.style.backgroundImage = "url(https://i.hizliresim.com/hon719d.gif)";
meaningful_var_18.innerHTML = "\n            <h2 style=\"margin-top: 0;color:white;font-family:fantasy;\">Kısa yol tuşları</h2>\n            <ul style=\"list-style-type: none; padding-left: 0;\">\n                <li style=\"background-color: #00000042; color: white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\"> [Yeniden Doğma] (é)</li>\n                <li style=\"background-color:#00000042; color: white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Parça Saydamlığı] (G) tuşu ile parçaları saydam yapabilirsin</li>\n                <li style=\"background-color:#00000042; color: white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Renk Paneli] açma&kapatma kısa yol tuşu (CapsLock)</li>\n                <li style=\"background-color:#00000042; color: white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Ayar Paneli-1 ve 2] açma&kapatma kısa yol tuşu (Tab)</li>\n                <li style=\"background-color:#00000042; color: white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Sürekli Oyna] açma&kapatma (3) butonu gizlemek için ise (B)</li>\n                <li style=\"background-color:#00000042; color:white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[FFA Skor Görme] oyundayken açma&kapama (7)</li>\n                <li style=\"background-color:#00000042; color:white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Oyuncu Skor Görme] izleyicideyken açma&kapatma (6) soldaki butondan chat kısmına paylaşabilirsiniz.</li>\n                <li style=\"background-color:#00000042; color:white;font-size: medium;font-family: 'Ubuntu'; padding: 8px; margin-bottom: 5px;\">[Tüm Butonları Gizleme] (F4) Yem Kapalı Açık R İle Görebilirsiniz Gizlemek İçin F Tuşuna Basmanız Yeterli Yardım İçin H Tuşu .</li>\n            </ul>\n        ";
meaningful_var_127.addEventListener("click", function () {
if (meaningful_var_18.style.display === "none") {
meaningful_var_18.style.display = "block";
} else {
meaningful_var_18.style.display = "none";
}
});
meaningful_var_62.appendChild(meaningful_var_127);
meaningful_var_62.appendChild(meaningful_var_18);
});
let pressingH = false;
let intervalID;
let buttonVisible = true;
const style = document.createElement("style");
style.innerHTML = "\n        #toggleBtn {\n            position: fixed;\n            top: 520px;\n            right: 10px;\n            padding: 10px 20px;\n            background-color: #ff0000;\n            color: white;\n            border: solid 2px;\n            border-radius: 5px;\n            cursor: pointer;\n            font-size: 13px;\n            transition: background-color 0.3s, transform 0.3s;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        }\n\n        #toggleBtn.on {\n            background-color: #034f15;\n            transform: scale(1.1);\n        }\n\n        #toggleBtn:hover {\n            background-color: #0056b3;\n        }\n\n        #toggleBtn.on:hover {\n            background-color: #218838;\n        }\n    ";
document.head.appendChild(style);
const toggleBtn = document.createElement("button");
toggleBtn.id = "toggleBtn";
toggleBtn.textContent = "Start";
document.body.appendChild(toggleBtn);
function togglePressingH() {
pressingH = !pressingH;
if (pressingH) {
toggleBtn.textContent = "Hızlı Doma Aktif!";
toggleBtn.classList.add("on");
pressButtonInfinitely();
} else {
toggleBtn.textContent = "Kapatıldı!";
toggleBtn.classList.remove("on");
clearInterval(intervalID);
}
}
function toggleButtonVisibility() {
buttonVisible = !buttonVisible;
toggleBtn.style.display = buttonVisible ? "block" : "none";
}
toggleBtn.addEventListener("click", togglePressingH);
document.addEventListener("keydown", function (meaningful_var_57) {
if (meaningful_var_57.key === süreklioyna && document.activeElement.tagName !== "INPUT") {
togglePressingH();
} else if (meaningful_var_57.key === süreklioynagizle && document.activeElement.tagName !== "INPUT") {
toggleButtonVisibility();
}
});
function pressButtonInfinitely() {
const meaningful_var_249 = document.querySelector("#playBtn");
if (meaningful_var_249) {
intervalID = setInterval(function () {
if (!pressingH) {
clearInterval(intervalID);
} else if (cellManager.playerCellList.length === 0) {
meaningful_var_249.click();
}
}, 10);
}
}
var buttonr = document.createElement("button");
buttonr.innerText = "Ping Paylaş";
buttonr.style.position = "absolute";
buttonr.style.left = "0";
buttonr.style.top = "53.3%";
buttonr.style.transform = "scaleY(0.9)";
buttonr.style.transformOrigin = "center top";
buttonr.style.backgroundColor = "transparent";
buttonr.style.border = "2px solid";
buttonr.style.borderColor = "white";
buttonr.style.color = "white";
buttonr.style.textShadow = "0 0 10px #ffffff, 0 0 0px #000000, 0 0 30px #ffffff";
buttonr.style.padding = "5px";
buttonr.style.cursor = "pointer";
buttonr.style.borderRadius = "15px";
buttonr.style.zIndex = "1";
document.body.appendChild(buttonr);
document.addEventListener("keydown", function (meaningful_var_272) {
if (meaningful_var_272.key === butongizleme) {
if (buttonr.style.display === "none") {
buttonr.style.display = "block";
} else {
buttonr.style.display = "none";
}
}
});
buttonr.addEventListener("mouseover", function () {
buttonr.style.backgroundColor = "rgba(255, 0, 0, 0.7";
});
buttonr.addEventListener("mouseout", function () {
buttonr.style.backgroundColor = "transparent";
});
buttonr.onclick = function () {
var meaningful_var_290 = getPing();
sendChat("Ping: " + meaningful_var_290 + " ms");
buttonr.blur();
};
function getPing() {
if (typeof ping_last !== "undefined") {
return ping_last;
} else if (typeof ping !== "undefined") {
return ping;
} else {
return "Bilinmiyor";
}
}
var ekle = $("#idUserDesktop");
var newLink = document.createElement("a");
newLink.innerHTML = "GOLD ALIM";
newLink.innerColor = "red";
newLink.setAttribute("id", "newLink");
newLink.setAttribute("target", "_blank");
newLink.setAttribute("href", "https://api.whatsapp.com/send/?phone=%2B9005342565320&text&type=phone_number&app_absent=0");
ekle.after(newLink);
var brElement1 = document.createElement("br");
ekle.after(brElement1);
var emrekage = document.createElement("a");
emrekage.innerHTML = "Skin Galerisi";
emrekage.innerColor = "red";
emrekage.setAttribute("id", "newLink");
emrekage.setAttribute("target", "_blank");
emrekage.setAttribute("href", "https://agarz.com/ru/skinler/harf-*/sayfa-0");
ekle.after(emrekage);
chatManager.CHAT_FONT = "16px ubuntu";
chatManager.CHAT_FONTSIZE = 16;
chatManager.CHAT_FONT_BOLD = "16px ubuntu";
chatManager.CHAT_SOLID = "15px";
var button1 = document.createElement("button");
button1.innerText = "Skor Paylaş";
button1.style.transform = "scaleY(0.9)";
button1.style.transformOrigin = "center top";
button1.style.position = "absolute";
button1.style.left = "0";
button1.style.transition = "all 0.3s ease";
button1.style.top = "41%";
button1.style.backgroundColor = "transparent";
button1.style.border = "2px solid";
button1.style.borderColor = "white";
button1.style.color = "white";
button1.style.textShadow = "0 0 10px #ffffff, 0 0 0px #000000, 0 0 30px #ffffff";
button1.style.padding = "5px";
button1.style.cursor = "pointer";
button1.style.borderRadius = "15px";
button1.style.zIndex = "1";
document.body.appendChild(button1);
button1.addEventListener("mouseover", function () {
button1.style.backgroundColor = "rgba(255, 0, 0, 0.7";
});
button1.addEventListener("mouseout", function () {
button1.style.backgroundColor = "transparent";
});
button1.onclick = function () {
sendChat("Skor: " + userScoreCurrent.dotFormat());
button.blur();
};
document.addEventListener("keydown", function (meaningful_var_246) {
if (meaningful_var_246.key === butongizleme) {
if (button1.style.display === "none") {
button1.style.display = "block";
} else {
button1.style.display = "none";
}
}
});
var h1Element = document.createElement("h1");
h1Element.style.fontFamily = "ubuntu";
h1Element.style.fontSize = "2.2em";
h1Element.style.color = "#ffffff";
h1Element.style.textShadow = "rgb(0, 0, 0) 0px 0px 20px, rgb(140, 50, 255) 1px 0px 20px, rgb(140, 50, 255) 0px 0px 11px";
h1Element.style.position = "absolute";
h1Element.style.left = "50%";
h1Element.style.top = "18%";
h1Element.style.transform = "translate(-50%, -50%)";
h1Element.style.zIndex = "1";
h1Element.style.display = "none";
document.body.appendChild(h1Element);
let spectatorName = "Unknown";
let spectatorScore = 0;
let isVisible = true;
function updateSpectatorInfo() {
if (playMode === PLAYMODE_SPECTATE) {
let meaningful_var_197 = 0;
cellManager.cellList.forEach(meaningful_var_238 => {
if (meaningful_var_238.pID === spectatorId) {
meaningful_var_197 += Math.floor(meaningful_var_238.size_new ** 2 / 100);
spectatorName = meaningful_var_238.name;
}
});
spectatorScore = meaningful_var_197;
h1Element.innerText = spectatorName + " ~ Skor: " + spectatorScore.dotFormat();
} else {
h1Element.innerText = "";
}
}
document.addEventListener("keydown", meaningful_var_229 => {
if (meaningful_var_229.key === izleyiciskor) {
isVisible = !isVisible;
h1Element.style.display = isVisible ? "block" : "none";
}
});
setInterval(updateSpectatorInfo, 1000);
var totalScoreElement = document.createElement("h1");
totalScoreElement.style.fontFamily = "Ubuntu";
totalScoreElement.style.fontSize = "1.3em";
totalScoreElement.style.color = "#ffffff";
totalScoreElement.style.textShadow = "rgb(0, 0, 0) 0px 0px 20px, rgb(140, 50, 255) 1px 0px 20px, rgb(140, 50, 255) 0px 0px 11px";
totalScoreElement.style.position = "absolute";
totalScoreElement.style.left = "50%";
totalScoreElement.style.top = "24%";
totalScoreElement.style.transform = "translate(-50%, -50%)";
totalScoreElement.style.zIndex = "1";
totalScoreElement.style.cursor = "pointer";
totalScoreElement.style.display = "none";
document.body.appendChild(totalScoreElement);
let totalScoreNew = 0;
function updateTotalScore() {
if (playMode === PLAYMODE_PLAY) {
let meaningful_var_183 = 0;
cellManager.cellList.forEach(meaningful_var_115 => {
meaningful_var_183 += Math.floor(meaningful_var_115.size_new ** 2 / 100);
});
totalScoreNew = meaningful_var_183;
totalScoreElement.innerText = "FFA Skor: " + meaningful_var_183.dotFormat();
} else {
totalScoreElement.innerText = "";
}
}
totalScoreElement.addEventListener("click", function () {
sendChat("FFA Skor: " + totalScoreNew.dotFormat());
});
document.addEventListener("keydown", meaningful_var_169 => {
if (meaningful_var_169.key === ffatoplamskor) {
if (totalScoreElement.style.display === "none") {
totalScoreElement.style.display = "block";
} else {
totalScoreElement.style.display = "none";
}
}
});
setInterval(updateTotalScore, 1000);
var button2 = document.createElement("button");
button2.innerText = "Oyuncu Skor Paylaş";
button2.style.position = "absolute";
button2.style.left = "5.4%";
button2.style.transform = "scaleY(0.9)";
button2.style.transformOrigin = "center top";
button2.style.top = "41%";
button2.style.backgroundColor = "transparent";
button2.style.border = "2px solid";
button2.style.borderColor = "white";
button2.style.color = "white";
button2.style.textShadow = "rgb(255, 255, 255) 0px 0px 10px, rgb(0, 0, 0) 0px 0px 20px, rgb(255, 255, 255) 0px 0px 30px";
button2.style.padding = "5px";
button2.style.cursor = "pointer";
button2.style.borderRadius = "15px";
button2.style.zIndex = "1";
document.body.appendChild(button2);
button2.addEventListener("mouseover", function () {
button2.style.backgroundColor = "rgba(255, 0, 0, 0.7";
});
button2.addEventListener("mouseout", function () {
button2.style.backgroundColor = "transparent";
});
button2.onclick = function () {
sendChat(" " + spectatorName + " ~ Skor: " + spectatorScore.dotFormat());
button2.blur();
};
document.addEventListener("keydown", function (meaningful_var_53) {
if (meaningful_var_53.key === butongizleme) {
if (button2.style.display === "none") {
button2.style.display = "block";
} else {
button2.style.display = "none";
}
}
});
var ekle = $("#chat_textbox");
var Nickdegistir = document.createElement("button");
Nickdegistir.innerText = "İsim Düzenle";
Nickdegistir.setAttribute("id", "Nickdegistir");
Nickdegistir.style.transform = "scaleY(0.9)";
Nickdegistir.style.transformOrigin = "center top";
ekle.after(Nickdegistir);
$("#Nickdegistir").click(() => {
let meaningful_var_132 = $("#nick");
let meaningful_var_234 = meaningful_var_132.val();
let meaningful_var_77 = prompt("Yeni isim giriniz.", meaningful_var_234);
if (meaningful_var_77 !== null && meaningful_var_77.trim() !== "") {
meaningful_var_132.val(meaningful_var_77);
onClickPlay();
setTimeout(() => {
onClickPlay();
}, 700);
}
});
Nickdegistir.addEventListener("mouseover", function () {
Nickdegistir.style.backgroundColor = "rgba(255, 0, 0, 0.7";
});
Nickdegistir.addEventListener("mouseout", function () {
Nickdegistir.style.backgroundColor = "transparent";
});
$("#Nickdegistir").css({
position: "fixed",
"font-size": "13px",
top: "47.2%",
left: "0",
transform: "translateY(-50%)",
color: "white",
background: "#0000",
border: "2px solid white",
"border-radius": "15px",
"text-shadow": "0px 0px 10px white, 0px 0px 20px black, 0px 0px 30px white",
padding: "5px",
"z-index": "1000",
cursor: "pointer"
});
document.addEventListener("keydown", function (meaningful_var_175) {
if (meaningful_var_175.key === butongizleme) {
if (Nickdegistir.style.display === "none") {
Nickdegistir.style.display = "block";
} else {
Nickdegistir.style.display = "none";
}
}
});
const modalContainer = document.createElement("div");
modalContainer.id = "colorManager";
modalContainer.className = "modal";
modalContainer.style.display = "none";
modalContainer.style.position = "fixed";
modalContainer.style.zIndex = "1";
modalContainer.style.paddingTop = "100px";
modalContainer.style.left = "0";
modalContainer.style.top = "0";
modalContainer.style.width = "100%";
modalContainer.style.height = "100%";
modalContainer.style.overflow = "auto";
modalContainer.style.backgroundColor = "#0000";
const modalContent = document.createElement("div");
modalContent.className = "modal-content";
modalContent.style.backgroundColor = "#000";
modalContent.style.margin = "auto";
modalContent.style.padding = "20px";
modalContent.style.backgroundImage = "url(https://i.hizliresim.com/8w37a9t.jpg?_gl=1*1rzaquh*_ga*MTkxNjYzODg5MS4xNzIxNTkyMTQ0*_ga_M9ZRXYS2YN*czE3NTMzNzI0NzkkbzM0JGcxJHQxNzUzMzcyNDg4JGo1MSRsMCRoMA..)";
modalContent.style.border = "3px solid #00dcff";
modalContent.style.width = "20%";
modalContent.style.overflow = "auto";
modalContent.style.maxHeight = "80%";
const closeButton = document.createElement("span");
closeButton.className = "close";
closeButton.id = "colormanager-close";
closeButton.innerHTML = "&times";
closeButton.style.color = "red";
closeButton.style.float = "right";
closeButton.style.fontSize = "28px";
closeButton.style.fontWeight = "bold";
closeButton.addEventListener("click", () => {
modalContainer.style.display = "none";
});
var button3 = document.createElement("button");
button3.innerText = "Renk Panel";
button3.style.position = "absolute";
button3.style.left = "0";
button3.style.top = "49.3%";
button3.style.transform = "scaleY(0.9)";
button3.style.transformOrigin = "center top";
button3.style.backgroundColor = "transparent";
button3.style.border = "2px solid";
button3.style.borderColor = "white";
button3.style.color = "white";
button3.style.textShadow = "0 0 10px #ffffff, 0 0 20px #000000, 0 0 30px #ffffff";
button3.style.padding = "5px";
button3.style.cursor = "pointer";
button3.style.borderRadius = "15px";
button3.style.zIndex = "1";
document.body.appendChild(button3);
button3.addEventListener("mouseover", function () {
button3.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
});
button3.addEventListener("mouseout", function () {
button3.style.backgroundColor = "transparent";
});
button3.onclick = function () {
modalContainer.style.display = "block";
};
document.addEventListener("keydown", function (meaningful_var_89) {
if (meaningful_var_89.key === butongizleme) {
if (button3.style.display === "none") {
button3.style.display = "block";
} else {
button3.style.display = "none";
}
}
});
const defaultColor = {
AdminInfo: "#FF0000",
Admin_MenuIcon: "#FF0000",
AutoBig: "#FFF000",
Border: "white",
CellBorder: "white",
ChatA: "#18D8EB",
ChatC: "#00CCCC",
ChatElse: "#FFFFFF",
ChatT: "#CCCC00",
Chat_AccNo: "#DDDDDD",
Chat_BG: "#000000",
Chat_Default: "#FF0000",
Chat_Guest: "#FFFFFF",
Clear: "#000",
EnterPrice: "#FF0000",
Gold: "white",
GoldToPrize: "#FFF000",
GoldToPrize: "#ff0000",
Grid: "black",
LastSeconds: "#ffffff",
Leaderboard_Background: "#000000",
Leaderboard_Default: "#FFFFFF",
Leaderboard_LastWinner: "#ff00e6",
Leaderboard_Player: "#FFAAAA",
Leaderboard_Spectator: "#FF0000",
LockMouse: "#FFFFFF",
Map_BG: "#DDDDDD",
Map_Dst: "#FF0000",
Map_Me: "#FFFFFF",
MovePoint: "#FFFFFF",
Name_Default: "#FFFFFF",
Name_SameClanOnList: "#00FF00",
Name_SameClanOnMap: "#0000FF",
Name_SameTeamOnList: "#DDDD00",
Name_SameTeamOnMap: "#DDDD00",
Position: "#AAAAAA",
Prize: "",
RedVirus_Line: "#DD0000",
RoomInfo: "#FFFFFF",
Score: "#FFFFFF",
TimerAndRecord_BG: "black",
TimerAndRecord_Record: "#FFFF00",
TimerAndRecord_Timer: "white",
TopMessage: "#00eaff",
TouchMark: "#5596FF",
UserID: "red",
Virus_Line: "#00DD00"
};
const storedColorData = JSON.parse(localStorage.getItem("colorData"));
let colorData = storedColorData || {
Gold: "#ffffff",
Prize: "#0900ff",
GoldToPrize: "#72ff00",
AutoBig: "#FFF000",
TopMessage: "#614df3",
ChatT: "#ff9900",
ChatC: "#00CCCC",
ChatA: "#00CCFF",
ChatElse: "#ffffff",
Leaderboard_Background: "#000000",
Leaderboard_LastWinner: "#FE3939",
Name_Default: "#ffffff",
Name_SameTeamOnList: "#c5ff00",
Name_SameTeamOnMap: "#00e3ff",
Name_SameClanOnList: "#00ffff",
Name_SameClanOnMap: "#0000FF",
Admin_MenuIcon: "#FF0000",
RoomInfo: "#FFFFFF",
Clear: "#111111",
TimerAndRecord_BG: "#DDDDDD",
TimerAndRecord_Timer: "#000000",
TimerAndRecord_Record: "#E1FF00",
Score: "#ffffff",
Map_BG: "#DDDDDD",
Map_Dst: "#FF0000",
Map_Me: "#00ff21",
Position: "#AAAAAA",
Chat_Default: "#FF0000",
Border: "#0020ff",
Grid: "#070707",
EnterPrice: "#FF0000",
UserID: "#ff0000",
LockMouse: "#FFFFFF",
Leaderboard_Spectator: "#3aff00",
Leaderboard_Player: "#FFAAAA",
Leaderboard_Default: "#FFFFFF",
Chat_AccNo: "#ff0000",
LastSeconds: "#9e32ff",
AdminInfo: "#FF0000",
MovePoint: "#FFFFFF",
Chat_Guest: "#c500ff",
Virus_Line: "#00f2ff",
RedVirus_Line: "#DD0000",
TouchMark: "#5596FF",
CellBorder: "#ffffff",
Chat_BG: "#111111"
};
const colorManagerTurkishContent = {
Gold: "Gold",
Prize: "Ödül",
GoldToPrize: "Ödüle Ekleniyor Rengi",
AutoBig: "Otomatik Büyütme Rengi",
TopMessage: "Üst Yazılar",
ChatT: "Team Chat Rengi",
ChatC: "Klan Rengi",
ChatA: "Haykır Rengi",
ChatElse: "Genel Chat Rengi",
Leaderboard_Background: "Sıralama Arkaplanı",
Leaderboard_LastWinner: "Sıralama Son Kazanan",
Name_Default: "Nick Renkleri",
Name_SameTeamOnList: "Team Liste Rengi",
Name_SameTeamOnMap: "Team Maptaki Renkleri",
Name_SameClanOnList: "Klan Liste Rengi",
Name_SameClanOnMap: "Klandakilerin Rengi",
Admin_MenuIcon: "Admin Menu İcon",
RoomInfo: "Sağ Alt Oda Bilgileri",
Clear: "Map Rengi",
TimerAndRecord_BG: "üst Oda Arkaplan",
TimerAndRecord_Timer: "Oda Süre",
TimerAndRecord_Record: "Oda Rekor",
Score: "Sol üst skor rengi",
Map_BG: "Sol üst Map Rengi",
Map_Dst: "",
Map_Me: "Maptaki Rengin",
Position: "Sol üst Paylaş rengi",
Chat_Default: "Chat Rengi",
Border: "Kenar izgileri",
Grid: "Map izgileri",
EnterPrice: "",
UserID: "Hesap No Rengi",
LockMouse: "T Sabitleme",
Leaderboard_Spectator: "İzleyici Sıralama Rengi",
Leaderboard_Player: "Sıralama Oyuncu Rengi",
Leaderboard_Default: "Sıralama Default",
Chat_AccNo: "Sohbet Hesap Kodları",
LastSeconds: "Son Saniyeler",
AdminInfo: "Admin İnfo",
MovePoint: "",
Chat_Guest: "Genel Chat Rengi",
Virus_Line: "",
RedVirus_Line: "",
TouchMark: "",
CellBorder: "Parça Kenar çizgisi",
Chat_BG: "Sohbet Arkaplanı"
};
const hiddenKeys = ["Chat_BG", "Virus_Line", "GoldToPsrize", "CellBorder", "Leaderboard_Player", "Leaderboard_Spectator", "Score", "Name_SameTeamOnMap", "Name_SameClanOnMap", "Map_Dst", "GoldToPrize", "Chat_Guest", "Map_BG", "AutoBig", "Map_Me", "AdminInfo", "LastSeconds", "Admin_MenuIcon", "EnterPrice", "Position", "RedVirus_Line", "TouchMark", "MovePoint", "Chat_Default"];
function resetColorManager() {
colorData = defaultColor;
for (const meaningful_var_184 in colorData) {
if (colorData.hasOwnProperty(meaningful_var_184)) {
const meaningful_var_49 = "color-" + meaningful_var_184;
const meaningful_var_273 = document.getElementById(meaningful_var_49);
if (meaningful_var_273) {
meaningful_var_273.value = colorData[meaningful_var_184];
}
}
}
localStorage.setItem("colorData", JSON.stringify(colorData));
ColorManager.Current = colorData;
}
ColorManager.Current = colorData;
const header = document.createElement("h3");
header.innerHTML = " ";
const colorInputsContainer = document.createElement("div");
const warningLabel = document.createElement("label");
warningLabel.innerText = "CapsLock tuuna basarak bu pencereyi açıp kapatabilirsin";
colorInputsContainer.appendChild(warningLabel);
var button = document.createElement("button");
button.innerText = "Sıfırla";
button.style.padding = "5px";
button.style.borderRadius = "15px";
button.style.color = "red";
colorInputsContainer.appendChild(button);
button.onclick = function () {
if (confirm("Sıfırlamak istediine emin misin?")) {
resetColorManager();
}
};
colorInputsContainer.appendChild(document.createElement("br"));
for (const key in colorData) {
if (colorData.hasOwnProperty(key) && !hiddenKeys.includes(key)) {
const color = colorData[key];
const inputId = "color-" + key;
const label = document.createElement("label");
label.innerText = key + ": ";
if (colorManagerTurkishContent[key] != "") {
label.innerText = colorManagerTurkishContent[key] + ": ";
}
const input = document.createElement("input");
input.type = "color";
input.id = inputId;
input.value = color;
input.addEventListener("input", meaningful_var_45 => {
colorData[key] = meaningful_var_45.target.value;
ColorManager.Current = colorData;
localStorage.setItem("colorData", JSON.stringify(colorData));
console.log("Renk \"" + key + "\" deitirildi: " + meaningful_var_45.target.value);
});
label.style.margin = "5px";
input.style.margin = "5px";
colorInputsContainer.appendChild(label);
colorInputsContainer.appendChild(input);
colorInputsContainer.appendChild(document.createElement("br"));
}
}
modalContent.appendChild(closeButton);
modalContent.appendChild(header);
modalContent.appendChild(colorInputsContainer);
modalContainer.appendChild(modalContent);
document.body.appendChild(modalContainer);
(function () {
'use strict';
if (storedColorData) {
for (const meaningful_var_274 in storedColorData) {
if (colorData.hasOwnProperty(meaningful_var_274)) {
colorData[meaningful_var_274] = storedColorData[meaningful_var_274];
const meaningful_var_54 = "color-" + meaningful_var_274;
const meaningful_var_275 = document.getElementById("color-" + meaningful_var_274);
if (meaningful_var_275) {
meaningful_var_275.value = colorData[meaningful_var_274];
}
}
}
} else {
for (const meaningful_var_95 in colorData) {
if (colorData.hasOwnProperty(meaningful_var_95)) {
const meaningful_var_199 = "color-" + meaningful_var_95;
const meaningful_var_192 = document.getElementById(meaningful_var_199);
if (meaningful_var_192) {
meaningful_var_192.value = colorData[meaningful_var_95];
}
}
}
}
window.addEventListener("keydown", function (meaningful_var_19) {
if (meaningful_var_19.key === renkpaneli) {
if (modalContainer.style.display === "block") {
modalContainer.style.display = "none";
} else {
modalContainer.style.display = "block";
}
}
});
})();

function adjustInputSize() {
const meaningful_var_224 = document.getElementById("txtSkin");
if (meaningful_var_224) {
meaningful_var_224.style.width = "100%";
meaningful_var_224.style.height = "32px";
meaningful_var_224.style.padding = "10px";
meaningful_var_224.style.fontSize = "16px";
} else {
setTimeout(adjustInputSize, 50);
}
}
adjustInputSize();
$(() => {
$(document).on('keydown', function(e) {
if (e.key === ffadançıkgir && !$(e.target).is("input")) {
wsClose();
setTimeout(() => {
onClickPlay();
}, 400);
}
});
});
// G tuşuna basınca saydamlığı değiştirme
document.addEventListener('keydown', function(event) {
if (event.key === parças && document.activeElement.tagName !== 'INPUT') {
currentAlpha = (currentAlpha === 0.05) ? defaultAlpha : 0.05;
console.log('Global Alpha:', currentAlpha);
}
});
(function () {
'use strict';
let meaningful_var_239 = ColorManager.Current;
let meaningful_var_79 = 0;
let meaningful_var_51 = [{
r: 255,
g: 0,
b: 0
}, {
r: 255,
g: 127,
b: 80
}, {
r: 0,
g: 0,
b: 255
}, {
r: 144,
g: 238,
b: 144
}, {
r: 75,
g: 0,
b: 130
}, {
r: 240,
g: 128,
b: 128
}, {
r: 148,
g: 0,
b: 211
}, {
r: 255,
g: 182,
b: 193
}, {
r: 135,
g: 206,
b: 250
}, {
r: 34,
g: 139,
b: 34
}, {
r: 255,
g: 250,
b: 205
}, {
r: 210,
g: 105,
b: 30
}, {
r: 128,
g: 0,
b: 128
}, {
r: 255,
g: 245,
b: 238
}, {
r: 70,
g: 130,
b: 180
}, {
r: 255,
g: 215,
b: 0
}, {
r: 255,
g: 69,
b: 0
}, {
r: 60,
g: 179,
b: 113
}, {
r: 106,
g: 90,
b: 205
}, {
r: 173,
g: 255,
b: 47
}, {
r: 250,
g: 128,
b: 114
}, {
r: 72,
g: 61,
b: 139
}, {
r: 255,
g: 20,
b: 147
}, {
r: 0,
g: 191,
b: 255
}, {
r: 255,
g: 165,
b: 0
}, {
r: 255,
g: 228,
b: 225
}, {
r: 30,
g: 144,
b: 255
}, {
r: 255,
g: 69,
b: 0
}, {
r: 218,
g: 112,
b: 214
}, {
r: 0,
g: 255,
b: 127
}, {
r: 255,
g: 99,
b: 71
}];
let meaningful_var_41 = 45;
let meaningful_var_176 = 0;
let meaningful_var_291 = meaningful_var_51[0];
let meaningful_var_58 = meaningful_var_51[1];
function meaningful_var_185(meaningful_var_180, meaningful_var_1, meaningful_var_281) {
let meaningful_var_240 = Math.round(meaningful_var_180.r + meaningful_var_281 * (meaningful_var_1.r - meaningful_var_180.r));
let meaningful_var_5 = Math.round(meaningful_var_180.g + meaningful_var_281 * (meaningful_var_1.g - meaningful_var_180.g));
let meaningful_var_2 = Math.round(meaningful_var_180.b + meaningful_var_281 * (meaningful_var_1.b - meaningful_var_180.b));
return "rgb(" + meaningful_var_240 + ", " + meaningful_var_5 + ", " + meaningful_var_2 + ")";
}
function meaningful_var_153() {
let meaningful_var_46 = meaningful_var_176 / meaningful_var_41;
let meaningful_var_14 = meaningful_var_185(meaningful_var_291, meaningful_var_58, meaningful_var_46);
meaningful_var_239.LastSeconds = meaningful_var_14;
meaningful_var_239.Leaderboard_LastWinner = meaningful_var_14;
meaningful_var_176++;
if (meaningful_var_176 > meaningful_var_41) {
meaningful_var_176 = 0;
meaningful_var_79 = (meaningful_var_79 + 1) % meaningful_var_51.length;
meaningful_var_291 = meaningful_var_58;
meaningful_var_58 = meaningful_var_51[(meaningful_var_79 + 1) % meaningful_var_51.length];
}
}
setInterval(meaningful_var_153, 20);
const meaningful_var_155 = document.getElementById("gamemode");
if (!meaningful_var_155) {
return;
}
const meaningful_var_32 = document.createElement("input");
meaningful_var_32.type = "text";
meaningful_var_32.placeholder = "FFA Giriniz!";
meaningful_var_32.style.position = "absolute";
meaningful_var_32.style.left = "93px";
meaningful_var_32.style.top = "45.3%";
meaningful_var_32.style.transform = "scaleY(0.9)";
meaningful_var_32.style.transformOrigin = "center top";
meaningful_var_32.style.backgroundColor = "black";
meaningful_var_32.style.border = "2px solid";
meaningful_var_32.style.borderColor = "white";
meaningful_var_32.style.color = "red";
meaningful_var_32.style.textShadow = "none";
meaningful_var_32.style.padding = "5px";
meaningful_var_32.style.borderRadius = "15px";
meaningful_var_32.style.zIndex = "1";
meaningful_var_32.style.width = "143px";
document.body.appendChild(meaningful_var_32);
document.addEventListener("keydown", function (meaningful_var_135) {
if (meaningful_var_135.key === butongizleme) {
if (meaningful_var_32.style.display === "none") {
meaningful_var_32.style.display = "block";
} else {
meaningful_var_32.style.display = "none";
}
}
});
let meaningful_var_114;
meaningful_var_32.addEventListener("input", function () {
clearTimeout(meaningful_var_114);
meaningful_var_114 = setTimeout(function () {
var meaningful_var_202 = meaningful_var_32.value.trim();
if (!meaningful_var_202) {
return;
}
var meaningful_var_160 = Array.from(meaningful_var_155.options);
var meaningful_var_206 = meaningful_var_160.find(meaningful_var_60 => meaningful_var_60.text.includes(meaningful_var_202));
if (meaningful_var_206) {
meaningful_var_155.value = meaningful_var_206.value;
var meaningful_var_277 = new Event("change", {
bubbles: true
});
meaningful_var_155.dispatchEvent(meaningful_var_277);
skipPopupOnClose = true;
reconnect = 1;
cellManager.drawMode = 0;
cellManager.clearRecord();
userScoreCurrent = 0;
userScoreMax = 0;
setSpectator = 1;
document.getElementById(meaningful_var_206.id).selected = true;
setserver4(meaningful_var_206.value);
} else {
console.log("FFA number " + meaningful_var_202 + " not found");
}
}, 500);
});
const meaningful_var_109 = document.getElementById("gamemode").options;
const meaningful_var_30 = Array.from(meaningful_var_109).map(meaningful_var_150 => ({
id: meaningful_var_150.id,
value: meaningful_var_150.value,
text: meaningful_var_150.text
}));
const meaningful_var_12 = meaningful_var_30.filter(meaningful_var_128 => !["VS-CFFA", "Etkinlik-1", "VS-FFA", "VS-GSZ", "GSZ-1"].includes(meaningful_var_128.text));
const meaningful_var_233 = JSON.stringify(meaningful_var_12);
const meaningful_var_69 = document.getElementById("idTwitch");
const meaningful_var_257 = document.createElement("div");
meaningful_var_257.style.display = "grid";
meaningful_var_257.style.gridTemplateColumns = "repeat(4, 1fr)";
meaningful_var_257.style.gap = "10px";
meaningful_var_257.style.left = "-20px";
meaningful_var_257.style.top = "-45px";
meaningful_var_257.style.position = "relative";
const meaningful_var_203 = document.createElement("button");
meaningful_var_203.textContent = "Gizle&Göster";
meaningful_var_203.style.backgroundColor = "black";
meaningful_var_203.style.color = "white";
meaningful_var_203.style.border = "2px solid white";
meaningful_var_203.style.padding = "8px 16px";
meaningful_var_203.style.textAlign = "center";
meaningful_var_203.style.fontSize = "12px";
meaningful_var_203.style.margin = "4px";
meaningful_var_203.style.cursor = "pointer";
meaningful_var_203.style.borderRadius = "6px";
meaningful_var_203.style.transition = "all 0.3s ease";
meaningful_var_203.style.position = "relative";
meaningful_var_203.style.top = "-3px";
meaningful_var_203.style.right = "-95%";
meaningful_var_203.onmouseover = () => {
meaningful_var_203.style.backgroundColor = "red";
meaningful_var_203.style.border = "2px solid black";
meaningful_var_203.style.color = "white";
meaningful_var_203.style.transform = "scale(1.1)";
meaningful_var_203.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
};
meaningful_var_203.onmouseout = () => {
meaningful_var_203.style.backgroundColor = "black";
meaningful_var_203.style.border = "2px solid white";
meaningful_var_203.style.color = "white";
meaningful_var_203.style.transform = "scale(1)";
meaningful_var_203.style.boxShadow = "none";
};
meaningful_var_203.onclick = () => {
if (meaningful_var_257.style.display === "none") {
meaningful_var_257.style.display = "grid";
} else {
meaningful_var_257.style.display = "none";
}
};
meaningful_var_69.appendChild(meaningful_var_203);
meaningful_var_69.appendChild(meaningful_var_257);
JSON.parse(meaningful_var_233).forEach(meaningful_var_55 => {
const meaningful_var_34 = document.createElement("span");
meaningful_var_34.innerHTML += meaningful_var_55.text + "&nbsp;&nbsp;";
meaningful_var_34.setAttribute("data-value", meaningful_var_55.value);
meaningful_var_34.style.cursor = "pointer";
meaningful_var_34.style.color = "white";
meaningful_var_34.style.fontFamily = "ubuntu";
meaningful_var_34.style.fontStyle = "italic";
meaningful_var_34.style.textShadow = "rgb(0, 0, 0) 0px 0px 10px, rgb(255 255 255) 1px 0px 20px, rgb(255 255 255) 0px 0px 0px";
meaningful_var_34.style.textAlign = "center";
meaningful_var_34.addEventListener("click", () => {
skipPopupOnClose = true;
reconnect = 1;
cellManager.drawMode = 0;
cellManager.clearRecord();
userScoreCurrent = 0;
userScoreMax = 0;
setSpectator = 1;
document.getElementById(meaningful_var_55.id).selected = true;
setserver4(meaningful_var_55.value);
});
meaningful_var_257.appendChild(meaningful_var_34);
});
let meaningful_var_216 = false;
const meaningful_var_152 = document.getElementById("yesno_settings");
const meaningful_var_123 = document.createElement("label");
const meaningful_var_296 = document.createElement("input");
meaningful_var_296.type = "checkbox";
meaningful_var_123.appendChild(meaningful_var_296);
meaningful_var_123.appendChild(document.createTextNode("Kendi Skorumu Göster"));
meaningful_var_152.appendChild(meaningful_var_123);
meaningful_var_296.addEventListener("change", () => {
meaningful_var_216 = meaningful_var_296.checked;
});
var meaningful_var_230 = false;
var meaningful_var_157 = false;
var meaningful_var_191 = localStorage.getItem("overlayColor") || "#FFFFFF";
var meaningful_var_188 = localStorage.getItem("borderColor") || "#616161";
var meaningful_var_110 = localStorage.getItem("playerNameColor") || "#FFFFFF";
function meaningful_var_146() {
var meaningful_var_6 = Math.round(leftPos) + 10;
var meaningful_var_293 = Math.round(topPos) + 10;
var meaningful_var_37 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var meaningful_var_47 = (Math.round(rightPos) - 10 - meaningful_var_6) / 5;
var meaningful_var_86 = (Math.round(bottomPos) - 10 - meaningful_var_293) / 5;
var meaningful_var_231 = 0;
ctx.save();
ctx.beginPath();
ctx.globalAlpha = 0.1;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = meaningful_var_47 * 0.6 + "px auto";
ctx.fillStyle = meaningful_var_191;
for (; meaningful_var_231 < 5; meaningful_var_231++) {
for (var meaningful_var_80 = 0; meaningful_var_80 < 5; meaningful_var_80++) {
ctx.fillText(meaningful_var_37[meaningful_var_231] + (meaningful_var_80 + 1), meaningful_var_6 + meaningful_var_47 * meaningful_var_80 + meaningful_var_47 / 2, meaningful_var_293 + meaningful_var_86 * meaningful_var_231 + meaningful_var_86 / 2);
}
}
ctx.globalAlpha = 1;
ctx.lineWidth = 100;
ctx.strokeStyle = meaningful_var_157 ? "#2E2E2E" : meaningful_var_188;
for (meaningful_var_231 = 0; meaningful_var_231 < 5; meaningful_var_231++) {
for (var meaningful_var_111 = 0; meaningful_var_111 < 5; meaningful_var_111++) {
ctx.strokeRect(meaningful_var_6 + meaningful_var_47 * meaningful_var_111, meaningful_var_293 + meaningful_var_86 * meaningful_var_231, meaningful_var_47, meaningful_var_86);
}
}
ctx.stroke();
ctx.restore();
}
function meaningful_var_84() {
if (!meaningful_var_230) {
return;
}
meaningful_var_146();
}
window.drawOverlay = meaningful_var_84;
var meaningful_var_219 = drawBorder;
drawBorder = function () {
meaningful_var_219();
meaningful_var_84();
};
var meaningful_var_31 = document.createElement("div");
meaningful_var_31.id = "settingsPanel";
meaningful_var_31.style.position = "absolute";
meaningful_var_31.style.top = "97%";
meaningful_var_31.style.left = "50%";
meaningful_var_31.style.transform = "translateY(-50%)";
meaningful_var_31.style.backgroundColor = "black";
meaningful_var_31.style.color = "white";
meaningful_var_31.style.padding = "5px";
meaningful_var_31.style.border = "2px solid white";
meaningful_var_31.style.borderRadius = "15px";
meaningful_var_31.style.display = "none";
meaningful_var_31.style.zIndex = "1";
document.body.appendChild(meaningful_var_31);
document.addEventListener("keydown", function (meaningful_var_207) {
if (meaningful_var_207.key === oyunayarlari) {
if (meaningful_var_31.style.display === "none") {
meaningful_var_31.style.display = "block";
} else {
meaningful_var_31.style.display = "none";
}
}
});
var meaningful_var_35 = document.createElement("button");
meaningful_var_35.innerText = "Ayar Paneli-1";
meaningful_var_35.style.position = "absolute";
meaningful_var_35.style.textShadow = "rgb(255, 255, 255) 0px 0px 10px, rgb(0, 0, 0) 0px 0px 0px, rgb(255, 255, 255) 0px 0px 30px";
meaningful_var_35.style.left = "90px";
meaningful_var_35.style.top = "49.3%";
meaningful_var_35.style.transform = "scaleY(0.9)";
meaningful_var_35.style.transformOrigin = "center top";
meaningful_var_35.style.backgroundColor = "transparent";
meaningful_var_35.style.border = "2px solid white";
meaningful_var_35.style.color = "white";
meaningful_var_35.style.textShadow = "0 0 10px #ffffff, 0 0 0px #000000, 0 0 30px #ffffff";
meaningful_var_35.style.padding = "5px";
meaningful_var_35.style.cursor = "pointer";
meaningful_var_35.style.borderRadius = "15px";
meaningful_var_35.style.zIndex = "1";
document.body.appendChild(meaningful_var_35);
document.addEventListener("keydown", function (meaningful_var_294) {
if (meaningful_var_294.key === butongizleme) {
if (meaningful_var_35.style.display === "none") {
meaningful_var_35.style.display = "block";
} else {
meaningful_var_35.style.display = "none";
}
}
});
meaningful_var_35.addEventListener("mouseover", function () {
meaningful_var_35.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
});
meaningful_var_35.addEventListener("mouseout", function () {
meaningful_var_35.style.backgroundColor = "transparent";
});
meaningful_var_35.addEventListener("mouseout", function () {
meaningful_var_35.style.backgroundColor = "transparent";
});
meaningful_var_35.addEventListener("click", function () {
meaningful_var_31.style.display = meaningful_var_31.style.display === "none" ? "block" : "none";
});
var meaningful_var_235 = document.createElement("button");
meaningful_var_235.innerHTML = "Izgara Aç/Kapa";
meaningful_var_235.style.color = "white";
meaningful_var_235.style.backgroundColor = "#28a745";
meaningful_var_235.style.border = "none";
meaningful_var_235.style.borderRadius = "3px";
meaningful_var_235.style.padding = "5px 10px";
meaningful_var_235.style.cursor = "pointer";
meaningful_var_235.style.fontSize = "12px";
meaningful_var_235.style.marginTop = "5px";
meaningful_var_235.style.transition = "background-color 0.3s, transform 0.2s";
meaningful_var_235.addEventListener("mouseover", function () {
meaningful_var_235.style.backgroundColor = "#218838";
});
meaningful_var_235.addEventListener("mouseout", function () {
meaningful_var_235.style.backgroundColor = "#28a745";
});
meaningful_var_235.addEventListener("mousedown", function () {
meaningful_var_235.style.transform = "scale(0.95)";
});
meaningful_var_235.addEventListener("mouseup", function () {
meaningful_var_235.style.transform = "scale(1)";
});
meaningful_var_31.appendChild(meaningful_var_235);
meaningful_var_235.addEventListener("click", function () {
meaningful_var_230 = !meaningful_var_230;
if (meaningful_var_230) {
meaningful_var_84();
} else {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBorder();
}
});
var meaningful_var_181 = document.createElement("label");
meaningful_var_181.innerText = "Izgara Rengi: ";
meaningful_var_31.appendChild(meaningful_var_181);
var meaningful_var_67 = document.createElement("input");
meaningful_var_67.type = "color";
meaningful_var_67.value = meaningful_var_191;
meaningful_var_67.title = "Overlay Color";
meaningful_var_67.style.width = "40px";
meaningful_var_67.style.height = "25px";
meaningful_var_31.appendChild(meaningful_var_67);
var meaningful_var_198 = document.createElement("label");
meaningful_var_198.innerText = "izgi Rengi: ";
meaningful_var_31.appendChild(meaningful_var_198);
var meaningful_var_241 = document.createElement("input");
meaningful_var_241.type = "color";
meaningful_var_241.value = meaningful_var_188;
meaningful_var_241.title = "Border Color";
meaningful_var_241.style.width = "40px";
meaningful_var_241.style.height = "25px";
meaningful_var_31.appendChild(meaningful_var_241);
var meaningful_var_70 = document.createElement("label");
meaningful_var_70.innerText = "Nick Rengim: ";
meaningful_var_31.appendChild(meaningful_var_70);
var meaningful_var_4 = document.createElement("input");
meaningful_var_4.type = "color";
meaningful_var_4.value = meaningful_var_110;
meaningful_var_4.title = "Player Name Color";
meaningful_var_4.style.width = "40px";
meaningful_var_4.style.height = "25px";
meaningful_var_31.appendChild(meaningful_var_4);
meaningful_var_67.addEventListener("input", function () {
meaningful_var_191 = meaningful_var_67.value;
localStorage.setItem("overlayColor", meaningful_var_191);
if (meaningful_var_230) {
meaningful_var_84();
}
});
meaningful_var_241.addEventListener("input", function () {
meaningful_var_188 = meaningful_var_241.value;
localStorage.setItem("borderColor", meaningful_var_188);
if (meaningful_var_230) {
meaningful_var_84();
}
});
meaningful_var_4.addEventListener("input", function () {
meaningful_var_110 = meaningful_var_4.value;
localStorage.setItem("playerNameColor", meaningful_var_110);
meaningful_var_88();
});
function meaningful_var_88() {
for (var meaningful_var_282 of cellManager.playerCellList) {
if (meaningful_var_282.pID == playerId) {
meaningful_var_282.drawNameColor = meaningful_var_110;
}
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBorder();
meaningful_var_84();
}
var meaningful_var_263 = window.Cell.prototype.drawOneCell_player_ctx;
window.Cell.prototype.drawOneCell_player_ctx = function () {
// Saydamlık kontrolü (G tuşu özelliği)
if (options && options.get("transparentRender") == true) {
ctx.globalAlpha = currentAlpha;
} else {
ctx.globalAlpha = currentAlpha;
}
if (this.tailDbg.length > 0) {
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 1;
for (var meaningful_var_59 = 0; meaningful_var_59 < this.tailDbg.length; meaningful_var_59++) {
ctx.strokeStyle = "rgba(255,255,255)";
ctx.beginPath();
ctx.arc(this.tailDbg[meaningful_var_59].x, this.tailDbg[meaningful_var_59].y, 5, 0, Math.PI * 2, false);
ctx.stroke();
}
}
if (this.nodeDbg.length > 0) {
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 1;
for (var meaningful_var_59 = 0; meaningful_var_59 < this.nodeDbg.length; meaningful_var_59++) {
ctx.beginPath();
ctx.arc(this.nodeDbg[meaningful_var_59].x, this.nodeDbg[meaningful_var_59].y, 6, 0, Math.PI * 2, false);
ctx.stroke();
}
}
ctx.fillStyle = this.color;
this.drawSimple(ctx);
ctx.fill();
if (this.isDrawSkin()) {
var meaningful_var_63 = "//cdn.agarz.com/" + this.skinName;
if (!skins.hasOwnProperty(this.skinName)) {
skins[this.skinName] = new Image();
skins[this.skinName].src = meaningful_var_63;
if (!skins[this.skinName].src.endsWith(".png")) {
skins[this.skinName].src += ".png";
}
skins[this.skinName].onload = function () {
skinsLoaded[this.skinName] = true;
}.bind(this);
}
if (skinsLoaded.hasOwnProperty(this.skinName)) {
var meaningful_var_250 = skins[this.skinName];
ctx.save();
ctx.clip();
ctx.drawImage(meaningful_var_250, this.x_draw - this.size_draw, this.y_draw - this.size_draw, this.size_draw * 2, this.size_draw * 2);
ctx.restore();
var meaningful_var_251 = playerInfoList[this.pID];
if (meaningful_var_251 != null && meaningful_var_251.userId == record_uid && record_uid != 0) {
ctx.drawImage(crownImage, this.x_draw - this.size_draw * 0.5, this.y_draw - this.size_draw * 2, this.size_draw, this.size_draw);
}
}
}
ctx.globalAlpha = 1;
if (this.pID == playerId) {
ctx.fillStyle = meaningful_var_110;
} else {
var meaningful_var_278 = getLeaderboardExt(this.pID);
if (meaningful_var_278 == null) {
ctx.fillStyle = ColorManager.Current.Name_Default;
} else if (meaningful_var_278.sameTeam == 1) {
ctx.fillStyle = ColorManager.Current.Name_SameTeamOnList;
} else if (meaningful_var_278.sameClan == 1) {
ctx.fillStyle = ColorManager.Current.Name_SameClanOnList;
}
}
if (this.isDrawName()) {
ctx.font = this.getNameSize() + "px auto";
this.calcNameWidth(ctx);
var meaningful_var_264 = this.x_draw - this.nameWidth * 0.5;
ctx.fillText(this.name, meaningful_var_264, this.y_draw);
}
if (this.isDrawClan()) {
var meaningful_var_223 = this.getClanName();
var meaningful_var_295 = Math.floor(this.getNameSize() * 0.5);
ctx.font = meaningful_var_295 + "px Ubuntu";
var meaningful_var_248 = ctx.measureText(meaningful_var_223).width;
var meaningful_var_200 = this.x_draw - meaningful_var_248 * 0.5;
ctx.fillText(meaningful_var_223, meaningful_var_200, this.y_draw - meaningful_var_295 * 2);
}
if (this.isDrawScore() || meaningful_var_216 && cellManager.playerCellList && cellManager.playerCellList.length && cellManager.playerCellList.some(meaningful_var_126 => meaningful_var_126.pID === this.pID)) {
ctx.font = this.getNameSize() + "px Ubuntu";
var meaningful_var_147 = this.getScore();
var meaningful_var_260 = meaningful_var_147.dotFormat();
var meaningful_var_141 = this.x_draw - this.scoreWidth * 0.5;
ctx.fillText(meaningful_var_260, meaningful_var_141, this.y_draw + this.getNameSize());
}
};
var meaningful_var_129 = document.createElement("button");
meaningful_var_129.innerHTML = "Renkleri Sıfırla";
meaningful_var_129.style.color = "white";
meaningful_var_129.style.top = "-4px";
meaningful_var_129.style.position = "relative";
meaningful_var_129.style.right = "-2px";
meaningful_var_129.style.backgroundColor = "#dc3545";
meaningful_var_129.style.border = "none";
meaningful_var_129.style.borderRadius = "3px";
meaningful_var_129.style.padding = "5px 10px";
meaningful_var_129.style.cursor = "pointer";
meaningful_var_129.style.fontSize = "12px";
meaningful_var_129.style.marginTop = "5px";
meaningful_var_129.style.transition = "background-color 0.3s, transform 0.2s";
meaningful_var_129.addEventListener("mouseover", function () {
meaningful_var_129.style.backgroundColor = "#c82333";
});
meaningful_var_129.addEventListener("mouseout", function () {
meaningful_var_129.style.backgroundColor = "#dc3545";
});
meaningful_var_129.addEventListener("mousedown", function () {
meaningful_var_129.style.transform = "scale(0.95)";
});
meaningful_var_129.addEventListener("mouseup", function () {
meaningful_var_129.style.transform = "scale(1)";
});
meaningful_var_31.appendChild(meaningful_var_129);
meaningful_var_129.addEventListener("click", function () {
meaningful_var_191 = "#FFFFFF";
meaningful_var_188 = "#616161";
meaningful_var_110 = "#FFFFFF";
meaningful_var_67.value = meaningful_var_191;
meaningful_var_241.value = meaningful_var_188;
meaningful_var_4.value = meaningful_var_110;
localStorage.setItem("overlayColor", meaningful_var_191);
localStorage.setItem("borderColor", meaningful_var_188);
localStorage.setItem("playerNameColor", meaningful_var_110);
if (meaningful_var_230) {
meaningful_var_84();
}
meaningful_var_88();
});
})();
document.querySelector("div[style=\"position: fixed;bottom: 510px;right: -323px;z-index: 1042;\"]").remove();
$("#address").remove();

const accountList = JSON.parse(localStorage.getItem("accounts")) || [];

// Sağdaki hesap ekleme formu
const accountFormContainer = document.createElement("div");
accountFormContainer.style.position = "fixed";
accountFormContainer.style.right = "10px";
accountFormContainer.style.top = "50%";
accountFormContainer.style.transform = "translateY(-50%)";
accountFormContainer.style.backgroundColor = "#1a1a1a";
accountFormContainer.style.color = "#ffffff";
accountFormContainer.style.padding = "15px";
accountFormContainer.style.border = "2px solid #00ffcc";
accountFormContainer.style.borderRadius = "10px";
accountFormContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
accountFormContainer.style.zIndex = "1000";
accountFormContainer.style.fontFamily = "Arial, sans-serif";
accountFormContainer.style.width = "250px";

const accountForm = document.createElement("form");
accountForm.style.display = "flex";
accountForm.style.flexDirection = "column";
accountForm.style.gap = "10px";

const codeInput = document.createElement("input");
codeInput.type = "text";
codeInput.placeholder = "Kod";
codeInput.style.padding = "5px";
codeInput.style.border = "1px solid #00ffcc";
codeInput.style.borderRadius = "5px";
codeInput.style.backgroundColor = "#2a2a2a";
codeInput.style.color = "#ffffff";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "E-posta";
emailInput.style.padding = "5px";
emailInput.style.border = "1px solid #00ffcc";
emailInput.style.borderRadius = "5px";
emailInput.style.backgroundColor = "#2a2a2a";
emailInput.style.color = "#ffffff";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Şifre";
passwordInput.style.padding = "5px";
passwordInput.style.border = "1px solid #00ffcc";
passwordInput.style.borderRadius = "5px";
passwordInput.style.backgroundColor = "#2a2a2a";
passwordInput.style.color = "#ffffff";

const saveButton = document.createElement("button");
saveButton.type = "submit";
saveButton.innerText = "Kaydet";
saveButton.style.padding = "5px 10px";
saveButton.style.backgroundColor = "#00cc66";
saveButton.style.border = "none";
saveButton.style.borderRadius = "5px";
saveButton.style.color = "#ffffff";
saveButton.style.cursor = "pointer";
saveButton.style.transition = "background-color 0.3s";
saveButton.onmouseover = () => { saveButton.style.backgroundColor = "#00994d"; };
saveButton.onmouseout = () => { saveButton.style.backgroundColor = "#00cc66"; };


const deleteCodeInput = document.createElement("input");
deleteCodeInput.type = "text";
deleteCodeInput.placeholder = "Silinecek Hesabın Kodu";
deleteCodeInput.style.padding = "5px";
deleteCodeInput.style.border = "1px solid #00ffcc";
deleteCodeInput.style.borderRadius = "5px";
deleteCodeInput.style.backgroundColor = "#2a2a2a";
deleteCodeInput.style.color = "#ffffff";

const deleteButton = document.createElement("button");
deleteButton.innerText = "x HESAP SİL";
deleteButton.style.padding = "5px 10px";
deleteButton.style.backgroundColor = "#ff3333";
deleteButton.style.border = "none";
deleteButton.style.borderRadius = "5px";
deleteButton.style.color = "#ffffff";
deleteButton.style.cursor = "pointer";
deleteButton.style.transition = "background-color 0.3s";
deleteButton.onmouseover = () => { deleteButton.style.backgroundColor = "#cc0000"; };
deleteButton.onmouseout = () => { deleteButton.style.backgroundColor = "#ff3333"; };

accountForm.appendChild(codeInput);
accountForm.appendChild(emailInput);
accountForm.appendChild(passwordInput);
accountForm.appendChild(saveButton);
accountForm.appendChild(addAccountButton);
accountForm.appendChild(deleteCodeInput);
accountForm.appendChild(deleteButton);
accountFormContainer.appendChild(accountForm);
document.body.appendChild(accountFormContainer);

// Soldaki hesap kodları (idSolMenu içindeki linklerden sonra, div olmadan)
function updateAccountList() {
  const idSolMenu = document.getElementById("idSolMenu");
  if (idSolMenu) {
    const lastLink = idSolMenu.querySelector("a:last-child");
    if (lastLink) {
      accountList.forEach(account => {
        const accountCode = document.createElement("span");
        accountCode.style.display = "block"; // Alt alta sıralamak için
        accountCode.style.padding = "5px 0";
        accountCode.style.cursor = "pointer";
        accountCode.style.color = "#00ffcc"; // Menü ile uyumlu renk
        accountCode.textContent = account.code;
        accountCode.onclick = () => {
          $("#email").val(account.email);
          $("#password").val(account.password);
          user_login();
        };
        lastLink.parentNode.insertBefore(accountCode, lastLink.nextSibling);
      });
    }
  }
  localStorage.setItem("accounts", JSON.stringify(accountList));
}

// idSolMenu içindeki linklerden sonra ekleme (bir kez çalışsın, tekrar eklemesin)
if (!document.querySelector("#idSolMenu .account-code")) {
  updateAccountList();
}

// Sol taraftaki numaralar için
const leftNumbers = document.createElement("div");
leftNumbers.style.position = "fixed";
leftNumbers.style.left = "10px";
leftNumbers.style.top = "50%";
leftNumbers.style.transform = "translateY(-50%)";
leftNumbers.style.color = "#00ffcc";
leftNumbers.style.fontFamily = "Arial, sans-serif";
leftNumbers.style.fontSize = "16px";
document.body.appendChild(leftNumbers);

// Kaydet butonuna tıklama işlevi
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (codeInput.value && emailInput.value && passwordInput.value) {
    const newAccount = {
      code: codeInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };
    accountList.push(newAccount);
    // Mevcut kodları temizleyip yeniden oluştur
    const idSolMenu = document.getElementById("idSolMenu");
    if (idSolMenu) {
      const accountCodes = idSolMenu.querySelectorAll("span.account-code");
      accountCodes.forEach(code => code.remove());
    }
    updateAccountList();
    codeInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
});

// Hesap silme işlevi
deleteButton.addEventListener("click", () => {
  const deleteCode = deleteCodeInput.value;
  const index = accountList.findIndex(acc => acc.code === deleteCode);
  if (index !== -1) {
    accountList.splice(index, 1);
    // Mevcut kodları temizleyip yeniden oluştur
    const idSolMenu = document.getElementById("idSolMenu");
    if (idSolMenu) {
      const accountCodes = idSolMenu.querySelectorAll("span.account-code");
      accountCodes.forEach(code => code.remove());
    }
    updateAccountList();
  }
  deleteCodeInput.value = "";
});
