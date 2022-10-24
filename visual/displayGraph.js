export default function displayGraph(stockValues) {
  let canva = document.getElementById("myCanvas");
  let canvaCTX = canva.getContext("2d");

  canvaCTX.clearRect(0, 0, canva.width, canva.height);

  let highestSotckValue = Math.max(...stockValues.map((x) => x.high));
  let lowestStockValue = Math.min(...stockValues.map((x) => x.low));
  let delta = canva.height / (highestSotckValue - lowestStockValue);

  for (let i = 0; i < stockValues.length; i++) {
    const data = stockValues[i];
    drawCandle(data, i);
  }
  function drawCandle(data, index) {
    let maxBodyValue = Math.max(data.close, data.open);
    let minBodyValue = Math.min(data.close, data.open);

    let bodyHeight = (maxBodyValue - minBodyValue) * delta;
    let bodyStartY = (highestSotckValue - maxBodyValue) * delta;
    let bodyWidth = canva.width / stockValues.length;
    let bodyStartX = canva.width - bodyWidth * (index + 1);
    canvaCTX.fillStyle = data.close > data.open ? "green" : "red";
    canvaCTX.fillRect(bodyStartX, bodyStartY, bodyWidth, bodyHeight);

    canvaCTX.beginPath();
    let bodyCenterX = bodyStartX + bodyWidth / 2;
    let shadowStartY = (highestSotckValue - data.high) * delta;
    let shadowEndY = (highestSotckValue - data.low) * delta;
    canvaCTX.moveTo(bodyCenterX, shadowStartY);
    canvaCTX.lineTo(bodyCenterX, shadowEndY);

    let closeHeight = (highestSotckValue - data.close) * delta;
    canvaCTX.moveTo(bodyStartX, closeHeight);
    canvaCTX.lineTo(bodyStartX + bodyWidth, closeHeight);

    canvaCTX.strokeStyle = "#999";
    canvaCTX.lineWidth = 2;
    canvaCTX.stroke();
  }
}
