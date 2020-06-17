const {createRxState} = require('../src/create')
const {
    STATE_REGISTRY,
    clearRegistry
} = require('../src/registry')

describe('state registry: managing state registry', () => {
    const sliceName = 'manageSliceTest'
    
    test('new state added to registry', () => {
        createRxState(sliceName)
        expect(STATE_REGISTRY).toHaveProperty(sliceName)
    })

    test('clear registry', () => {
        createRxState(sliceName+sliceName)
        expect(STATE_REGISTRY).toHaveProperty(sliceName)
        expect(STATE_REGISTRY).toHaveProperty(sliceName+sliceName)
        clearRegistry()
        expect(STATE_REGISTRY).toEqual({})
    })
})