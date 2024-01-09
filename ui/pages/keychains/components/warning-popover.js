import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  BLOCK_SIZES,
  TYPOGRAPHY,
} from '../../../helpers/constants/design-system';
import Box from '../../../components/ui/box';
import Button from '../../../components/ui/button';
import { useI18nContext } from '../../../hooks/useI18nContext';
import Typography from '../../../components/ui/typography';
import Popover from '../../../components/ui/popover';
import HoldToRevealButton from '../../../components/app/hold-to-reveal-button/hold-to-reveal-button';

export default function WarningPopover({ onClose, onClick }) {
  const t = useI18nContext();
  const popoverRef = useRef();

  return (
    <Popover
      className="warning-popover"
      title={t('secretRecoveryPhrasePopoverTitle')}
      onClose={onClose}
      popoverRef={popoverRef}
    >
      <Box padding={[0, 6, 6, 6]}>
        <Typography
          variant={TYPOGRAPHY.H6}
          fontWeight={400}
          boxProps={{ padding: 0, marginBottom: 3 }}
        >
          {t('secretRecoveryPhrasePopoverDescription', [
            <b key="popover_bold">
              {t('secretRecoveryPhrasePopoverDescriptionBold')}
            </b>,
          ])}
        </Typography>
        <Typography
          variant={TYPOGRAPHY.H6}
          fontWeight={400}
          boxProps={{ padding: 0 }}
        >
          {t('secretRecoveryPhrasePopoverDontShareDescription', [
            <b key="dont_share_bold">
              {t('secretRecoveryPhrasePopoverDontShareBold')}
            </b>,
            <Button
              key="secret_recovery_phrase_link"
              type="link"
              href="https://metamask.zendesk.com/hc/en-us/articles/4407169552667-Scammers-and-Phishers-Rugpulls-and-airdrop-scams"
              rel="noopener noreferrer"
              target="_blank"
              className="settings-page__inline-link"
            >
              {t('secretRecoveryPhrasePopoverDontShareLink')}
            </Button>,
          ])}
        </Typography>
        <Box width={BLOCK_SIZES.THREE_FOURTHS} margin={[4, 'auto', 0, 'auto']}>
          <HoldToRevealButton
            buttonText={t('holdToRevealSRP')}
            onLongPressed={onClick}
          />
        </Box>
      </Box>
    </Popover>
  );
}

WarningPopover.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
