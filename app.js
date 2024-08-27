const ENCRYPTION_RULES = [
  ['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']
];

function encryptText() {
  let input = document.getElementById('inputText').value;
  let output = input;

  ENCRYPTION_RULES.forEach(([letter, code]) => {
    const regex = new RegExp(letter, 'g');
    output = output.replace(regex, code);
  });

  showResult(output);
  toggleButtons(true);
}

function decryptText() {
  let input = document.getElementById('inputText').value;
  let output = input;

  for (let i = ENCRYPTION_RULES.length - 1; i >= 0; i--) {
    const [letter, code] = ENCRYPTION_RULES[i];
    const regex = new RegExp(code, 'g');
    output = output.replace(regex, letter);
  }

  showResult(output);
  toggleButtons(true);
}

function showResult(text) {
  const outputText = document.getElementById('outputText');
  outputText.value = text;
  outputText.classList.remove('hidden');
  document.querySelector('.none-output').classList.add('hidden');
  document.querySelector('.msj-output').classList.add('hidden');
  document.querySelector('.muñeco').classList.add('hidden');
}

function copiarText() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
}

function limpiarText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  document.getElementById('outputText').classList.add('hidden');
  document.querySelector('.none-output').classList.remove('hidden');
  document.querySelector('.msj-output').classList.remove('hidden');
  document.querySelector('.muñeco').classList.remove('hidden');
  toggleButtons(false);
}

function toggleButtons(isEnabled) {
  document.getElementById('desencriptar').disabled = !isEnabled;
  document.getElementById('copiar').disabled = !isEnabled;
  document.getElementById('limpiar').disabled = !isEnabled;
}

function checkInputText() {
  const inputText = document.getElementById('inputText').value.trim();
  const hasText = inputText.length > 0;

  document.getElementById('desencriptar').disabled = !hasText;
  document.getElementById('encriptar').disabled = !hasText;
}

document.getElementById('encriptar').addEventListener('click', function() {
  encryptText();
  checkInputText();
});

document.getElementById('desencriptar').addEventListener('click', function() {
  decryptText();
  checkInputText();
});

document.getElementById('copiar').addEventListener('click', copiarText);
document.getElementById('limpiar').addEventListener('click', limpiarText);

document.getElementById('inputText').addEventListener('input', checkInputText);
