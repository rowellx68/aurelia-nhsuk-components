import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-back-link" class.bind="class">
    <a
      class="nhsuk-back-link__link"
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
