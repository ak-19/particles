import { Dimensions } from "./dimensions.js";

export const setupAndGetDisplayContext = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', Dimensions.SCREEN.WIDTH);
    canvas.setAttribute('height', Dimensions.SCREEN.HEIGHT);
    canvas.style = 'background: aqua';
    document.body.appendChild(canvas);
    return canvas.getContext('2d');
}