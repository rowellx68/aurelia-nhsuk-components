import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./elements/icons/arrow-right-circle'),
    PLATFORM.moduleName('./elements/icons/chevron-left'),

    PLATFORM.moduleName('./elements/action-link/action-link'),
    PLATFORM.moduleName('./elements/back-link/back-link')
  ]);
}