import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-action-link">
    <a
      href.bind="href"
      target.bind="target"
      class="nhsuk-action-link__link \${class}"
    >
      <icon-arrow-right-circle></icon-arrow-right-circle>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </a>
  </div>
</template>
`)
@containerless
export class ActionLink {
  @bindable
  public class = '';

  @bindable
  public href = '';

  @bindable
  public target = '';
}
