// https://jestjs.io/docs/ja/manual-mocks#jsdom-%E3%81%AB%E5%AE%9F%E8%A3%85%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E3%83%A2%E3%83%83%E3%82%AF
Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });