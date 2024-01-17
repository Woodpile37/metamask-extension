import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  displayWarning,
  setFeatureFlag,
<<<<<<< HEAD
  showModal,
=======
  setShowExtensionInFullSizeView,
>>>>>>> circle-retry
  setShowFiatConversionOnTestnetsPreference,
  setAutoLockTimeLimit,
  setThreeBoxSyncingPermission,
  turnThreeBoxSyncingOnAndInitialize,
  setUseNonceField,
  setIpfsGateway,
} from '../../../store/actions';
import { getPreferences } from '../../../selectors';
import AdvancedTab from './advanced-tab.component';

export const mapStateToProps = (state) => {
  const {
    appState: { warning },
    metamask,
  } = state;
  const {
    featureFlags: { sendHexData, advancedInlineGas } = {},
    threeBoxSyncingAllowed,
    threeBoxDisabled,
    useNonceField,
    ipfsGateway,
  } = metamask;
<<<<<<< HEAD
  const { showFiatInTestnets, autoLockTimeLimit } = getPreferences(state);
=======
  const {
    showFiatInTestnets,
    showTestNetworks,
    showExtensionInFullSizeView,
    autoLockTimeLimit = DEFAULT_AUTO_LOCK_TIME_LIMIT,
  } = getPreferences(state);
>>>>>>> circle-retry

  return {
    warning,
    sendHexData,
    advancedInlineGas,
    showFiatInTestnets,
<<<<<<< HEAD
=======
    showTestNetworks,
    showExtensionInFullSizeView,
>>>>>>> circle-retry
    autoLockTimeLimit,
    threeBoxSyncingAllowed,
    threeBoxDisabled,
    useNonceField,
    ipfsGateway,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setHexDataFeatureFlag: (shouldShow) =>
      dispatch(setFeatureFlag('sendHexData', shouldShow)),
    displayWarning: (warning) => dispatch(displayWarning(warning)),
    showResetAccountConfirmationModal: () =>
      dispatch(showModal({ name: 'CONFIRM_RESET_ACCOUNT' })),
    setAdvancedInlineGasFeatureFlag: (shouldShow) =>
      dispatch(setFeatureFlag('advancedInlineGas', shouldShow)),
    setUseNonceField: (value) => dispatch(setUseNonceField(value)),
    setShowFiatConversionOnTestnetsPreference: (value) => {
      return dispatch(setShowFiatConversionOnTestnetsPreference(value));
    },
<<<<<<< HEAD
=======
    setShowTestNetworks: (value) => {
      return dispatch(setShowTestNetworks(value));
    },
    setShowExtensionInFullSizeView: (value) => {
      return dispatch(setShowExtensionInFullSizeView(value));
    },
>>>>>>> circle-retry
    setAutoLockTimeLimit: (value) => {
      return dispatch(setAutoLockTimeLimit(value));
    },
    setThreeBoxSyncingPermission: (newThreeBoxSyncingState) => {
      if (newThreeBoxSyncingState) {
        dispatch(turnThreeBoxSyncingOnAndInitialize());
      } else {
        dispatch(setThreeBoxSyncingPermission(newThreeBoxSyncingState));
      }
    },
    setIpfsGateway: (value) => {
      return dispatch(setIpfsGateway(value));
    },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(AdvancedTab);
