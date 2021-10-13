/**
 * Accounts can be instantiated from simple, HD or the two hardware wallet
 * keyring types. Both simple and HD are treated as default but we do special
 * case accounts managed by a hardware wallet.
 */
export const KEYRING_TYPES = {
  LEDGER: 'Ledger Hardware',
  TREZOR: 'Trezor Hardware',
};

/**
 * Used for setting the users preference for ledger transport type
 */
export const LEDGER_TRANSPORT_TYPES = {
  LIVE: 'ledgerLive',
  WEBHID: 'webhid',
};
