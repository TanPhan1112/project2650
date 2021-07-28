import app from '../../src/app';

describe('\'signups\' service', () => {
  it('registered the service', () => {
    const service = app.service('signups');
    expect(service).toBeTruthy();
  });
});
