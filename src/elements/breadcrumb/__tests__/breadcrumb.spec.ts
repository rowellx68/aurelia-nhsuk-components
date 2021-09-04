import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { Breadcrumb } from 'elements/breadcrumb/breadcrumb';

describe('breadcrumb element', () => {
  let component: ComponentTester<Breadcrumb>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      ariaLabel: 'Test breadcrumb'
    };

    component = StageComponent
      .withResources('elements/breadcrumb/breadcrumb')
      .inView('<breadcrumb class.bind="class" aria-label.bind="ariaLabel">TEST</breadcrumb>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;

    expect(view.classList).toContain(model.class);
    expect(view.textContent.trim()).toBe('TEST');
    expect(view.getAttribute('aria-label')).toBe(model.ariaLabel);
  });
});
