import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { BreadcrumbList } from 'elements/breadcrumb/breadcrumb-list';

describe('breadcrumb-list element', () => {
  let component: ComponentTester<BreadcrumbList>;

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
      .withResources('elements/breadcrumb/breadcrumb-list')
      .inView(`
      <breadcrumb-list class.bind="class">
        <a href="http://nhs.gov.uk/some-test-link-1">Page 1</a>
        <a href="http://nhs.gov.uk/some-test-link-2">Page 2</a>
      </breadcrumb-list>
      `)
      .boundTo(model);

    await component.create(bootstrap);

    const view = component.element;
    const links = view.querySelectorAll('a');
    const link = view.querySelector('a');

    expect(view.classList).toContain(model.class);
    expect(links.length).toBe(2);
    expect(link.classList).toContain('nhsuk-breadcrumb__link');
  });
});
