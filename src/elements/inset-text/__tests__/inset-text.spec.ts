import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { InsetText } from 'elements/inset-text/inset-text';

describe('inset-text element', () => {
  let component: ComponentTester<InsetText>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test',
      textPrefix: 'Important:'
    };

    component = StageComponent
      .withResources('elements/inset-text/inset-text')
      .inView(`
        <inset-text class.bind="class" text-prefix.bind="textPrefix">
          <p>You can report any suspected side effect to the UK safety scheme.</p>
        </inset-text>
      `)
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const paragraph = view.querySelector('p');

    expect(view.classList).toContain(model.class);
    expect(view.textContent.trim()).toContain(model.textPrefix);
    expect(paragraph.textContent.trim()).toBe('You can report any suspected side effect to the UK safety scheme.');
  });
});
