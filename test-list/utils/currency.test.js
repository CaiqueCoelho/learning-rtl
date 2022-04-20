import { convert } from './currency';

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({rates: {CAD: 1.42}})
    })
);

beforeEach(() => {
    fetch.mockClear()
});

describe("Tests" , () => {
    it("converts USD to CAD", async() => {
        const rate = await convert("USD", "CAD");
   
        expect(rate).toEqual(1.42);
        expect(fetch).toHaveBeenCalledTimes(1);
   })

   it("handles exception with null", async() => {
        fetch.mockImplementationOnce(() => Promise.reject("API failure"))
        const rate = await convert("USD", "CAD");

        expect(rate).toEqual(null);
        expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD`);
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})