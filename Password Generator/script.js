function gen() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const lengthInput = document.getElementById('len');
    let pwLength = parseInt(lengthInput.value);

    // Validar longitud
    if (isNaN(pwLength) || pwLength < 4) {
        alert('La longitud mínima es 4.');
        pwLength = 4;
        lengthInput.value = 4;
    } else if (pwLength > 16) {
        alert('La longitud máxima es 16.');
        pwLength = 16;
        lengthInput.value = 16;
    }

    let pw = '';
    for (let i = 0; i < pwLength; i++) {
        pw += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById('pw').value = pw;
}


function copyPassword() {
  const pwField = document.getElementById('pw');
  pwField.select();
  document.execCommand('copy');

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.textContent = '✅ Copied!';
  setTimeout(() => copyBtn.textContent = '📋 Copy', 1500);
}
