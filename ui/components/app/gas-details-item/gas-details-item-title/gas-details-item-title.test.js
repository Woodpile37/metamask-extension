import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { EthAccountType, EthMethod } from '@metamask/keyring-api';

import { CHAIN_IDS } from '../../../../../shared/constants/network';
import { GasFeeContextProvider } from '../../../../contexts/gasFee';
import { renderWithProvider } from '../../../../../test/jest';
import configureStore from '../../../../store/store';

import GasDetailsItemTitle from './gas-details-item-title';

jest.mock('../../../../store/actions', () => ({
  disconnectGasFeeEstimatePoller: jest.fn(),
  getGasFeeEstimatesAndStartPolling: jest
    .fn()
    .mockImplementation(() => Promise.resolve()),
  addPollingTokenToAppState: jest.fn(),
  getGasFeeTimeEstimate: jest.fn().mockImplementation(() => Promise.resolve()),
}));

const render = () => {
  const store = configureStore({
    metamask: {
      providerConfig: { chainId: CHAIN_IDS.MAINNET },
      cachedBalances: {},
      accounts: {
        '0xAddress': {
          address: '0xAddress',
          balance: '0x176e5b6f173ebe66',
        },
      },
      identities: {
        '0xAddress': {},
      },
      selectedAddress: '0xAddress',
      internalAccounts: {
        accounts: {
          'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3': {
            address: '0xAddress',
            id: 'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3',
            metadata: {
              name: 'Test Account',
              keyring: {
                type: 'HD Key Tree',
              },
            },
            options: {},
            methods: [...Object.values(EthMethod)],
            type: EthAccountType.Eoa,
          },
        },
        selectedAccount: 'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3',
      },
    },
  });

  return renderWithProvider(
    <GasFeeContextProvider transaction={{ txParams: {} }}>
      <GasDetailsItemTitle userAcknowledgedGasMissing={false} />
    </GasFeeContextProvider>,
    store,
  );
};

describe('GasDetailsItem', () => {
  it('should render label', async () => {
    render();
    await waitFor(() => {
      expect(screen.queryByText('Gas')).toBeInTheDocument();
      expect(screen.queryByText('(estimated)')).toBeInTheDocument();
    });
  });
});
