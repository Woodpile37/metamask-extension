<<<<<<< HEAD
import { strict as assert } from 'assert';
import { UI_NOTIFICATIONS } from '../../../shared/notifications';
import migration56 from './056';

describe('migration #56', function () {
  it('should update the version metadata', async function () {
=======
import migration56 from './056';

const BAD_TOKEN_DATA = { symbol: null, decimals: null };
const TOKEN2 = { symbol: 'TXT', address: '0x11', decimals: 18 };
const TOKEN3 = { symbol: 'TVT', address: '0x12', decimals: 18 };

describe('migration #56', () => {
  it('should update the version metadata', async () => {
>>>>>>> origin/12311-2
    const oldStorage = {
      meta: {
        version: 55,
      },
<<<<<<< HEAD
      data: {},
    };

    const newStorage = await migration56.migrate(oldStorage);
    assert.deepEqual(newStorage.meta, {
=======
      data: {
        PreferencesController: {
          tokens: [],
          accountTokens: {},
          assetImages: {},
        },
      },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.meta).toStrictEqual({
>>>>>>> origin/12311-2
      version: 56,
    });
  });

<<<<<<< HEAD
  describe('setting swaps notification to shown', function () {
    it(`should set the swaps notification to shown if swapsWelcomeMessageHasBeenShown is true and the notification state has not been initialized`, async function () {
      const oldStorage = {
        meta: {},
        data: {
          AppStateController: {
            swapsWelcomeMessageHasBeenShown: true,
          },
          foo: 'bar',
        },
      };
      const newStorage = await migration56.migrate(oldStorage);
      assert.strictEqual(
        newStorage.data.NotificationController.notifications[1].isShown,
        true,
      );
    });

    it(`should set the swaps notification to shown if swapsWelcomeMessageHasBeenShown is true and the notification state has been initialized`, async function () {
      const oldStorage = {
        meta: {},
        data: {
          AppStateController: {
            swapsWelcomeMessageHasBeenShown: true,
          },
          NotificationController: {
            notifications: {
              1: {
                isShown: false,
              },
              2: {
                isShown: false,
              },
            },
            bar: 'baz',
          },
          foo: 'bar',
        },
      };
      const newStorage = await migration56.migrate(oldStorage);
      assert.deepEqual(newStorage.data.NotificationController, {
        ...oldStorage.data.NotificationController,
        notifications: {
          ...oldStorage.data.NotificationController.notifications,
          1: {
            ...UI_NOTIFICATIONS[1],
            isShown: true,
          },
        },
      });
    });

    it(`should not set the swaps notification to shown if swapsWelcomeMessageHasBeenShown is false`, async function () {
      const oldStorage = {
        meta: {},
        data: {
          AppStateController: {
            swapsWelcomeMessageHasBeenShown: false,
          },
          NotificationController: {
            1: {
              fizz: 'buzz',
              isShown: false,
            },
            2: {
              fizz: 'buzz',
              isShown: false,
            },
          },
          foo: 'bar',
        },
      };
      const newStorage = await migration56.migrate(oldStorage);
      assert.deepEqual(
        newStorage.data.NotificationController,
        oldStorage.data.NotificationController,
      );
    });
  });

  describe('deleting swapsWelcomeMessageHasBeenShown', function () {
    it('should delete the swapsWelcomeMessageHasBeenShown property', async function () {
      const oldStorage = {
        meta: {},
        data: {
          AppStateController: {
            swapsWelcomeMessageHasBeenShown: false,
            bar: 'baz',
          },
          foo: 'bar',
        },
      };
      const newStorage = await migration56.migrate(oldStorage);
      assert.deepEqual(newStorage.data.AppStateController, { bar: 'baz' });
    });
=======
  it(`should filter out tokens without a valid address property`, async () => {
    const oldStorage = {
      meta: {},
      data: {
        PreferencesController: {
          tokens: [BAD_TOKEN_DATA, TOKEN2, BAD_TOKEN_DATA, TOKEN3],
          accountTokens: {},
          assetImages: {},
        },
      },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.data.PreferencesController.tokens).toStrictEqual([
      TOKEN2,
      TOKEN3,
    ]);
  });

  it(`should not filter any tokens when all token information is valid`, async () => {
    const oldStorage = {
      meta: {},
      data: {
        PreferencesController: {
          tokens: [TOKEN2, TOKEN3],
          accountTokens: {},
          assetImages: {},
        },
      },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.data.PreferencesController.tokens).toStrictEqual([
      TOKEN2,
      TOKEN3,
    ]);
  });

  it(`should filter out accountTokens without a valid address property`, async () => {
    const originalAccountTokens = {
      '0x1111111111111111111111111': {
        '0x1': [TOKEN2, TOKEN3, BAD_TOKEN_DATA],
        '0x3': [],
        '0x4': [BAD_TOKEN_DATA, BAD_TOKEN_DATA],
      },
      '0x1111111111111111111111112': {
        '0x1': [TOKEN2],
        '0x3': [],
        '0x4': [BAD_TOKEN_DATA, BAD_TOKEN_DATA],
      },
    };

    const oldStorage = {
      meta: {},
      data: {
        PreferencesController: {
          tokens: [],
          accountTokens: originalAccountTokens,
          assetImages: {},
        },
      },
    };

    const newStorage = await migration56.migrate(oldStorage);

    const desiredResult = { ...originalAccountTokens };
    // The last item in the array was bad and should be removed
    desiredResult['0x1111111111111111111111111']['0x1'].pop();
    // All items in 0x4 were bad
    desiredResult['0x1111111111111111111111111']['0x4'] = [];
    desiredResult['0x1111111111111111111111112']['0x4'] = [];

    expect(newStorage.data.PreferencesController.accountTokens).toStrictEqual(
      desiredResult,
    );
  });

  it(`should remove a bad assetImages key`, async () => {
    const desiredAssetImages = {
      '0x514910771af9ca656af840dff83e8264ecf986ca':
        'images/contract/chainlink.svg',
    };
    const oldStorage = {
      meta: {},
      data: {
        PreferencesController: {
          tokens: [],
          accountTokens: {},
          assetImages: { ...desiredAssetImages, undefined: null },
        },
      },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.data.PreferencesController.assetImages).toStrictEqual(
      desiredAssetImages,
    );
  });

  it(`token data with no problems should preserve all data`, async () => {
    const perfectData = {
      tokens: [TOKEN2, TOKEN3],
      accountTokens: {
        '0x1111111111111111111111111': {
          '0x1': [],
          '0x3': [TOKEN2],
        },
        '0x1111111111111111111111112': {
          '0x1': [TOKEN2, TOKEN3],
          '0x3': [],
        },
      },
    };

    const oldStorage = {
      meta: {},
      data: {
        PreferencesController: perfectData,
      },
    };

    const newStorage = await migration56.migrate(oldStorage);
    expect(newStorage.data.PreferencesController).toStrictEqual(perfectData);
>>>>>>> origin/12311-2
  });
});
