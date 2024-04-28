const RADIUS = 'radius';
const HEIGHT = 'height';
const form = document.forms.sizes;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submit');
    const formData = new FormData(form);
    const newRadius = formData.get('radius');
    const radiusHalf = newRadius / 2;
    const diameter = newRadius * 2;
    const newHeight = formData.get('height');
    const top = document.getElementById('top');
    const main = document.getElementById('main');
    const bottom = document.getElementById('bottom');
    top.setAttribute('style', `top: -${radiusHalf}px;background-color: aqua;position: absolute;border-radius: 100%;width: ${diameter}px;height: ${newRadius}px;border: 2px solid black;`)
    main.setAttribute('style', `background-color: aqua;width: ${diameter}px;height: ${newHeight}px;border-right: 2px solid black;border-left: 2px solid black;`)
    bottom.setAttribute('style', `bottom: -${radiusHalf}px;background-color: aqua;position: absolute;border-radius: 100%;width: ${diameter}px;height: ${newRadius}px;border: 2px solid black;`)
});
