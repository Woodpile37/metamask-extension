import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageContainer from '../../../components/ui/page-container'
import { Tabs, Tab } from '../../../components/ui/tabs'
import { calcGasTotal } from '../../send/send.utils'
import { sumHexWEIsToRenderableFiat } from '../../../helpers/utils/conversions.util'
import AdvancedGasInputs from '../../../components/app/gas-customization/advanced-gas-inputs'
import BasicTabContent from '../../../components/app/gas-customization/gas-modal-page-container/basic-tab-content'
import { GAS_ESTIMATE_TYPES } from '../../../helpers/constants/common'

export default class GasModalPageContainer extends Component {
  static contextTypes = {
    t: PropTypes.func,
    trackEvent: PropTypes.func,
  }

  static propTypes = {
    insufficientBalance: PropTypes.bool,
    gasPriceButtonGroupProps: PropTypes.object,
    infoRowProps: PropTypes.shape({
      originalTotalFiat: PropTypes.string,
      originalTotalEth: PropTypes.string,
      newTotalFiat: PropTypes.string,
      newTotalChainCurrency: PropTypes.string,
      sendAmount: PropTypes.string,
      transactionFee: PropTypes.string,
      extraInfoRow: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
    }),
    onSubmit: PropTypes.func,
    cancelAndClose: PropTypes.func,
    showCustomPriceTooLowWarning: PropTypes.bool,
    disableSave: PropTypes.bool,
    customGasLimitMessage: PropTypes.string,
    customTotalSupplement: PropTypes.string,
    value: PropTypes.string,
    conversionRate: PropTypes.string,
    customGasPrice: PropTypes.string,
    customGasLimit: PropTypes.string,
    setSwapsCustomizationModalPrice: PropTypes.func,
    setSwapsCustomizationModalLimit: PropTypes.func,
    gasEstimateLoadingHasFailed: PropTypes.bool,
  }

  state = {
    gasSpeedType: '',
  }

  setGasSpeedType(gasEstimateType) {
    if (gasEstimateType === GAS_ESTIMATE_TYPES.AVERAGE) {
      this.setState({ gasSpeedType: 'average' })
    } else {
      this.setState({ gasSpeedType: 'fast' })
    }
  }

  renderBasicTabContent(gasPriceButtonGroupProps) {
    return (
      <BasicTabContent
        gasPriceButtonGroupProps={{
          ...gasPriceButtonGroupProps,
          handleGasPriceSelection: (gasPriceInHexWei, gasEstimateType) => {
            this.setGasSpeedType(gasEstimateType)
            this.props.setSwapsCustomizationModalPrice(gasPriceInHexWei)
          },
        }}
      />
    )
  }

  renderAdvancedTabContent() {
    const {
      insufficientBalance,
      showCustomPriceTooLowWarning,
      infoRowProps: { transactionFee },
      customGasLimitMessage,
      setSwapsCustomizationModalPrice,
      setSwapsCustomizationModalLimit,
      customGasPrice,
      customGasLimit,
    } = this.props

    return (
      <div className="advanced-tab">
        <div className="advanced-tab__transaction-data-summary">
          <div className="advanced-tab__transaction-data-summary__titles">
            <span>{this.context.t('newTransactionFee')}</span>
          </div>
          <div className="advanced-tab__transaction-data-summary__container">
            <div className="advanced-tab__transaction-data-summary__fee">
              {transactionFee}
            </div>
          </div>
        </div>
        <div className="advanced-tab__fee-chart">
          <div className="advanced-tab__gas-inputs">
            <AdvancedGasInputs
              updateCustomGasPrice={(updatedPrice) => {
                this.setState({ gasSpeedType: 'custom' })
                setSwapsCustomizationModalPrice(updatedPrice)
              }}
              updateCustomGasLimit={(updatedLimit) => {
                this.setState({ gasSpeedType: 'custom' })
                setSwapsCustomizationModalLimit(updatedLimit)
              }}
              customGasPrice={customGasPrice}
              customGasLimit={customGasLimit}
              insufficientBalance={insufficientBalance}
              customPriceIsSafe={!showCustomPriceTooLowWarning}
              customGasLimitMessage={customGasLimitMessage}
            />
          </div>
        </div>
      </div>
    )
  }

  renderInfoRows(
    newTotalFiat,
    newTotalChainCurrency,
    sendAmount,
    transactionFee,
    extraInfoRow,
  ) {
    return (
      <div className="gas-modal-content__info-row-wrapper">
        <div className="gas-modal-content__info-row">
          <div className="gas-modal-content__info-row__send-info">
            <span className="gas-modal-content__info-row__send-info__label">
              {this.context.t('sendAmount')}
            </span>
            <span className="gas-modal-content__info-row__send-info__value">
              {sendAmount}
            </span>
          </div>
          <div className="gas-modal-content__info-row__transaction-info">
            <span className="gas-modal-content__info-row__transaction-info__label">
              {this.context.t('transactionFee')}
            </span>
            <span className="gas-modal-content__info-row__transaction-info__value">
              {transactionFee}
            </span>
          </div>
          {extraInfoRow && (
            <div className="gas-modal-content__info-row__transaction-info">
              <span className="gas-modal-content__info-row__transaction-info__label">
                {extraInfoRow.label}
              </span>
              <span className="gas-modal-content__info-row__transaction-info__value">
                {extraInfoRow.value}
              </span>
            </div>
          )}
          <div className="gas-modal-content__info-row__total-info">
            <span className="gas-modal-content__info-row__total-info__label">
              {this.context.t('newTotal')}
            </span>
            <span className="gas-modal-content__info-row__total-info__value">
              {newTotalChainCurrency}
            </span>
          </div>
          <div className="gas-modal-content__info-row__fiat-total-info">
            <span className="gas-modal-content__info-row__fiat-total-info__value">
              {newTotalFiat}
            </span>
          </div>
        </div>
      </div>
    )
  }

  renderTabs() {
    const {
      gasPriceButtonGroupProps,
      infoRowProps: {
        newTotalFiat,
        newTotalChainCurrency,
        sendAmount,
        transactionFee,
        extraInfoRow,
      },
      gasEstimateLoadingHasFailed,
    } = this.props

    const basicTabInfo = {
      name: this.context.t('basic'),
      content: this.renderBasicTabContent({
        ...gasPriceButtonGroupProps,
        handleGasPriceSelection: this.props.setSwapsCustomizationModalPrice,
      }),
    }
    const advancedTabInfo = {
      name: this.context.t('advanced'),
      content: this.renderAdvancedTabContent(),
    }

    const tabsToRender = gasEstimateLoadingHasFailed
      ? [advancedTabInfo]
      : [basicTabInfo, advancedTabInfo]

    return (
      <Tabs>
        {tabsToRender.map(({ name, content }, i) => (
          <Tab name={name} key={`gas-modal-tab-${i}`}>
            <div className="gas-modal-content">
              {content}
              {this.renderInfoRows(
                newTotalFiat,
                newTotalChainCurrency,
                sendAmount,
                transactionFee,
                extraInfoRow,
              )}
            </div>
          </Tab>
        ))}
      </Tabs>
    )
  }

  render() {
    const {
      cancelAndClose,
      onSubmit,
      disableSave,
      customGasPrice,
      customGasLimit,
    } = this.props

    return (
      <div className="gas-modal-page-container">
        <PageContainer
          title={this.context.t('customGas')}
          subtitle={this.context.t('customGasSubTitle')}
          tabsComponent={this.renderTabs()}
          disabled={disableSave}
          onCancel={() => cancelAndClose()}
          onClose={() => cancelAndClose()}
          onSubmit={() => {
            const newSwapGasTotal = calcGasTotal(customGasLimit, customGasPrice)

            this.context.trackEvent({
              event: 'Gas Fees Changed',
              category: 'swaps',
              properties: {
                speed_set: this.state.gasSpeedType,
                gas_fees: sumHexWEIsToRenderableFiat(
                  [
                    this.props.value,
                    newSwapGasTotal,
                    this.props.customTotalSupplement,
                  ],
                  'usd',
                  this.props.conversionRate,
                )?.slice(1),
              },
            })
            onSubmit(customGasLimit, customGasPrice)
          }}
          submitText={this.context.t('save')}
          headerCloseText={this.context.t('close')}
          hideCancel
        />
      </div>
    )
  }
}