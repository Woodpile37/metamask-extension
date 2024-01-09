import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import classnames from 'classnames';
import { useI18nContext } from '../../../hooks/useI18nContext';
import QrView from '../../../components/ui/qr-code';
import ExportTextContainer from '../../../components/ui/export-text-container';
import Box from '../../../components/ui/box';
import Typography from '../../../components/ui/typography';
import {
  DISPLAY,
  JUSTIFY_CONTENT,
  FONT_WEIGHT,
  TYPOGRAPHY,
  COLORS,
} from '../../../helpers/constants/design-system';
import { DEFAULT_ROUTE } from '../../../helpers/constants/routes';

export default function RevealSeedContent({ seedWords }) {
  const t = useI18nContext();
  const history = useHistory();
  const [showTextViewSPR, setShowTextViewSPR] = useState(true);

  const [tabHasFocus, setTabHasFocus] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      setTabHasFocus(true);
    };

    const handleBlur = () => {
      setTabHasFocus(false);
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    !tabHasFocus && history.push(DEFAULT_ROUTE);
  }, [history, tabHasFocus]);

  return (
    <Box className="reveal-seed__container">
      <Box display={DISPLAY.FLEX} justifyContent={JUSTIFY_CONTENT.SPACE_AROUND}>
        <div
          className={classnames('reveal-seed__buttons', {
            'reveal-seed__buttons__active': showTextViewSPR,
          })}
          onClick={() => setShowTextViewSPR(true)}
        >
          <Typography
            variant={TYPOGRAPHY.H6}
            fontWeight={FONT_WEIGHT.BOLD}
            className={classnames('reveal-seed__button', {
              'reveal-seed__button__active': showTextViewSPR,
            })}
          >
            {t('text').toUpperCase()}
          </Typography>
        </div>
        <div
          className={classnames('reveal-seed__buttons', {
            'reveal-seed__buttons__active': !showTextViewSPR,
          })}
          onClick={() => setShowTextViewSPR(false)}
        >
          <Typography
            variant={TYPOGRAPHY.H6}
            fontWeight={FONT_WEIGHT.BOLD}
            className={classnames('reveal-seed__button', {
              'reveal-seed__button__active': !showTextViewSPR,
            })}
          >
            {t('qrCode').toUpperCase()}
          </Typography>
        </div>
      </Box>
      {showTextViewSPR ? (
        <Box>
          <Typography
            variant={TYPOGRAPHY.H6}
            fontWeight={FONT_WEIGHT.BOLD}
            color={COLORS.BLACK}
            boxProps={{ marginTop: 4 }}
          >
            {t('yourSecretSeedPhrase')}
          </Typography>
          <ExportTextContainer text={seedWords} />
        </Box>
      ) : (
        <QrView
          Qr={{
            data: seedWords,
            isHexAddress: false,
          }}
        />
      )}
    </Box>
  );
}

RevealSeedContent.propTypes = {
  seedWords: PropTypes.string.isRequired,
};
