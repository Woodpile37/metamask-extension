const { strict: assert } = require('assert');
const {
  defaultGanacheOptions,
  withFixtures,
  unlockWallet,
} = require('../helpers');
const FixtureBuilder = require('../fixture-builder');

describe('Advanced Settings', function () {
  it('should show conversion on test network when activated', async function () {
    await withFixtures(
      {
        dapp: true,
        fixtures: new FixtureBuilder().build(),
        ganacheOptions: defaultGanacheOptions,
        title: this.test.fullTitle(),
      },
      async ({ driver }) => {
        await unlockWallet(driver);
        // TODO: Remove this test since we are not showing any secondary balance
        if (process.env.MULTICHAIN) {
          return;
        }
        await driver.clickElement(
          '[data-testid="account-options-menu-button"]',
        );
        await driver.clickElement({ text: 'Settings', tag: 'div' });
        await driver.clickElement({ text: 'Advanced', tag: 'div' });

        await driver.clickElement(
          '[data-testid="advanced-setting-show-testnet-conversion"] label',
        );

        await driver.clickElement(
          '.settings-page__header__title-container__close-button',
        );

<<<<<<< HEAD
        const secondaryCurrency = await driver.findElement(
          '[data-testid="eth-overview__secondary-currency"] .currency-display-component__suffix',
        );
        assert.equal(
          await secondaryCurrency.getText(),
          'USD',
          `Secondary currency is not present`,
=======
        // Ropsten
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Ropsten Test Network', tag: 'span'}
        )

        let secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, true);

        // Kovan
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Kovan Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, true);

        // Rinkeby
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Rinkeby Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, true);

        // Goerli
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Goerli Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
>>>>>>> efda2b9fa8 (Complete testnet conversion for all testnets)
        );
      },
    );
  });

  it('should not show conversion on test network when deactivated', async function () {
    await withFixtures(
      {
        dapp: true,
        fixtures: new FixtureBuilder().build(),
        ganacheOptions: defaultGanacheOptions,
        title: this.test.fullTitle(),
      },
      async ({ driver }) => {
        await unlockWallet(driver);

        await driver.clickElement('.account-menu__icon');
        await driver.clickElement({ text: 'Settings', tag: 'div' });
        await driver.clickElement({ text: 'Advanced', tag: 'div' });

        await driver.clickElement(
          '[data-testid="advanced-setting-show-testnet-conversion"] label',
        );
        
        await driver.clickElement(
          '.settings-page__header__title-container__close-button',
        );

        // Ropsten
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Ropsten Test Network', tag: 'span'}
        )

        let secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
<<<<<<< HEAD
        assert.equal(secondaryCurrency, false, `Secondary currency is present`);
=======
        assert.equal(await secondaryCurrency, false);

        // Kovan
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Kovan Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, false);

        // Rinkeby
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Rinkeby Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, false);

        // Goerli
        await driver.clickElement(
          '.app-header__network-component-wrapper div',
        );
        await driver.clickElement(
          {text: 'Goerli Test Network', tag: 'span'}
        )

        secondaryCurrency = await driver.isElementPresent(
          '[data-testid="eth-overview__secondary-currency"]',
        );
        assert.equal(await secondaryCurrency, false);
>>>>>>> efda2b9fa8 (Complete testnet conversion for all testnets)
      },
    );
  });
});
