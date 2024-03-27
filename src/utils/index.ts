type TTiming = (progress: number) => number;
type TDraw = (progress: number) => void;

const animate = (timing: TTiming, draw: TDraw, duration: number, callback?: Function) => {
  const start = performance.now();

  requestAnimationFrame(function animate(time: number) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    // вычисление текущего состояния анимации
    const progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else if (typeof callback === 'function') {
      callback();
    }
  });
};

function linear(timeFraction: number) {
  return timeFraction;
}

function quad(timeFraction: number) {
  return Math.pow(timeFraction, 2);
}

function arc(timeFraction: number) {
  return 1 - Math.sin(Math.acos(timeFraction));
}

export { animate, linear, quad, arc };
