import { PiColorPipe } from './pi-color.pipe';

describe('PiColorPipe', () => {
  it('should create an instance', () => {
    const pipe = new PiColorPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let pipe: PiColorPipe;

    beforeEach(() => {
      pipe = new PiColorPipe();
    });

    it('should return a hex value for a given rgb value', () => {
      const res = pipe.transform('rgb(0, 0, 0)', 'hex6');
      expect(res).toBe('#000000');
    });
  });
});
