import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <p class="nhsuk-breadcrumb__back" class.bind="class">
    <a
      class="nhsuk-breadcrumb__backlink"
      href.bind="href"
    >
      <slot></slot>
    </a>
  </p>
</template>
`)
@containerless
export class BreadcrumbBack {
  @bindable
  public class = '';

  @bindable
  public href = '';
}
