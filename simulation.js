import Particle from "./particle.js";
import { Dimensions } from "./dimensions.js";

export class Simulation {
    constructor(displayContext) {
        this.ctx = displayContext;
        this.particles = [];
        this.generateParticles();
    }

    generateParticles() {
        for (let i = 0; i < Dimensions.PARTICLE_NUMER; i++) {
            const x = Math.random() * Dimensions.SCREEN.WIDTH;
            const y = Math.random() * Dimensions.SCREEN.HEIGHT;
            const vx = Math.random() * 10 - 5;
            const vy = Math.random() * 10 - 5;
            this.particles.push(new Particle(x, y, vx, vy, this.ctx));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, Dimensions.SCREEN.WIDTH, Dimensions.SCREEN.HEIGHT);
        for (let i = 0; i < Dimensions.PARTICLE_NUMER; i++) {
            this.particles[i].update();
            this.particles[i].draw();
        }
        requestAnimationFrame(this.animate.bind(this));
    }
}