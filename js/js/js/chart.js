import { user } from "./user.js";

export function drawChart(canvas) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  user.history.forEach((v, i) => {
    ctx.lineTo(i * 20, canvas.height - v);
  });

  ctx.strokeStyle = "#ff0";
  ctx.lineWidth = 2;
  ctx.stroke();
}
