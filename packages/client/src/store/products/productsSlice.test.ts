import products from './productsSlice'

describe('products reducer', () => {
  it('should handle initial state', () => {
    expect(products(undefined, {})).toEqual([])
  })

  it('should handle ADD_PRODUCT', () => {
    expect(
      products([], {
        type: 'ADD_PRODUCT',
        name: 'Run the tests',
        id: '0',
      }),
    ).toEqual([
      {
        name: 'Run the tests',
        completed: false,
        id: '0',
      },
    ])

    expect(
      products(
        [
          {
            name: 'Run the tests',
            completed: false,
            id: '0',
          },
        ],
        {
          type: 'ADD_TODO',
          name: 'Use Redux',
          id: '1',
        },
      ),
    ).toEqual([
      {
        name: 'Run the tests',
        completed: false,
        id: '0',
      },
      {
        name: 'Use Redux',
        completed: false,
        id: '1',
      },
    ])

    expect(
      products(
        [
          {
            name: 'Run the tests',
            completed: false,
            id: '0',
          },
          {
            name: 'Use Redux',
            completed: false,
            id: '1',
          },
        ],
        {
          type: 'ADD_TODO',
          name: 'Fix the tests',
          id: '2',
        },
      ),
    ).toEqual([
      {
        name: 'Run the tests',
        completed: false,
        id: '0',
      },
      {
        name: 'Use Redux',
        completed: false,
        id: '1',
      },
      {
        name: 'Fix the tests',
        completed: false,
        id: '2',
      },
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      products(
        [
          {
            name: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            name: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: 'TOGGLE_TODO',
          id: 1,
        },
      ),
    ).toEqual([
      {
        name: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        name: 'Use Redux',
        completed: false,
        id: 0,
      },
    ])
  })
})
