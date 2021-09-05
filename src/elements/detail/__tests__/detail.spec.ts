import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { Detail } from 'elements/detail/detail';

describe('detail element', () => {
  let component: ComponentTester<Detail>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      summaryText: 'How to find your NHS number'
    };

    component = StageComponent
      .withResources('elements/detail/detail')
      .inView('<detail class.bind="class" summary-text.bind="summaryText">CHILD_ELEMENT</detail>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const viewModel = component.viewModel;
    const summary = view.querySelector('.nhsuk-details__summary-text');

    viewModel.toggleDetails();

    expect(view.classList).toContain(model.class);
    expect(summary.textContent.trim()).toBe(model.summaryText);
    expect(viewModel.expanded).toBe(true);
  });
});
