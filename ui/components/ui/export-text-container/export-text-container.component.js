import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../hooks/useI18nContext';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { clearClipboard } from '../../../helpers/utils/util';
import Copy from '../icon/copy-icon.component';

function ExportTextContainer({ text = '' }) {
  const t = useI18nContext();
  const [copied, handleCopy] = useCopyToClipboard();

  return (
    <div className="export-text-container">
      <div className="export-text-container__text-container">
        <div className="export-text-container__text notranslate">{text}</div>
      </div>
      <div className="export-text-container__buttons-container">
        <div
          className="export-text-container__button export-text-container__button--copy"
          onClick={() => {
            handleCopy(text);
            setTimeout(async () => {
              const clipText = await window.navigator.clipboard.readText();
              if (text === clipText) {
                clearClipboard();
              }
            }, 60000);
          }}
        >
          <Copy size={17} color="var(--color-primary-default)" />
          <div className="export-text-container__button-text">
            {copied ? t('copiedForMinute') : t('copyToClipboard')}
          </div>
        </div>
      </div>
    </div>
  );
}

ExportTextContainer.propTypes = {
  text: PropTypes.string,
};

export default React.memo(ExportTextContainer);
