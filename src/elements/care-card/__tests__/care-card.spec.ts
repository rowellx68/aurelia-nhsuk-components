import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { CareCard } from 'elements/care-card/care-card';

describe('care-card element', () => {
  let component: ComponentTester<CareCard>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      urgency: 'immediate',
      headingPrefix: 'Immediate action required:',
      heading: 'Call 999 if you have sudden chest pain that:'
    };

    component = StageComponent
      .withResources('elements/care-card/care-card')
      .inView(`
        <care-card class.bind="class" heading-prefix.bind="headingPrefix" heading.bind="heading">
          <p>Stay away from school, nursery or work.</p>
        </care-card>
      `)
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const label = view.querySelector('.nhsuk-care-card__heading');
    const paragraph = view.querySelector('p');

    expect(view.classList).toContain(model.class);
    expect(label.textContent.trim()).toContain(model.headingPrefix);
    expect(label.textContent.trim()).toContain(model.heading);
    expect(paragraph.textContent.trim()).toBe('Stay away from school, nursery or work.');
  });
});
