/**
 * A note about the existence of both singular and plural variable names here:
 * When dealing with a literal property name, e.g. ALIGN_ITEMS, the constant
 * should match the property. When detailing a collection of things, it should
 * match the plural form of the thing. e.g. COLORS, TYPOGRAPHY
 */

/**
 * !!! DEPRECATED DO NOT USE!!!
 */
const DEPRECATED_COLORS = {
  UI1: 'ui-1',
  UI2: 'ui-2',
  UI3: 'ui-3',
  UI4: 'ui-4',
  BLACK: 'black',
  GREY: 'grey',
  NEUTRAL_GREY: 'neutral-grey',
  WHITE: 'white',
  PRIMARY1: 'primary-1',
  PRIMARY2: 'primary-2',
  PRIMARY3: 'primary-3',
  SECONDARY1: 'secondary-1',
  SECONDARY2: 'secondary-2',
  SECONDARY3: 'secondary-3',
  SUCCESS1: 'success-1',
  SUCCESS2: 'success-2',
  SUCCESS3: 'success-3',
  ERROR1: 'error-1',
  ERROR2: 'error-2',
  ERROR3: 'error-3',
  ALERT1: 'alert-1',
  ALERT2: 'alert-2',
  ALERT3: 'alert-3',
};

const BASE_COLORS = {
  BACKGROUND_DEFAULT: 'background-default',
  BACKGROUND_ALTERNATIVE: 'background-alternative',
  TEXT_DEFAULT: 'text-default',
  TEXT_ALTERNATIVE: 'text-alternative',
  TEXT_MUTED: 'text-muted',
  ICON_DEFAULT: 'icon-default',
  ICON_MUTED: 'icon-muted',
  BORDER_DEFAULT: 'border-default',
  BORDER_MUTED: 'border-muted',
  OVERLAY_DEFAULT: 'overlay-default',
  OVERLAY_INVERSE: 'overlay-inverse',
  PRIMARY_DEFAULT: 'primary-default',
  PRIMARY_ALTERNATIVE: 'primary-alternative',
  PRIMARY_MUTED: 'primary-muted',
  PRIMARY_INVERSE: 'primary-inverse',
  PRIMARY_DISABLED: 'primary-disabled',
  SECONDARY_DEFAULT: 'secondary-default',
  SECONDARY_ALTERNATIVE: 'secondary-alternative',
  SECONDARY_MUTED: 'secondary-muted',
  SECONDARY_INVERSE: 'secondary-inverse',
  SECONDARY_DISABLED: 'secondary-disabled',
  ERROR_DEFAULT: 'error-default',
  ERROR_ALTERNATIVE: 'error-alternative',
  ERROR_MUTED: 'error-muted',
  ERROR_INVERSE: 'error-inverse',
  ERROR_DISABLED: 'error-disabled',
  WARNING_DEFAULT: 'warning-default',
  WARNING_ALTERNATIVE: 'warning-alternative',
  WARNING_MUTED: 'warning-muted',
  WARNING_INVERSE: 'warning-inverse',
  WARNING_DISABLED: 'warning-disabled',
  SUCCESS_DEFAULT: 'success-default',
  SUCCESS_ALTERNATIVE: 'success-alternative',
  SUCCESS_MUTED: 'success-muted',
  SUCCESS_INVERSE: 'success-inverse',
  SUCCESS_DISABLED: 'success-disabled',
  INFO_DEFAULT: 'info-default',
  INFO_ALTERNATIVE: 'info-alternative',
  INFO_MUTED: 'info-muted',
  INFO_INVERSE: 'info-inverse',
  INFO_DISABLED: 'info-disabled',
  MAINNET: 'mainnet',
  ROPSTEN: 'ropsten',
  KOVAN: 'kovan',
  RINKEBY: 'rinkeby',
  GOERLI: 'goerli',
  TRANSPARENT: 'transparent',
  LOCALHOST: 'localhost',
};

export const COLORS = new Proxy(
  { ...DEPRECATED_COLORS, ...BASE_COLORS },
  {
    get(target, prop) {
      if (prop in DEPRECATED_COLORS) {
        console.warn('DEPRECATED COLOR WARNING: ', prop);
      }
      return target[prop];
    },
  },
);

export const TYPOGRAPHY = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  H7: 'h7',
  H8: 'h8',
  H9: 'h9',
  Paragraph: 'p',
};

const NONE = 'none';

export const SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  NONE,
};

export const BORDER_STYLE = {
  DASHED: 'dashed',
  SOLID: 'solid',
  DOTTED: 'dotted',
  DOUBLE: 'double',
  NONE,
};

const FLEX_END = 'flex-end';
const FLEX_START = 'flex-start';
const CENTER = 'center';

export const ALIGN_ITEMS = {
  FLEX_START,
  FLEX_END,
  CENTER,
  BASELINE: 'baseline',
  STRETCH: 'stretch',
};

export const JUSTIFY_CONTENT = {
  FLEX_START,
  FLEX_END,
  CENTER,
  SPACE_AROUND: 'space-around',
  SPACE_BETWEEN: 'space-between',
  SPACE_EVENLY: 'space-evenly',
};

export const FLEX_DIRECTION = {
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
  COLUMN: 'column',
  COLUMN_REVERSE: 'column-reverse',
};

export const FLEX_WRAP = {
  WRAP: 'wrap',
  WRAP_REVERSE: 'wrap-reverse',
  NO_WRAP: 'nowrap',
};

export const DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  GRID: 'grid',
  INLINE_BLOCK: 'inline-block',
  INLINE_FLEX: 'inline-flex',
  INLINE_GRID: 'inline-grid',
  LIST_ITEM: 'list-item',
};

export const FRACTIONS = {
  HALF: '1/2',
  ONE_THIRD: '1/3',
  TWO_THIRDS: '2/3',
  ONE_FOURTH: '1/4',
  TWO_FOURTHS: '2/4',
  THREE_FOURTHS: '3/4',
  ONE_FIFTH: '1/5',
  TWO_FIFTHS: '2/5',
  THREE_FIFTHS: '3/5',
  FOUR_FIFTHS: '4/5',
  ONE_SIXTH: '1/6',
  TWO_SIXTHS: '2/6',
  THREE_SIXTHS: '3/6',
  FOUR_SIXTHS: '4/6',
  FIVE_SIXTHS: '5/6',
  ONE_TWELFTH: '1/12',
  TWO_TWELFTHS: '2/12',
  THREE_TWELFTHS: '3/12',
  FOUR_TWELFTHS: '4/12',
  FIVE_TWELFTHS: '5/12',
  SIX_TWELFTHS: '6/12',
  SEVEN_TWELFTHS: '7/12',
  EIGHT_TWELFTHS: '8/12',
  NINE_TWELFTHS: '9/12',
  TEN_TWELFTHS: '10/12',
  ELEVEN_TWELFTHS: '11/12',
};

export const BLOCK_SIZES = {
  ...FRACTIONS,
  SCREEN: 'screen',
  MAX: 'max',
  MIN: 'min',
  FULL: 'full',
};

export const TEXT_ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
  END: 'end',
};

export const FONT_WEIGHT = {
  BOLD: 'bold',
  NORMAL: 'normal',
};

export const OVERFLOW_WRAP = {
  BREAK_WORD: 'break-word',
  NORMAL: 'normal',
};

export const FONT_STYLE = {
  ITALIC: 'italic',
  NORMAL: 'normal',
};

export const SEVERITIES = {
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};

export const RESIZE = {
  NONE: 'none',
  BOTH: 'both',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  INITIAL: 'initial',
  INHERIT: 'inherit',
};
