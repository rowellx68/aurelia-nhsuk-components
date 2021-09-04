import { bindable, containerless, inlineView, processContent, ViewCompiler, ViewResources, BehaviorInstruction } from 'aurelia-framework';

const processor = (_vc: ViewCompiler, _vr: ViewResources, node: HTMLElement, _bi: BehaviorInstruction): boolean => {
  const template = document.createElement('template');
  template.setAttribute('replace-part', 'links');

  const links = node.querySelectorAll('a');

  links.forEach(l => {
    const li = document.createElement('li');

    li.className = 'nhsuk-breadcrumb__item';
    l.classList.add('nhsuk-breadcrumb__link');
    li.append(l);

    template.content.append(li);
  });

  node.append(template);
  return true;
};

@inlineView(`
<template>
  <ol class="nhsuk-breadcrumb__list \${class}">
  <template replaceable part="links"></template>
  </ol>
</template>
`)
@processContent(processor)
@containerless
export class BreadcrumbList {
  @bindable
  public class = '';
}
