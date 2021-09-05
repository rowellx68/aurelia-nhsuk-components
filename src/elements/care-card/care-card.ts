import { bindable, computedFrom, containerless, inlineView } from 'aurelia-framework';

const validUrgency = ['non-urgent', 'urgent', 'immediate'];

@inlineView(`
<template>
  <div class="nhsuk-care-card nhsuk-care-card--\${urgency} \${class}">
    <div class="nhsuk-care-card__heading-container">
      <h3 class="nhsuk-care-card__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">\${headingPrefix} </span>
          \${heading}
        </span>
      </h3>
      <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-care-card__content">
      <slot></slot>
    </div>
  </div>
</template>
`)
@containerless
export class CareCard {
  @bindable
  public class = '';

  @bindable
  public urgency: 'non-urgent' | 'urgent' | 'immediate' = 'non-urgent';

  @bindable
  public headingPrefix = '';

  @bindable
  public heading = '';
}
