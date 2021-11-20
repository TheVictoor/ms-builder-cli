const adaptersWrapper = require('../../v1/adapters');

describe('Smoke test on health-check adapter', () => {
  it('Should inject the dependencies into the adapter and get a reference', () => {
    const dependencies = {
      config: {},
      database: {},
    };

    const adapters = adaptersWrapper(dependencies);

    expect(adapters).toBeInstanceOf(Object);
    expect(adapters.healthCheck).toBeInstanceOf(Object);
    expect(adapters.healthCheck.get).not.toBeUndefined();
  });
});

describe('GET: url/test', () => {
  describe('When call the route', () => {
    it('Should get a ok message', async () => {
      const dependencies = {
        config: {
          app: {
            name: '<%= projectName %>',
            port: 3001,
          }
        },
        database: {},
        paylaod: {},
        headers: {},
        onSuccess: data => data,
        onError: data => data,
      };
  
      const adapters = adaptersWrapper(dependencies);
      const result = await adapters.healthCheck.get(dependencies);
  
      expect(result.data.message).toBe(`app <%= projectName %> running at 3001`);
    });

    it('Should return an object with the message when a error occour', async () => {
      const dependencies = {
        config: {
          app: {
            name: 'name-test',
            port: 3001,
          }
        },
        database: {},
        paylaod: {},
        headers: {},
        onSuccess: data => { throw new Error('error unexpected') },
        onError: data => data,
      };
  
      const adapters = adaptersWrapper(dependencies);
      const result = await adapters.healthCheck.get(dependencies);
  
      expect(result.data.message).toBe('error unexpected');
      expect(result.statusCode).toBe(500);
    });
  });
});
