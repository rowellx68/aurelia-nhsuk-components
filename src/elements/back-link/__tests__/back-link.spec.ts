import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { BackLink } from 'elements/back-link/back-link';

describe('back-link element', () => {
  let component: ComponentTester<BackLink>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      href: 'https://nhs.gov.uk/some-test-link'
    };

    component = StageComponent
      .withResources('elements/back-link/back-link')
      .inView('<back-link class.bind="class" href.bind="href">Back</back-link>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const link = component.element.querySelector('a');

    expect(view.classList).toContain(model.class);
    expect(link.href).toBe(model.href);
    expect(link.textContent.trim()).toBe('Back');
  });
});
