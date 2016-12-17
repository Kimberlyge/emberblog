import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('img-to-bg', 'Integration | Component | img to bg', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{img-to-bg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#img-to-bg}}
      template block text
    {{/img-to-bg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
