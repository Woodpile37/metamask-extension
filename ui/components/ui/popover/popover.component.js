import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useI18nContext } from '../../../hooks/useI18nContext';

const Popover = ({
  title,
  subtitle = '',
  children,
  footer,
  footerClassName,
  onBack,
  onClose,
  className,
  mediumHeight,
  contentClassName,
  showArrow,
  CustomBackground,
<<<<<<< HEAD:ui/app/components/ui/popover/popover.component.js
  contentRef,
=======
  popoverRef,
  centerTitle,
>>>>>>> origin/12311-2:ui/components/ui/popover/popover.component.js
}) => {
  const t = useI18nContext();
  const showHeader = title || onBack || subtitle || onClose;
  return (
    <div className="popover-container">
      {CustomBackground ? (
        <CustomBackground onClose={onClose} />
      ) : (
        <div className="popover-bg" onClick={onClose} />
      )}
      <section
<<<<<<< HEAD:ui/app/components/ui/popover/popover.component.js
        className={classnames('popover-wrap', className, {
          'popover-wrap--medium-height': mediumHeight,
        })}
=======
        className={classnames('popover-wrap', className)}
        ref={popoverRef}
>>>>>>> origin/12311-2:ui/components/ui/popover/popover.component.js
      >
        {showArrow ? <div className="popover-arrow" /> : null}
        {showHeader && (
          <header className="popover-header">
            <div
              className={classnames(
                'popover-header__title',
                centerTitle ? 'center' : '',
              )}
            >
              <h2 title={title}>
                {onBack ? (
                  <button
                    className="fas fa-chevron-left popover-header__button"
                    title={t('back')}
                    onClick={onBack}
                  />
                ) : null}
                {title}
              </h2>
              {onClose ? (
                <button
                  className="fas fa-times popover-header__button"
                  title={t('close')}
                  data-testid="popover-close"
                  onClick={onClose}
                />
              ) : null}
<<<<<<< HEAD:ui/app/components/ui/popover/popover.component.js
              {title}
            </h2>
            <button
              className="fas fa-times popover-header__button"
              title={t('close')}
              data-testid="popover-close"
              onClick={onClose}
            />
          </div>
          {subtitle ? (
            <p className="popover-header__subtitle">{subtitle}</p>
          ) : null}
        </header>
=======
            </div>
            {subtitle ? (
              <p className="popover-header__subtitle">{subtitle}</p>
            ) : null}
          </header>
        )}
>>>>>>> origin/12311-2:ui/components/ui/popover/popover.component.js
        {children ? (
          <div
            className={classnames('popover-content', contentClassName)}
            ref={contentRef}
          >
            {children}
          </div>
        ) : null}
        {footer ? (
          <footer className={classnames('popover-footer', footerClassName)}>
            {footer}
          </footer>
        ) : null}
      </section>
    </div>
  );
};

Popover.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  footerClassName: PropTypes.string,
  onBack: PropTypes.func,
  onClose: PropTypes.func,
  CustomBackground: PropTypes.func,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  showArrow: PropTypes.bool,
<<<<<<< HEAD:ui/app/components/ui/popover/popover.component.js
  mediumHeight: PropTypes.bool,
  contentRef: PropTypes.shape({
    current: PropTypes.instanceOf(window.Element),
  }),
=======
  popoverRef: PropTypes.shape({
    current: PropTypes.instanceOf(window.Element),
  }),
  centerTitle: PropTypes.bool,
>>>>>>> origin/12311-2:ui/components/ui/popover/popover.component.js
};

export default class PopoverPortal extends PureComponent {
  static propTypes = Popover.propTypes;

  rootNode = document.getElementById('popover-content');

  instanceNode = document.createElement('div');

  componentDidMount() {
    if (!this.rootNode) {
      return;
    }

    this.rootNode.appendChild(this.instanceNode);
  }

  componentWillUnmount() {
    if (!this.rootNode) {
      return;
    }

    this.rootNode.removeChild(this.instanceNode);
  }

  render() {
    const children = <Popover {...this.props} />;
    return this.rootNode
      ? ReactDOM.createPortal(children, this.instanceNode)
      : children;
  }
}
