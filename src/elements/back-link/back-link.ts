import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-back-link">
    <a
      class="nhsuk-back-link__link \${class}"
      href.bind="href"
    >
      <icon-chevron-left></icon-chevron-left>
      <slot></slot>
    </a>
  </div>
</template>
`)
@containerless
export class BackLink {
  @bindable
  public class = '';

  @bindable
  public href = '';
}
