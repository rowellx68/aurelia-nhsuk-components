import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-warning-callout \${class}">
    <h3 class="nhsuk-warning-callout__label">
      <span role="text">
        <span class="nhsuk-u-visually-hidden">\${labelPrefix} </span>
        \${label}
      </span>
    </h3>
    <slot></slot>
  </div>
</template>
`)
@containerless
export class WarningCallout {
  @bindable
  public class = '';

  @bindable
  public labelPrefix = '';

  @bindable
  public label = '';
}
