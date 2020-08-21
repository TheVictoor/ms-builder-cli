const adaptersWrapper = require('../../adapters');

describe('Smoke test on someFeature adapter', () => {
  it('Should inject the dependencies into the adapter and get a reference', () => {
    const dependencies = {
      config: {},
    };

    const adapters = adaptersWrapper(dependencies);

    expect(adapters).toBeInstanceOf(Object);
    expect(adapters.someFeature).toBeInstanceOf(Function);
    expect(adapters.someFeature.get).not.toBeUndefined();
  });
});

describe('GET: url/test', () => {
  context('When call the route', () => {
    it('Should get a object with information about the micro serivce', async () => {
      const dependencies = {
        config: {
          app: {
            name: 'name-test',
            port: 3001,
          }
        },
        paylaod: {},
        headers: {},
        onSuccess: data => data,
        onError: data => data,
      };
  
      const adapters = adaptersWrapper(dependencies);
      const result = await adapters.someFeature.get(dependencies);
  
      expect(result.data.name).toBeInstanceOf('name-teste');
      expect(result.data.port).toBeInstanceOf(3001);
    });

    it('Should return an object with the message when a error occour', () => {
      const dependencies = {
        config: {
          app: {
            name: 'name-test',
            port: 3001,
          }
        },
        paylaod: {},
        headers: {},
        onSuccess: data => { throw new Error('error unexpected') },
        onError: data => data,
      };
  
      const adapters = adaptersWrapper(dependencies);
      const result = await adapters.someFeature.get(dependencies);
  
      expect(result.message).toBeInstanceOf('error unexpected');
      expect(result.statusCode).toBeInstanceOf(500);
    });
  });
});
