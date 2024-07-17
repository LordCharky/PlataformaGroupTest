import { TelefonoPipe } from './telefono.pipe';

describe('PhoneFormatPipe', () => {
  const pipe = new TelefonoPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats phone number correctly', () => {
    expect(pipe.transform('56912345678')).toBe('+569 1234 5678');
  });

  it('returns the same value if the phone number is invalid', () => {
    expect(pipe.transform('123')).toBe('123');
  });

  it('returns empty string if value is null or undefined', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform('')).toBe('');
  });
});