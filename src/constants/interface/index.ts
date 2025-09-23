export interface IColor {
  LOGO: string;
  TRANSPARENT: 'transparent';
  Text: {
    PRIMARY: string;
    ACCENT: string;
    DESCRIPTION: string;
    ERROR: string;
    THEME: string;
    LIGHT_THEME: string;
    DISABLED: string;
    ICON_BUTTON: string;
    LIGHT_DISABLED: string;
    LIGHT_DESCRIPTION: string;
    AMOUNT: string;
    LIGHT_AMOUNT: string;
    AVACADO: string;
    Chip: {
      ACTIVE: string;
      INACTIVE: string;
    };
  };
  TextInput: {
    VALUES: string;
    PLACEHOLDER: string;
    CURSOR: string;
    DEFAULT: string;
  };
  Icon: {
    PRIMARY: string;
    ACCENT: string;
    THEME: string;
    BLENDING: string;
    ERROR: string;
    DISABLED: string;
    TabBar: {
      ACTIVE: string;
      INACTIVE: string;
    };
    ACCORDION: string;
    FORWARD_ARROW: string;
  };
  Button: {
    PRIMARY: string;
    ACCENT: string;
    SECONDARY_BLUE: string;
    DISABLED: string;
    ACCENT_BORDER: string;
    DARK_DISABLED: string;
    BLACK: string;
    ERROR: string;
    DESCRIPTION_ICON: string;
    LIGHT_RED: string;
    LIGHT_GRAY: string;
    BUTTON_TEXT: string;
    FACEBOOK: string;
  };
  Background: {
    PRIMARY: string;
    AVATAR_EDIT: string;
    ICON_BUTTON: string;
    LIGHT_THEME: string;
    THEME: string;
    NOTIFICATION: string;
    BLACK_TRANSPARENT: string;
    BLACK_BUTTON: string;
    LINE: string;
    BIOMETRICS: string;
    ICON: string;
    TAB_BAR: string;
    REDUCED_THEME: string;
    SUB_SECTION: string;
    TEXT_INPUT: string;
    BACK_BUTTON: string;
    HELPER: string;
    WEEKDAYS: string;
    DATE_CIRCLE: string;
    DOCUMENT_DEFAULT: string;
    DELETE_ICON: string;
    WARNING: string;
    MULTI_SELECT_CARD: string;
    SLIDER: string;
    SWIPE_CARD: string;
    SWIPE_CARD_DELETE: string;
    LIGHT_DOCUMENT: string;
    DARK_DESCRIPTION: string;
    STATUS_CHIP: string;
    MORE_ICON_BUTTONS: string;
  };
  Chip: {
    THEME: string;
    LIGHT_THEME: string;
    LIGHT_DISABLED: string;
    DISABLED: string;
    LIGHT_DEFAULT: string;
  };
  Border: {
    DEFAULT: string;
    PRIMARY: string;
    TEXT_INPUT: string;
    TEXT_INPUT_DEFAULT_BORDER: string;
    TEXT_INPUT_FOCUSED_BORDER: string;
    THEME: string;
    DASHED: string;
  };
  Shimmer: {
    START: string;
    END: string;
  };
  Toggle: {
    ON: string;
    OFF: string;
    KNOB: string;
  };
  Gradient: {
    PRIMARY: string;
    SECONDARY: string;
  };
  ProgressBar: {
    UNFILLED: string;
    PRIMARY: string;
    DISABLED: string;
  };
  SHADOW: {
    BACKGROUND: string;
    LIGHT_BG: string;
  };
}

export interface FontFamily {
  Thin: string;
  ExtraLight: string;
  Light: string;
  Regular: string;
  Medium: string;
  SemiBold: string;
  Bold: string;
}
