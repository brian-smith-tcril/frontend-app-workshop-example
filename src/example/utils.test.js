import {
  AsyncActionType,
  modifyObjectKeys,
  camelCaseObject,
} from './utils';

describe('modifyObjectKeys', () => {
  it('should use the provided modify function to change all keys in and object and its children', () => {
    function meowKeys(key) {
      return `${key}Meow`;
    }

    const result = modifyObjectKeys(
      {
        one: undefined,
        two: null,
        three: '',
        four: 0,
        five: NaN,
        six: [1, 2, { seven: 'woof' }],
        eight: { nine: { ten: 'bark' }, eleven: true },
      },
      meowKeys,
    );

    expect(result).toEqual({
      oneMeow: undefined,
      twoMeow: null,
      threeMeow: '',
      fourMeow: 0,
      fiveMeow: NaN,
      sixMeow: [1, 2, { sevenMeow: 'woof' }],
      eightMeow: { nineMeow: { tenMeow: 'bark' }, elevenMeow: true },
    });
  });
});

describe('camelCaseObject', () => {
  it('should make everything camelCase', () => {
    const result = camelCaseObject({
      what_now: 'brown cow',
      but_who: { says_you_people: 'okay then', but_how: { will_we_even_know: 'the song is over' } },
      'dot.dot.dot': 123,
    });

    expect(result).toEqual({
      whatNow: 'brown cow',
      butWho: { saysYouPeople: 'okay then', butHow: { willWeEvenKnow: 'the song is over' } },
      dotDotDot: 123,
    });
  });
});

describe('AsyncActionType', () => {
  it('should return well formatted action strings', () => {
    const actionType = new AsyncActionType('WORKSHOP_ATTENDEES', 'BUILD_AN_MFE');

    expect(actionType.BASE).toBe('WORKSHOP_ATTENDEES__BUILD_AN_MFE');
    expect(actionType.BEGIN).toBe('WORKSHOP_ATTENDEES__BUILD_AN_MFE__BEGIN');
    expect(actionType.SUCCESS).toBe('WORKSHOP_ATTENDEES__BUILD_AN_MFE__SUCCESS');
    expect(actionType.FAILURE).toBe('WORKSHOP_ATTENDEES__BUILD_AN_MFE__FAILURE');
    expect(actionType.RESET).toBe('WORKSHOP_ATTENDEES__BUILD_AN_MFE__RESET');
  });
});
