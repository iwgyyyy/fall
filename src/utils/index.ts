/**
 * 生成随机颜色
 */
function randomColor(brighter: boolean = false): string {
  if (brighter) {
    return `hsl(${360 * Math.random()},${(25 + 70 * Math.random())}%,${(85 + 10 * Math.random())}%)`;
  }
  const letters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {
  randomColor
};
