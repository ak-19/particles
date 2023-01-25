import { setupAndGetDisplayContext } from "./setup.js";

import { Simulation } from './simulation.js';

const simulation = new Simulation(setupAndGetDisplayContext());

simulation.animate()