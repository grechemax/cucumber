import { BeforeAll } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom.world.ts';

export function globalContextHook(): void {
    BeforeAll(function () {
        CustomWorld.globalContext = new Map();
    });
}
