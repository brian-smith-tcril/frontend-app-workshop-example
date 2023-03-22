import {
  AsyncActionType,
} from './utils';

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