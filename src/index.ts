import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./elements/icons/arrow-right-circle'),
    PLATFORM.moduleName('./elements/icons/chevron-left'),

    PLATFORM.moduleName('./elements/action-link/action-link'),
    PLATFORM.moduleName('./elements/back-link/back-link'),
    PLATFORM.moduleName('./elements/breadcrumb/breadcrumb'),
    PLATFORM.moduleName('./elements/breadcrumb/breadcrumb-back'),
    PLATFORM.moduleName('./elements/breadcrumb/breadcrumb-list'),
    PLATFORM.moduleName('./elements/care-card/care-card'),
    PLATFORM.moduleName('./elements/detail/detail'),
    PLATFORM.moduleName('./elements/inset-text/inset-text'),
    PLATFORM.moduleName('./elements/warning-callout/warning-callout')
  ]);
}
