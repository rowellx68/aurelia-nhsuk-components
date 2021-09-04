import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { WarningCallout } from 'elements/warning-callout/warning-callout';

describe('warning-callout element', () => {
  let component: ComponentTester<WarningCallout>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      label: 'School, nursery or work'
    };

    component = StageComponent
      .withResources('elements/warning-callout/warning-callout')
      .inView(`
        <warning-callout class.bind="class" label.bind="label">
          <p>Stay away from school, nursery or work.</p>
        </warning-callout>
      `)
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const label = view.querySelector('.nhs-warning-callout__label');
    const paragraph = view.querySelector('p');

    expect(view.classList).toContain(model.class);
    expect(label.textContent.trim()).toContain(model.label);
    expect(paragraph.textContent.trim()).toBe('Stay away from school, nursery or work.');
  });
});
