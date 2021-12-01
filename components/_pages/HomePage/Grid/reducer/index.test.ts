import reducer from './index'

// TODO: complete the unit test
test('reducer', () => {
  expect(reducer({ matrix: [[1]], count: 0 }, { type: 'unknown', index: { x: 0, y: 0 } })).toEqual({
    matrix: [[1]],
    count: 0,
  })
})
