import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | rdfa-editor-wikipedia-slug-plugin', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:rdfa-editor-wikipedia-slug-plugin');
    assert.ok(service);
  });
});
