/**
 * 生成随机范围的数字
 */
function randomNumber (a: number, b: number): number {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

/**
 * 生成随机颜色
 */
function randomColor (type: 'default' | 'bright' | 'dark' = 'default'): string {
  const max = type === 'dark' ? 181 : 255;
  const min = type === 'bright' ? 180 : 0;
  const r = randomNumber(min, max);
  const g = randomNumber(min, max);
  const b = randomNumber(min, max);
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

export {
  randomColor,
  randomNumber
};
