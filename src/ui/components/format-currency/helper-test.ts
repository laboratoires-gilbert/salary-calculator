import formatCurrency from './helper';

const { module, test } = QUnit;

module('Helper: format-currency', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(formatCurrency([]), undefined);
  });
});
