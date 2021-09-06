import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <details class="nhsuk-details" class.bind="class" open.bind="expanded">
    <summary
      class="nhsuk-details__summary"
      role="button"
      aria-expanded.bind="expanded"
      click.trigger="toggleDetails()"
    >
      <span class="nhsuk-details__summary-text">\${summaryText}</span>
    </summary>
    <div class="nhsuk-details__text" aria-hidden.bind="!expanded">
      <slot></slot>
    </div>
  </details>
</template>
`)
@containerless
export class Detail {
  @bindable
  public class = '';

  @bindable
  public summaryText = '';

  public expanded = false;

  public toggleDetails(): void {
    this.expanded = !this.expanded;
  }
}
