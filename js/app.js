function encodeText() {
  var inputText = document.getElementById('input-text').value;
  var encodedText = convertToUnicodeEscape(inputText);
  document.getElementById('output-text').value = encodedText;
}

function convertToUnicodeEscape(input) {
  return input.split('').map(function(char) {
    var charCode = char.charCodeAt(0);
    if (charCode > 127) {
      return '\\u' + ('0000' + charCode.toString(16)).slice(-4);
    } else {
      return char;
    }
  }).join('');
}

function decodeText() {
  var encodedText = document.getElementById('input-text').value;
  var decodedText = decodeUnicodeEscape(encodedText);
  document.getElementById('output-text').value = decodedText;
}

function decodeUnicodeEscape(input) {
  return input.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}

function copyToClipboard() {
  var outputText = document.getElementById('output-text');
  outputText.select();
  document.execCommand("copy");
}
