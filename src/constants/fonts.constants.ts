import { FontFamily } from "./interface";

export const FONT_SIZES = {
  HeroTitle: 40,
  BigTitle: 32,
  Title: 28,
  Subtitle: 24,
  MediumTitle: 22,
  SmallTitle: 18,
  Caption: 16,
  Body: 14,
  Tiny: 12,
  BitTiny: 11,
  Footnote: 10,
};

export const FONT_FAMILIES: { [k: string]: FontFamily } = {
  IBMPlexSans: {
    Thin: 'IBMPlexSans-Thin',
    ExtraLight: 'IBMPlexSans-ExtraLight',
    Light: 'IBMPlexSans-Light',
    Regular: 'IBMPlexSans-Regular',
    Medium: 'IBMPlexSans-Medium',
    SemiBold: 'IBMPlexSans-SemiBold',
    Bold: 'IBMPlexSans-Bold',
  },
  IBMPlexSansCondensed: {
    Thin: 'IBMPlexSans_Condensed-Thin',
    ExtraLight: 'IBMPlexSans_Condensed-ExtraLight',
    Light: 'IBMPlexSans_Condensed-Light',
    Regular: 'IBMPlexSans_Condensed-Regular',
    Medium: 'IBMPlexSans_Condensed-Medium',
    SemiBold: 'IBMPlexSans_Condensed-SemiBold',
    Bold: 'IBMPlexSans_Condensed-Bold',
  },
  IBMPlexSansSemiCondensed: {
    Thin: 'IBMPlexSans_SemiCondensed-Thin',
    ExtraLight: 'IBMPlexSans_SemiCondensed-ExtraLight',
    Light: 'IBMPlexSans_SemiCondensed-Light',
    Regular: 'IBMPlexSans_SemiCondensed-Regular',
    Medium: 'IBMPlexSans_SemiCondensed-Medium',
    SemiBold: 'IBMPlexSans_SemiCondensed-SemiBold',
    Bold: 'IBMPlexSans_SemiCondensed-Bold',
  },
};
