function calculatePercentOf() {
  const percent = parseFloat(document.getElementById('percent1').value);
  const number = parseFloat(document.getElementById('number1').value);
  if (!isNaN(percent) && !isNaN(number)) {
    const result = (percent / 100) * number;
    document.getElementById('result1').textContent = result.toFixed(2);
  } else {
    document.getElementById('result1').textContent = "--";
  }
}

function calculateWhatPercent() {
  const x = parseFloat(document.getElementById('valueX').value);
  const y = parseFloat(document.getElementById('valueY').value);
  if (!isNaN(x) && !isNaN(y) && y !== 0) {
    const result = (x / y) * 100;
    document.getElementById('result2').textContent = result.toFixed(2) + "%";
  } else {
    document.getElementById('result2').textContent = "--%";
  }
}
