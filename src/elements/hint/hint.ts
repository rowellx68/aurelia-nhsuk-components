import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(`
<template>
  <div class="nhsuk-hint" class.bind="class" id.bind="id">
    <slot></slot>
  <div>
</template>
`)
@containerless
export class Hint {
  @bindable
  public class = '';

  @bindable
  public id = '';
}
