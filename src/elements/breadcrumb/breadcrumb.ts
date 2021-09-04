import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <nav class="nhsuk-breadcrumb \${class}" aria-label.bind="ariaLabel">
    <div class="nhsuk-width-container">
      <slot></slot>
    </div>
  </nav>
</template>
`)
@containerless
export class Breadcrumb {
  @bindable
  public class = '';

  @bindable
  public ariaLabel = 'Breadcrumb';
}
