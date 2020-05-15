import { MovieFilterPipe } from './movie-filter.pipe';

describe('Pipe: Filtere', () => {
  it('create an instance', () => {
    const pipe = new MovieFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
