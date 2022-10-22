export default function canvas(realData) {
  let canva = document.getElementById("myCanvas");
  let larguraTotal = canva.width;
  let stockNumber = realData.length;
  let larguraParcial = larguraTotal / stockNumber;
  let canvaCTX = canva.getContext("2d");

  canvaCTX.clearRect(0, 0, canva.width, canva.height);
  canvaCTX.beginPath();

  let highestHigh = realData[0].high;
  realData.forEach((data) => {
    highestHigh = data.high > highestHigh ? data.high : highestHigh;
  });
  let lowestLow = realData[0].low;
  realData.forEach((data) => {
    lowestLow = data.low < lowestLow ? data.low : lowestLow;
  });
  let delta = canva.height / (highestHigh - lowestLow);

  for (let i = 0; i < realData.length; i++) {
    const data = realData[i];
    drawACandle(data, i);
  }

  function drawACandle(data, i) {
    let aOuFMax = Math.max(data.close, data.open);
    let aOuFMin = Math.min(data.close, data.open);
    let x = canva.width - larguraParcial * (i + 1);
    let tamanhoDoCorpo = (aOuFMax - aOuFMin) * delta;
    let distanciaDoTopo = (highestHigh - aOuFMax) * delta;
    let corDoCorpo = data.close > data.open ? "#00FF00" : "#FF0000";
    canvaCTX.fillStyle = corDoCorpo;
    canvaCTX.fillRect(x, distanciaDoTopo, larguraParcial, tamanhoDoCorpo);

    let lineWidth = (larguraParcial * 3) / 100;
    canvaCTX.lineWidth = lineWidth;
    canvaCTX.moveTo(x + larguraParcial / 2, (highestHigh - data.high) * delta);
    canvaCTX.lineTo(x + larguraParcial / 2, (highestHigh - data.low) * delta);
    canvaCTX.stroke();

    let alturaDoFechamento =
      data.close > data.open
        ? distanciaDoTopo
        : distanciaDoTopo + tamanhoDoCorpo;
    canvaCTX.moveTo(x, alturaDoFechamento);
    canvaCTX.lineTo(x + larguraParcial, alturaDoFechamento);
  }
}
