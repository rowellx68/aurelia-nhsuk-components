import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ActionLink } from 'elements/action-link/action-link';

describe('action-link element', () => {
  let component: ComponentTester<ActionLink>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      href: 'https://nhs.gov.uk/some-test-link',
      target: '_blank'
    };

    component = StageComponent
      .withResources('elements/action-link/action-link')
      .inView('<action-link class.bind="class" target.bind="target" href.bind="href">Get more information</action-link>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const link = component.element.querySelector('a');

    expect(view.className).toBe('nhsuk-action-link');
    expect(link.classList).toContain(model.class);
    expect(link.href).toBe(model.href);
    expect(link.target).toBe(model.target);
    expect(link.textContent.trim()).toBe('Get more information');
  });
});
