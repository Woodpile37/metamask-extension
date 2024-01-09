import { Suite } from 'mocha';
import { withFixtures } from '../helpers';
import FixtureBuilder from '../fixture-builder';
import { Driver } from '../webdriver/driver';

describe('Add snap account experimental settings', function (this: Suite) {
  it('switch "Enable Add account snap" to on', async function () {
    await withFixtures(
      {
        fixtures: new FixtureBuilder().build(),
        title: this.test?.fullTitle(),
        failOnConsoleError: false,
      },
      async ({ driver }: { driver: Driver }) => {
        await driver.navigate();
        await driver.fill('#password', 'correct horse battery staple');
        await driver.press('#password', driver.Key.ENTER);

        // Make sure the "Add snap account" button is not visible.
        await driver.clickElement('[data-testid="account-menu-icon"]');
        await driver.clickElement(
          '[data-testid="multichain-account-menu-popover-action-button"]',
        );
        await driver.assertElementNotPresent({
          text: 'Add account Snap',
          tag: 'button',
        });
        await driver.clickElement('.mm-box button[aria-label="Close"]');

        // Navigate to experimental settings.
        await driver.clickElement(
          '[data-testid="account-options-menu-button"]',
        );
        await driver.clickElement({ text: 'Settings', tag: 'div' });
        await driver.clickElement({ text: 'Experimental', tag: 'div' });

        // Switch "Enable Add account Snap" to on.
        await driver.clickElement(
          '[data-testid="add-account-snap-toggle-div"]',
        );

        // Make sure the "Add account Snap" button is visible.
        await driver.clickElement('[data-testid="account-menu-icon"]');
        await driver.clickElement(
          '[data-testid="multichain-account-menu-popover-action-button"]',
<<<<<<<< HEAD:test/e2e/accounts/snap-account-settings.spec.ts
========
        );
        assert.equal(
          await driver.isElementPresentAndVisible({
            text: 'Add snap account',
            tag: 'button',
          }),
          true,
>>>>>>>> 4a3d118ac1 (Squashed commit of the following:):test/e2e/accounts/settings-add-snap-account-toggle.spec.js
        );
        await driver.findElement({
          text: 'Add account Snap',
          tag: 'button',
        });
      },
    );
  });
});