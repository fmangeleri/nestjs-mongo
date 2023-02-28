import { MongoIdPipe } from './mongoId.pipe';

describe('ParseIntPipe', () => {
  it('should be defined', () => {
    expect(new MongoIdPipe()).toBeDefined();
  });
});
