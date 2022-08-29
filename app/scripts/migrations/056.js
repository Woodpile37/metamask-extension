import { cloneDeep } from 'lodash';
<<<<<<< HEAD
import { UI_NOTIFICATIONS } from '../../../shared/notifications';

const SWAPS_NOTIFICATION_ID = 1;
=======
>>>>>>> origin/12311-2

const version = 56;

/**
<<<<<<< HEAD
 * Set the new swaps notification isShown property to true if swapsWelcomeMessageHasBeenShown is true, and delete the swapsWelcomeMessageHasBeenShown property in either case
=======
 * Remove tokens that don't have an address due to
 * lack of previous addToken validation.  Also removes
 * an unwanted, undefined image property
>>>>>>> origin/12311-2
 */
export default {
  version,
  async migrate(originalVersionedData) {
    const versionedData = cloneDeep(originalVersionedData);
    versionedData.meta.version = version;
<<<<<<< HEAD
    const state = versionedData.data;
    versionedData.data = transformState(state);
    return versionedData;
  },
};

function transformState(state) {
  const { swapsWelcomeMessageHasBeenShown } = state?.AppStateController || {};
  let notifications = state.NotificationController?.notifications;

  if (swapsWelcomeMessageHasBeenShown) {
    notifications = {
      ...notifications,
      [SWAPS_NOTIFICATION_ID]: {
        ...UI_NOTIFICATIONS[SWAPS_NOTIFICATION_ID],
        isShown: true,
      },
    };
    state.NotificationController = {
      ...state.NotificationController,
      notifications,
    };
  }

  delete state.AppStateController?.swapsWelcomeMessageHasBeenShown;

  return state;
}
=======

    const { PreferencesController } = versionedData.data;

    if (Array.isArray(PreferencesController?.tokens)) {
      PreferencesController.tokens = PreferencesController.tokens.filter(
        ({ address }) => address,
      );
    }

    if (
      PreferencesController?.accountTokens &&
      typeof PreferencesController.accountTokens === 'object'
    ) {
      Object.keys(PreferencesController.accountTokens).forEach((account) => {
        const chains = Object.keys(
          PreferencesController.accountTokens[account],
        );
        chains.forEach((chain) => {
          PreferencesController.accountTokens[account][
            chain
          ] = PreferencesController.accountTokens[account][chain].filter(
            ({ address }) => address,
          );
        });
      });
    }

    if (
      PreferencesController?.assetImages &&
      'undefined' in PreferencesController.assetImages
    ) {
      delete PreferencesController.assetImages.undefined;
    }

    return versionedData;
  },
};
>>>>>>> origin/12311-2
