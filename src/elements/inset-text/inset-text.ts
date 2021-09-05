import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-inset-text \${class}">
    <span class="nhsuk-u-visually-hidden">\${textPrefix} </span>
    <slot></slot>
  </div>
</template>
`)
@containerless
export class InsetText {
  @bindable
  public class = '';

  @bindable
  public textPrefix = '';
}
