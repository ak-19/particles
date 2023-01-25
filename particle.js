import { Dimensions } from './dimensions.js'

export default class Particle {
    constructor(x, y, vx, vy, context) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.ctx = context;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > Dimensions.SCREEN.WIDTH) {
            this.vx = -this.vx;
        }
        if (this.y < 0 || this.y > Dimensions.SCREEN.HEIGHT) {
            this.vy = -this.vy;
        }
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }
}