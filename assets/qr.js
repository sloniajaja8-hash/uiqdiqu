var error = document.querySelector('.error')
document.querySelectorAll('.action').forEach((_0x296273, _0x207928) => {
  _0x296273.addEventListener('click', () => {
    _0x207928 === 0 ? startScanner() : showQRCode()
  })
})
document.addEventListener('click', function (_0x2e5cc2) {
  _0x2e5cc2.target.classList.contains('close') &&
    (document.querySelector('.error')?.classList.remove('error_open'),
    document.querySelector('.scanner_view')?.remove(),
    document.querySelector('.qr_view')?.remove())
})
function showQRCode() {
  const _0x4508d6 = document.createElement('div')
  _0x4508d6.className = 'qr_view'
  _0x4508d6.innerHTML = `
    <div style="display: flex; flex-direction: column; min-height: 100vh; max-width: 100%; overflow-x: hidden;">
      <div style="flex: 1; padding: 16px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;">
                <div style="align-self: flex-start; margin-bottom: 16px; width: 100%;">
                  <div style="display: flex; align-items: center; cursor: pointer; width: fit-content;" class="close">
                    <img src="svg/ab004_arrow_left.svg" style="height: 24px; width: 24px; margin-right: 8px;">
                    <span style="color: #024b97; font-weight: 600; font-size: 20px; font-family: 'Poppins', sans-serif;">Kod QR</span>
                  </div>
                </div>
                <h1 style="width: 100%; text-align: center; font-size: 30px; font-weight: 700; color: #000; letter-spacing: -0.5px; margin: 0 0 16px 0; padding: 0;">Kod QR</h1>
                <p class="main_title" style="text-align: center; width: 100%;">Pokaż kod QR osobie, której dokument sprawdzasz</p>
        <p class="description" style="text-align: center; width: 100%; margin-bottom: 24px;">Gdy ta osoba zeskanuje lub wpisze kod, jej dane pojawią się na Twoim telefonie</p>
        
        <div id="qrcode" style="margin: 0 auto 20px; width: 100%; display: flex; justify-content: center;"></div>
        <p class="code_number" id="code-number" style="text-align: center; width: 100%; margin-bottom: 24px;"></p>

        <div style="width: 100%; max-width: 300px; margin: 0 auto 10px;">
          <div class="timer_bar" style="width: 100%;"><div id="time-bar" style="width: 100%;"></div></div>
          <p class="expires_text" id="expires-text" style="text-align: center; width: 100%;"></p>
        </div>

        <div style="margin-top: 30px; width: 100%; display: flex; justify-content: center; align-items: center; gap: 20px; padding: 0 20px; box-sizing: border-box;">
          <div style="display: flex; flex-direction: column; align-items: center;">
            <img src="https://i.imgur.com/1XtqkbK.gif" alt="Godło" style="height: 40px; width: auto; margin-bottom: 4px;">
            <p style="color: #000; font-size: 12px; font-weight: 300; margin: 0; text-align: center; line-height: 1.2;">Rzeczpospolita<br>Polska</p>
          </div>
          <img src="https://i.imgur.com/PF3ac4i.gif" alt="Godło" style="height: 40px; width: auto;">
        </div>
      </div>

      <!-- Bottom Menu Bar -->
      <div class="bottom_bar">
        <div class="bottom_bar_grid">
          <div class="bottom_element_grid" onclick="window.location.href='home.html'">
            <div class="bottom_element_image home"></div>
            <p class="bottom_element_text">Pulpit</p>
          </div>
          <div class="bottom_element_grid" onclick="window.location.href='documents.html'">
            <div class="bottom_element_image documents"></div>
            <p class="bottom_element_text">Dokumenty</p>
          </div>
          <div class="bottom_element_grid" onclick="window.location.href='services.html'">
            <div class="bottom_element_image services"></div>
            <p class="bottom_element_text">Usługi</p>
          </div>
          <div class="bottom_element_grid active" onclick="window.location.href='qr.html'">
            <div class="bottom_element_image qr active"></div>
            <p class="bottom_element_text active">Kod QR</p>
          </div>
          <div class="bottom_element_grid" onclick="window.location.href='more.html'">
            <div class="bottom_element_image more"></div>
            <p class="bottom_element_text">Więcej</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add event listener to make sure the close button works
  setTimeout(() => {
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        document.querySelector('.qr_view')?.remove();
      });
    });
  }, 100);

  // Add navigation to menu items
  setTimeout(() => {
    document.querySelectorAll('.bottom_element_grid').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        window.location.href = page;
      });
    });
  }, 100);
    // Add event listener to make sure the close button works
    setTimeout(() => {
        const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                document.querySelector('.qr_view')?.remove();
            });
        });
    }, 100);
  document.body.appendChild(_0x4508d6)
  const _0x62768b = Math.floor(100000 + Math.random() * 900000)
  document.getElementById('code-number').textContent = _0x62768b
  const _0x24e6af = new QRCode(document.getElementById('qrcode'), {
    text: _0x62768b.toString(),
    width: 200,
    height: 200,
  })
  let _0x4010a5 = 180
  const _0x3e4f5b = document.getElementById('time-bar'),
    _0x3276ae = document.getElementById('expires-text'),
    _0x5ea654 = setInterval(() => {
      _0x4010a5--
      _0x3e4f5b.style.width = (_0x4010a5 / 180) * 100 + '%'
      const _0x5991e1 = Math.floor(_0x4010a5 / 60),
        _0x17de2d = _0x4010a5 % 60
      _0x3276ae.innerHTML =
        'Kod wygaśnie za: <strong>' +
        _0x5991e1 +
        ' min ' +
        (_0x17de2d < 10 ? '0' + _0x17de2d : _0x17de2d) +
        ' sek</strong>.'
      _0x4010a5 <= 0 &&
        (clearInterval(_0x5ea654), (_0x3276ae.innerHTML = 'Kod wygasł.'))
    }, 1000)
}
function startScanner() {
  const _0x1eb920 = document.createElement('div')
  _0x1eb920.className = 'scanner_view'
  _0x1eb920.innerHTML =
    '\n        <div class="scanner_header">\n            <p class="back_link" onclick="document.querySelector(\'.scanner_view\')?.remove()">&lt; Kod QR          <p class="main_title">Kod QR</p>\n            <p class="help_icon">?</p>\n        </div>\n        <p class="description">Umieść kod QR w ramce, aby go zeskanować.</p>\n\n        <div class="scanner_wrapper">\n            <div class="warning">\n                <img src="https://i.imgur.com/hKfaBvw.png" style="width: 20px; vertical-align: middle; margin-right: 5px;">\n                Upewnij się, że kod QR pochodzi z wiarygodnego źródła.\n                <span class="close_warning" onclick="this.parentElement.style.display=\'none\'">\u2715</span>\n            </div>\n            <div id="reader" class="qr_reader"></div>\n        </div>\n\n        <button class="manual_button" onclick="showCodeInput()">Wpisz kod</button>\n\n    '
  document.body.appendChild(_0x1eb920)
  const _0x302108 = new Html5Qrcode('reader')
  _0x302108.start(
    { facingMode: 'environment' },
    {
      fps: 10,
      qrbox: {
        width: 250,
        height: 250,
      },
    },
    (_0x1226db, _0x51c3ab) => {
      alert('Zeskanowany kod: ' + _0x1226db)
      _0x302108.stop()
      document.querySelector('.scanner_view')?.remove()
    },
    (_0x3c535c) => {}
  )
}
function showCodeInput() {
  const _0x9ac679 = document.createElement('div')
  _0x9ac679.className = 'code_input_view'
  _0x9ac679.innerHTML =
    '\n        <div class="scanner_header">\n            <p class="main_title">Kod</p>\n            <p class="close_input" onclick="document.querySelector(\'.code_input_view\')?.remove()">Zamknij</p>\n        </div>\n        <p class="description">Wpisz lub wklej kod.</p>\n        <input class="code_input" type="text" maxlength="6" placeholder="|" oninput="this.value = this.value.replace(/[^0-9]/g, \'\').slice(0,6)">\n        <p class="input_hint">Wprowadź dokładnie 6 cyfr</p>\n        <button class="submit_code_button" disabled>Dalej</button>\n    '
  document.body.appendChild(_0x9ac679)
  const _0x4008c0 = _0x9ac679.querySelector('.code_input'),
    _0x42cd13 = _0x9ac679.querySelector('.submit_code_button')
  _0x4008c0.addEventListener('input', () => {
    _0x42cd13.disabled = _0x4008c0.value.length !== 6
  })
  _0x42cd13.addEventListener('click', () => {
    alert('Wprowadzony kod: ' + _0x4008c0.value)
    document.querySelector('.code_input_view')?.remove()
  })
}
