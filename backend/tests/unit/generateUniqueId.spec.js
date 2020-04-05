const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate and unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});