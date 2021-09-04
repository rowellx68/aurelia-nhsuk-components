import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { BreadcrumbBack } from 'elements/breadcrumb/breadcrumb-back';

describe('breadcrumb-back element', () => {
  let component: ComponentTester<BreadcrumbBack>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      href: 'http://nhs.gov.uk/some-test-link'
    };

    component = StageComponent
      .withResources('elements/breadcrumb/breadcrumb-back')
      .inView('<breadcrumb-back class.bind="class" href.bind="href">TEST</breadcrumb-back>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const link = view.querySelector('a');

    expect(view.classList).toContain(model.class);
    expect(view.textContent.trim()).toBe('TEST');
    expect(link.href).toBe(model.href);
  });
});
