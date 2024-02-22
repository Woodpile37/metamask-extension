import { waitFor } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';

import { MESSAGE_TYPE } from '../../../../shared/constants/app';
import { renderWithProvider } from '../../../../test/lib/render-helpers';
import Confirmation from '../confirmation';

jest.mock('../../../../shared/lib/fetch-with-cache');

describe('add-ethereum-chain confirmation', () => {
  it('should match snapshot', async () => {
    const testStore = {
      metamask: {
        ...mockBaseStore.metamask,
        pendingApprovals: {
          [mockApprovalId]: {
            ...mockApproval,
            type: MESSAGE_TYPE.ADD_ETHEREUM_CHAIN,
          },
        },
      },
    };
    const store = configureMockStore(middleware)(testStore);
    const { container, getByText } = renderWithProvider(
      <Confirmation />,
      store,
    );
    await waitFor(() => {
      expect(
        getByText('MetaMask does not verify custom networks.'),
      ).toBeInTheDocument();
      expect(container.querySelector('.callout')).toBeDefined();
      expect(container).toMatchSnapshot();
    });
  });
});
