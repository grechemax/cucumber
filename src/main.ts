import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './worlds/custom.world.js';

setDefaultTimeout(999999);
setWorldConstructor(CustomWorld);
