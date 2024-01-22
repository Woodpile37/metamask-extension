import React from 'react';
import { action } from '@storybook/addon-actions';
import { EthAccountType, EthMethod } from '@metamask/keyring-api';
import ConnectedAccounts from './connected-accounts.component';

export default {
  title: 'Pages/ConnectedAccounts',
};

const subjectMetadata = {
  'https://snaps.metamask.io/': {
    extensionId: null,
    iconUrl: null,
    name: 'Starknet',
    origin: 'npm:@consensys/starknet-snap',
    subjectType: 'snap',
    svgIcon: '<svg>...</svg>',
  },
  'local:http://localhost:8080/': {
    extensionId: null,
    iconUrl: null,
    name: 'MetaMask Example Snap',
    origin: 'local:http://localhost:8080/',
    subjectType: 'snap',
    svgIcon: '<svg>...</svg>',
    version: '0.6.0',
  },
};

const permissionSubjects = {
  origin: 'https://snaps.metamask.io',
  permissions: {
    wallet_snap: {
      caveats: [
        {
          type: 'snapIds',
          value: {
            'npm:@consensys/starknet-snap': {
              version: '2.1.0',
            },
            'npm:@pianity/arsnap': {
              version: '0.2.2',
            },
            'npm:tezos-metamask-snap': {
              version: '1.0.1',
            },
          },
        },
      ],
      date: 1695297309455,
      id: 'rbS-Jp76heHR4y3Y1OUFQ',
      invoker: 'https://snaps.metamask.io',
      parentCapability: 'wallet_snap',
    },
  },
};

const accounts = [
  {
    address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
    id: 'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3',
    metadata: {
      name: 'Account 1',
      keyring: {
        type: 'HD Key Tree',
      },
    },
    options: {},
    methods: [...Object.values(EthMethod)],
    type: EthAccountType.Eoa,
  },
  {
    address: '0xec1adf982415d2ef5ec55899b9bfb8bc0f29251b',
    id: '07c2cfec-36c9-46c4-8115-3836d3ac9047',
    metadata: {
      name: 'Test Account 2',
      keyring: {
        type: 'HD Key Tree',
      },
    },
    options: {},
    methods: [...Object.values(EthMethod)],
    type: EthAccountType.Eoa,
  },
];

export const DefaultStory = () => {
  return (
    <ConnectedAccounts
      activeTabOrigin="https://metamask.github.io"
      accountToConnect={accounts[0]}
      connectAccount={action('Account Connected')}
      connectedAccounts={accounts}
      removePermittedAccount={action('Account Removed')}
      setSelectedAddress={action('Selected Address Changed')}
      originOfActiveTab="https://snaps.metamask.io/"
      subjectMetadata={subjectMetadata}
      permissionSubjects={permissionSubjects}
    />
  );
};

DefaultStory.storyName = 'Default';
