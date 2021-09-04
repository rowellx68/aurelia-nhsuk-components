import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-warning-callout \${class}">
    <h3 class="nhs-warning-callout__label">
      <span class="nhsuk-uvisually-hidden">Important: </span>
      \${label}
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
  public label = '';
}
