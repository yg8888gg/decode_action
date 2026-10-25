//Sun Oct 25 2026 12:49:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  var _0x381305 = window.authConfig && window.authConfig.tips ? window.authConfig.tips : "您的域名未授权播放";
  function _0x545af1() {
    {
      window.isUnauthorized = true;
      try {
        window.stop();
      } catch (_0xfc8316) {}
      var _0x11a1a6 = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>未授权</title><style>body{background:#000;color:#fff;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:sans-serif;}</style></head><body><h3>" + _0x381305 + "</h3></body></html>";
      document.documentElement ? document.documentElement.innerHTML = _0x11a1a6 : document.write(_0x11a1a6);
    }
  }
  if (window.self === window.top) {
    _0x545af1();
    return;
  }
  function _0x2f04b0(_0x9498dd) {
    fetch("api/auth.php?host=" + encodeURIComponent(_0x9498dd)).then(_0x5c22ec => _0x5c22ec.json()).then(_0x4c11bc => {
      !_0x4c11bc.allowed && _0x545af1();
    }).catch(_0x559c28 => {
      console.error("Auth check failed:", _0x559c28);
    });
  }
  var _0x512350 = document.referrer,
    _0x2fb7fb = "";
  if (window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0) {
    {
      var _0xa00225 = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
      try {
        _0x2fb7fb = new URL(_0xa00225).hostname;
      } catch (_0x4ebe59) {
        _0x2fb7fb = _0xa00225.split("//")[1].split("/")[0].split(":")[0];
      }
    }
  } else {
    if (_0x512350) try {
      _0x2fb7fb = new URL(_0x512350).hostname;
    } catch (_0x29ae65) {
      _0x2fb7fb = _0x512350.split("//")[1].split("/")[0].split(":")[0];
    }
  }
  _0x2fb7fb ? _0x2f04b0(_0x2fb7fb) : _0x545af1();
})();