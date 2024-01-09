import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageContainerContent from '../../../components/ui/page-container/page-container-content.component';
import Dialog from '../../../components/ui/dialog';
import NicknamePopovers from '../../../components/app/modals/nickname-popovers';
import {
  ETH_GAS_PRICE_FETCH_WARNING_KEY,
  GAS_PRICE_FETCH_FAILURE_ERROR_KEY,
  GAS_PRICE_EXCESSIVE_ERROR_KEY,
  INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY,
} from '../../../helpers/constants/error-keys';
import { ASSET_TYPES } from '../../../../shared/constants/transaction';
import { hexWEIToDecETH } from '../../../helpers/utils/conversions.util';
import GasDisplay from '../gas-display/gas-display.component';
import SendAmountRow from './send-amount-row';
import SendHexDataRow from './send-hex-data-row';
import SendAssetRow from './send-asset-row';
import SendGasRow from './send-gas-row';

export default class SendContent extends Component {
  state = {
    showNicknamePopovers: false,
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  static propTypes = {
    showHexData: PropTypes.bool,
    contact: PropTypes.object,
    isOwnedAccount: PropTypes.bool,
    warning: PropTypes.string,
    error: PropTypes.string,
    gasIsExcessive: PropTypes.bool.isRequired,
    isEthGasPrice: PropTypes.bool,
    noGasPrice: PropTypes.bool,
    networkOrAccountNotSupports1559: PropTypes.bool,
    getIsBalanceInsufficient: PropTypes.bool,
    asset: PropTypes.object,
    to: PropTypes.string,
    assetError: PropTypes.string,
    draftTransaction: PropTypes.object,
    hexMaximumTransactionFee: PropTypes.string,
    hexMinimumTransactionFee: PropTypes.string,
    hexTransactionAmount: PropTypes.string,
    hexTransactionTotal: PropTypes.string,
    nativeCurrency: PropTypes.string,
    isBuyableChain: PropTypes.bool,
    chainId: PropTypes.string,
    showBuyModal: PropTypes.func,
    showAccountDetails: PropTypes.func,
    useNonceField: PropTypes.bool,
    useNativeCurrencyAsPrimaryCurrency: PropTypes.bool,
  };

  render() {
    const {
      warning,
      error,
      gasIsExcessive,
      isEthGasPrice,
      noGasPrice,
      networkOrAccountNotSupports1559,
      getIsBalanceInsufficient,
      asset,
      assetError,
      draftTransaction,
      hexMaximumTransactionFee,
      hexMinimumTransactionFee,
      hexTransactionAmount,
      hexTransactionTotal,
      nativeCurrency,
      useNonceField,
      useNativeCurrencyAsPrimaryCurrency,
      isBuyableChain,
      chainId,
      showBuyModal,
      showAccountDetails,
    } = this.props;

    let gasError;
    if (gasIsExcessive) {
      gasError = GAS_PRICE_EXCESSIVE_ERROR_KEY;
    } else if (noGasPrice) {
      gasError = GAS_PRICE_FETCH_FAILURE_ERROR_KEY;
    } else if (getIsBalanceInsufficient) {
      gasError = INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY;
    }
    const showHexData =
      this.props.showHexData &&
      asset.type !== ASSET_TYPES.TOKEN &&
      asset.type !== ASSET_TYPES.COLLECTIBLE;

    const title = '';
    const ethTransactionTotalMaxAmount = Number(
      hexWEIToDecETH(hexMaximumTransactionFee),
    );

    return (
      <PageContainerContent>
        <div className="send-v2__form">
          {assetError ? this.renderError(assetError) : null}
          {isEthGasPrice
            ? this.renderWarning(ETH_GAS_PRICE_FETCH_WARNING_KEY)
            : null}
          {error ? this.renderError(error) : null}
          {warning ? this.renderWarning() : null}
          {this.maybeRenderAddContact()}
          <SendAssetRow />
          <SendAmountRow />
          {networkOrAccountNotSupports1559 ? <SendGasRow /> : null}
          {showHexData ? <SendHexDataRow /> : null}
          <GasDisplay
            draftTransaction={draftTransaction}
            hexMaximumTransactionFee={hexMaximumTransactionFee}
            hexMinimumTransactionFee={hexMinimumTransactionFee}
            hexTransactionAmount={hexTransactionAmount}
            hexTransactionTotal={hexTransactionTotal}
            primaryTotalTextOverrideMaxAmount={`${title} + ${ethTransactionTotalMaxAmount} ${nativeCurrency}`}
            useNonceField={useNonceField}
            useNativeCurrencyAsPrimaryCurrency={
              useNativeCurrencyAsPrimaryCurrency
            }
            isBuyableChain={isBuyableChain}
            nativeCurrency={nativeCurrency}
            chainId={chainId}
            showBuyModal={showBuyModal}
            showAccountDetails={showAccountDetails}
            gasError={gasError}
          />
        </div>
      </PageContainerContent>
    );
  }

  maybeRenderAddContact() {
    const { t } = this.context;
    const { isOwnedAccount, contact = {}, to } = this.props;
    const { showNicknamePopovers } = this.state;

    if (isOwnedAccount || contact.name) {
      return null;
    }

    return (
      <>
        <Dialog
          type="message"
          className="send__dialog"
          onClick={() => this.setState({ showNicknamePopovers: true })}
        >
          {t('newAccountDetectedDialogMessage')}
        </Dialog>
        {showNicknamePopovers ? (
          <NicknamePopovers
            onClose={() => this.setState({ showNicknamePopovers: false })}
            address={to}
          />
        ) : null}
      </>
    );
  }

  renderWarning(gasWarning = '') {
    const { t } = this.context;
    const { warning } = this.props;
    return (
      <Dialog type="warning" className="send__error-dialog">
        {gasWarning === '' ? t(warning) : t(gasWarning)}
      </Dialog>
    );
  }

  renderError(error) {
    const { t } = this.context;
    return (
      <Dialog type="error" className="send__error-dialog">
        {t(error)}
      </Dialog>
    );
  }
}
