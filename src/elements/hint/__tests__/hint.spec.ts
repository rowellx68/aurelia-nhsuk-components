import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { Hint } from 'elements/hint/hint';

describe('hint element', () => {
  let component: ComponentTester<Hint>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      id: 'some-id'
    };

    component = StageComponent
      .withResources('elements/hint/hint')
      .inView('<hint class.bind="class" id.bind="id">CHILD_ELEMENT</hint>')
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;

    expect(view.classList).toContain(model.class);
    expect(view.id).toBe(model.id);
  });
});
