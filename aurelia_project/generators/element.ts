import {inject} from 'aurelia-dependency-injection';
import {Project, ProjectItem, CLIOptions, UI} from 'aurelia-cli';

@inject(Project, CLIOptions, UI)
export default class ElementGenerator {
  constructor(private project: Project, private options: CLIOptions, private ui: UI) { }

  async execute() {
    const name = await this.ui.ensureAnswer(
      this.options.args[0],
      'What would you like to call the custom element?'
    );

    let fileName = this.project.makeFileName(name);
    let className = this.project.makeClassName(name);

    this.project.elements.add(
      ProjectItem.text(`${fileName}/${fileName}.ts`, this.generateJSSource(className)),
      ProjectItem.text(`${fileName}/__tests__/${fileName}.spec.ts`, this.generateTestSource(className, fileName)),
      ProjectItem.text(`${fileName}/README.md`, this.generateReadMe())
    );

    await this.project.commitChanges();
    await this.ui.log(`Created ${fileName}.`);
  }

  generateJSSource(className) {
    return `import { bindable, containerless, inlineView } from 'aurelia-framework';

@inlineView(\`
<template>
  
</template>
\`)
@containerless
export class ${className} {
  @bindable
  public class = '';
}
`;
  }

  generateTestSource(className, fileName) {
    return `import { ComponentTester, StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { ${className} } from 'elements/${fileName}/${fileName}';

describe('${fileName} element', () => {
  let component: ComponentTester<${className}>;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('binds all the bindable properties', async () => {
    const model = {
      class: 'some-other-class-test'
    };

    component = StageComponent
      .withResources('elements/${fileName}/${fileName}')
      .inView('<${fileName} class.bind="class">CHILD_ELEMENT</${fileName}>')
      .boundTo(model);

    await component.create(bootstrap);
  });
});
`;
  }

  generateReadMe() {
    return `## Usage
\`\`\`html

\`\`\`

## Bindable properties

| Property | Type | Default |
|----------|------|---------|
|\`class\`|\`string\`|none|
`;
  }
}
