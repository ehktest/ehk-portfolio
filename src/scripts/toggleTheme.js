// CSS Variable Values
function getThemeVariables() {
  const rootStyle = getComputedStyle(document.documentElement);
  return {
    // + TEXT COLORS
    textGeneralDark: rootStyle.getPropertyValue("--text-generalDark").trim(),
    textGeneralLight: rootStyle.getPropertyValue("--text-generalLight").trim(),
    textImportantDark: rootStyle
      .getPropertyValue("--text-importantDark")
      .trim(),
    textImportantLight: rootStyle
      .getPropertyValue("--text-importantLight")
      .trim(),
    textHeaderDark: rootStyle.getPropertyValue("--text-headerDark").trim(),
    textHeaderLight: rootStyle.getPropertyValue("--text-headerLight").trim(),
    // + BG COLORS
    grayColorDark: rootStyle.getPropertyValue("--gray-colorDark").trim(),
    grayColorLight: rootStyle.getPropertyValue("--gray-colorLight").trim(),
    // + CURSOR
    cursorColorDark: rootStyle.getPropertyValue("--cursor-colorDark").trim(),
    cursorColorLight: rootStyle.getPropertyValue("--cursor-colorLight").trim(),
    // + APP
    appBgColorDark: rootStyle.getPropertyValue("--app-BgColorDark").trim(),
    appBgColorLight: rootStyle.getPropertyValue("--app-BgColorLight").trim(),
    appEvensPageBgColorDark: rootStyle
      .getPropertyValue("--app-evensPageBgColorDark")
      .trim(),
    appEvensPageBgColorLight: rootStyle
      .getPropertyValue("--app-evensPageBgColorLight")
      .trim(),
    appOddsPageBgColorDark: rootStyle
      .getPropertyValue("--app-oddsPageBgColorDark")
      .trim(),
    appOddsPageBgColorLight: rootStyle
      .getPropertyValue("--app-oddsPageBgColorLight")
      .trim(),
    // + NAVBAR
    navbarBgColorDark: rootStyle
      .getPropertyValue("--navbar-bgColorDark")
      .trim(),
    navbarBgColorLight: rootStyle
      .getPropertyValue("--navbar-bgColorLight")
      .trim(),
    navbarLinkColorDark: rootStyle
      .getPropertyValue("--navbar-linkColorDark")
      .trim(),
    navbarLinkColorLight: rootStyle
      .getPropertyValue("--navbar-linkColorLight")
      .trim(),
    navbarLinkHoverColorDark: rootStyle
      .getPropertyValue("--navbar-linkHoverColorDark")
      .trim(),
    navbarLinkHoverColorLight: rootStyle
      .getPropertyValue("--navbar-linkHoverColorLight")
      .trim(),
    navbarHamburgerBgColorDark: rootStyle
      .getPropertyValue("--navbar-hamburgerBgColorDark")
      .trim(),
    navbarHamburgerBgColorLight: rootStyle
      .getPropertyValue("--navbar-hamburgerBgColorLight")
      .trim(),
    navbarHamburgerLinkColorDark: rootStyle
      .getPropertyValue("--navbar-hamburgerLinkColorDark")
      .trim(),
    navbarHamburgerLinkColorLight: rootStyle
      .getPropertyValue("--navbar-hamburgerLinkColorLight")
      .trim(),
    navbarScrollLinkBgColorDark: rootStyle
      .getPropertyValue("--navbar-scrollLinkBgColorDark")
      .trim(),
    navbarScrollLinkBgColorLight: rootStyle
      .getPropertyValue("--navbar-scrollLinkBgColorLight")
      .trim(),
    navbarScrollLinkShadowDark: rootStyle
      .getPropertyValue("--navbar-scrollLinkShadowDark")
      .trim(),
    navbarScrollLinkShadowLight: rootStyle
      .getPropertyValue("--navbar-scrollLinkShadowLight")
      .trim(),
    // + HEADER
    headerBadgeShadowDark: rootStyle
      .getPropertyValue("--header-BadgeShadowDark")
      .trim(),
    headerBadgeShadowLight: rootStyle
      .getPropertyValue("--header-BadgeShadowLight")
      .trim(),
    // + WORK
    workCardBgColorDark: rootStyle
      .getPropertyValue("--work-cardBgColorDark")
      .trim(),
    workCardBgColorLight: rootStyle
      .getPropertyValue("--work-cardBgColorLight")
      .trim(),
    workCardTextColorDark: rootStyle
      .getPropertyValue("--work-cardTextColorDark")
      .trim(),
    workCardTextColorLight: rootStyle
      .getPropertyValue("--work-cardTextColorLight")
      .trim(),
    workCardShadowDark: rootStyle
      .getPropertyValue("--work-cardShadowDark")
      .trim(),
    workCardShadowLight: rootStyle
      .getPropertyValue("--work-cardShadowLight")
      .trim(),
    // + SKILLS
    skillsYearColorDark: rootStyle
      .getPropertyValue("--skills-yearColorDark")
      .trim(),
    skillsYearColorLight: rootStyle
      .getPropertyValue("--skills-yearColorLight")
      .trim(),
    skillsBadgeBgColorDark: rootStyle
      .getPropertyValue("--skills-badgeBgColorDark")
      .trim(),
    skillsBadgeBgColorLight: rootStyle
      .getPropertyValue("--skills-badgeBgColorLight")
      .trim(),
    skillsBadgeShadowDark: rootStyle
      .getPropertyValue("--skills-badgeShadowDark")
      .trim(),
    skillsBadgeShadowLight: rootStyle
      .getPropertyValue("--skills-badgeShadowLight")
      .trim(),
    skillsTooltipTextColorDark: rootStyle
      .getPropertyValue("--skills-tooltipTextColorDark")
      .trim(),
    skillsTooltipTextColorLight: rootStyle
      .getPropertyValue("--skills-tooltipTextColorLight")
      .trim(),
    skillsTooltipBgColorDark: rootStyle
      .getPropertyValue("--skills-tooltipBgColorDark")
      .trim(),
    skillsTooltipBgColorLight: rootStyle
      .getPropertyValue("--skills-tooltipBgColorLight")
      .trim(),
    skillsTooltipArrowColorDark: rootStyle
      .getPropertyValue("--skills-tooltipArrowColorDark")
      .trim(),
    skillsTooltipArrowColorLight: rootStyle
      .getPropertyValue("--skills-tooltipArrowColorLight")
      .trim(),
    skillsTooltipShadowDark: rootStyle
      .getPropertyValue("--skills-tooltipShadowDark")
      .trim(),
    skillsTooltipShadowLight: rootStyle
      .getPropertyValue("--skills-tooltipShadowLight")
      .trim(),
    // + FOOTER
    formLabelRegularColorDark: rootStyle
      .getPropertyValue("--form-labelRegularColorDark")
      .trim(),
    formLabelRegularColorLight: rootStyle
      .getPropertyValue("--form-labelRegularColorLight")
      .trim(),
    formLabelFocusColorDark: rootStyle
      .getPropertyValue("--form-labelFocusColorDark")
      .trim(),
    formLabelFocusColorLight: rootStyle
      .getPropertyValue("--form-labelFocusColorLight")
      .trim(),
    formLabelErrorColorDark: rootStyle
      .getPropertyValue("--form-labelErrorColorDark")
      .trim(),
    formLabelErrorColorLight: rootStyle
      .getPropertyValue("--form-labelErrorColorLight")
      .trim(),
    formInputTextColorDark: rootStyle
      .getPropertyValue("--form-inputTextColorDark")
      .trim(),
    formInputTextColorLight: rootStyle
      .getPropertyValue("--form-inputTextColorLight")
      .trim(),
    formTaTextColorDark: rootStyle
      .getPropertyValue("--form-taTextColorDark")
      .trim(),
    formTaTextColorLight: rootStyle
      .getPropertyValue("--form-taTextColorLight")
      .trim(),
    formInputTaShadowDark: rootStyle
      .getPropertyValue("--form-inputTaShadowDark")
      .trim(),
    formInputTaShadowLight: rootStyle
      .getPropertyValue("--form-inputTaShadowLight")
      .trim(),
    formInputTaRegularBorderColorDark: rootStyle
      .getPropertyValue("--form-inputTaRegularBorderColorDark")
      .trim(),
    formInputTaRegularBorderColorLight: rootStyle
      .getPropertyValue("--form-inputTaRegularBorderColorLight")
      .trim(),
    formInputTaFocusBorderColorDark: rootStyle
      .getPropertyValue("--form-inputTaFocusBorderColorDark")
      .trim(),
    formInputTaFocusBorderColorLight: rootStyle
      .getPropertyValue("--form-inputTaFocusBorderColorLight")
      .trim(),
    formInputTaErrorBorderColorDark: rootStyle
      .getPropertyValue("--form-inputTaErrorBorderColorDark")
      .trim(),
    formInputTaErrorBorderColorLight: rootStyle
      .getPropertyValue("--form-inputTaErrorBorderColorLight")
      .trim(),
    formInputTaHoverBorderColorDark: rootStyle
      .getPropertyValue("--form-inputTaHoverBorderColorDark")
      .trim(),
    formInputTaHoverBorderColorLight: rootStyle
      .getPropertyValue("--form-inputTaHoverBorderColorLight")
      .trim(),
    formInputTaHelperTextColorDark: rootStyle
      .getPropertyValue("--form-inputTaHelperTextColorDark")
      .trim(),
    formInputTaHelperTextColorLight: rootStyle
      .getPropertyValue("--form-inputTaHelperTextColorLight")
      .trim(),
    formSubmitButtonBgColorDark: rootStyle
      .getPropertyValue("--form-submitButtonBgColorDark")
      .trim(),
    formSubmitButtonBgColorLight: rootStyle
      .getPropertyValue("--form-submitButtonBgColorLight")
      .trim(),
    formSubmitButtonTextColorDark: rootStyle
      .getPropertyValue("--form-submitButtonTextColorDark")
      .trim(),
    formSubmitButtonTextColorLight: rootStyle
      .getPropertyValue("--form-submitButtonTextColorLight")
      .trim(),
    formSubmitButtonHoverColorDark: rootStyle
      .getPropertyValue("--form-submitButtonHoverColorDark")
      .trim(),
    formSubmitButtonHoverColorLight: rootStyle
      .getPropertyValue("--form-submitButtonHoverColorLight")
      .trim(),
    footerEmailCardBgColorDark: rootStyle
      .getPropertyValue("--footer-emailCardBgColorDark")
      .trim(),
    footerEmailCardBgColorLight: rootStyle
      .getPropertyValue("--footer-emailCardBgColorLight")
      .trim(),
    footerEmailCardShadowDark: rootStyle
      .getPropertyValue("--footer-emailCardShadowDark")
      .trim(),
    footerEmailCardShadowLight: rootStyle
      .getPropertyValue("--footer-emailCardShadowLight")
      .trim(),
    footerPhoneCardBgColorDark: rootStyle
      .getPropertyValue("--footer-phoneCardBgColorDark")
      .trim(),
    footerPhoneCardBgColorLight: rootStyle
      .getPropertyValue("--footer-phoneCardBgColorLight")
      .trim(),
    footerPhoneCardShadowDark: rootStyle
      .getPropertyValue("--footer-phoneCardShadowDark")
      .trim(),
    footerPhoneCardShadowLight: rootStyle
      .getPropertyValue("--footer-phoneCardShadowLight")
      .trim(),
    // + BUTTONS
    buttonSuccessBgColorDark: rootStyle
      .getPropertyValue("--btn-successBgColorDark")
      .trim(),
    buttonSuccessBgColorLight: rootStyle
      .getPropertyValue("--btn-successBgColorLight")
      .trim(),
    buttonGeneralBgColorDark: rootStyle
      .getPropertyValue("--btn-generalBgColorDark")
      .trim(),
    buttonGeneralBgColorLight: rootStyle
      .getPropertyValue("--btn-generalBgColorLight")
      .trim(),
    buttonActiveBgColorDark: rootStyle
      .getPropertyValue("--btn-activeBgColorDark")
      .trim(),
    buttonActiveBgColorLight: rootStyle
      .getPropertyValue("--btn-activeBgColorLight")
      .trim(),
    buttonTextColorDark: rootStyle
      .getPropertyValue("--btn-textColorDark")
      .trim(),
    buttonTextColorLight: rootStyle
      .getPropertyValue("--btn-textColorLight")
      .trim(),
    // + NAVIGATION DOTS
    navDotBgColorDark: rootStyle
      .getPropertyValue("--navDot-BgColorDark")
      .trim(),
    navDotBgColorLight: rootStyle
      .getPropertyValue("--navDot-BgColorLight")
      .trim(),
    // + PAGINATION
    paginationTextColorDark: rootStyle
      .getPropertyValue("--pagination-textColorDark")
      .trim(),
    paginationTextColorLight: rootStyle
      .getPropertyValue("--pagination-textColorLight")
      .trim(),
    paginationRowsTextColorDark: rootStyle
      .getPropertyValue("--pagination-rowsTextColorDark")
      .trim(),
    paginationRowsTextColorLight: rootStyle
      .getPropertyValue("--pagination-rowsTextColorLight")
      .trim(),
    paginationButtonBgHoverColorDark: rootStyle
      .getPropertyValue("--pagination-buttonBgHoverColorDark")
      .trim(),
    paginationButtonBgHoverColorLight: rootStyle
      .getPropertyValue("--pagination-buttonBgHoverColorLight")
      .trim(),
    // + SOCIAL
    socialBgHoverColorDark: rootStyle
      .getPropertyValue("--social-bgHoverColorDark")
      .trim(),
    socialBgHoverColorLight: rootStyle
      .getPropertyValue("--social-bgHoverColorLight")
      .trim(),
  };
}

function toggleThemeToDark() {
  const themeVariables = getThemeVariables();

  // dark mode renk degerleri:
  // + TEXT COLORS
  document.documentElement.style.setProperty(
    "--text-general",
    themeVariables.textGeneralDark
  );
  document.documentElement.style.setProperty(
    "--text-important",
    themeVariables.textImportantDark
  );
  document.documentElement.style.setProperty(
    "--text-header",
    themeVariables.textHeaderDark
  );
  // + BG COLORS
  document.documentElement.style.setProperty(
    "--gray-color",
    themeVariables.grayColorDark
  );
  // + APP
  document.documentElement.style.setProperty(
    "--app-BgColor",
    themeVariables.appBgColorDark
  );
  document.documentElement.style.setProperty(
    "--app-evensPageBgColor",
    themeVariables.appEvensPageBgColorDark
  );
  document.documentElement.style.setProperty(
    "--app-oddsPageBgColor",
    themeVariables.appOddsPageBgColorDark
  );
  // + CURSOR
  document.documentElement.style.setProperty(
    "--cursor-color",
    themeVariables.cursorColorDark
  );
  // + NAVBAR
  document.documentElement.style.setProperty(
    "--navbar-bgColor",
    themeVariables.navbarBgColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-linkColor",
    themeVariables.navbarLinkColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-linkHoverColor",
    themeVariables.navbarLinkHoverColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-hamburgerBgColor",
    themeVariables.navbarHamburgerBgColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-hamburgerLinkColor",
    themeVariables.navbarHamburgerLinkColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-scrollLinkBgColor",
    themeVariables.navbarScrollLinkBgColorDark
  );
  document.documentElement.style.setProperty(
    "--navbar-scrollLinkShadow",
    themeVariables.navbarScrollLinkShadowDark
  );
  // + HEADER
  document.documentElement.style.setProperty(
    "--header-BadgeShadow",
    themeVariables.headerBadgeShadowDark
  );
  // + WORK
  document.documentElement.style.setProperty(
    "--work-cardBgColor",
    themeVariables.workCardBgColorDark
  );
  document.documentElement.style.setProperty(
    "--work-cardTextColor",
    themeVariables.workCardTextColorDark
  );
  document.documentElement.style.setProperty(
    "--work-cardShadow",
    themeVariables.workCardShadowDark
  );
  // + SKILLS
  document.documentElement.style.setProperty(
    "--skills-yearColor",
    themeVariables.skillsYearColorDark
  );
  document.documentElement.style.setProperty(
    "--skills-badgeBgColor",
    themeVariables.skillsBadgeBgColorDark
  );
  document.documentElement.style.setProperty(
    "--skills-badgeShadow",
    themeVariables.skillsBadgeShadowDark
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipTextColor",
    themeVariables.skillsTooltipTextColorDark
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipBgColor",
    themeVariables.skillsTooltipBgColorDark
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipArrowColor",
    themeVariables.skillsTooltipArrowColorDark
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipShadow",
    themeVariables.skillsTooltipShadowDark
  );
  // + FOOTER
  document.documentElement.style.setProperty(
    "--form-labelRegularColor",
    themeVariables.formLabelRegularColorDark
  );
  document.documentElement.style.setProperty(
    "--form-labelFocusColor",
    themeVariables.formLabelFocusColorDark
  );
  document.documentElement.style.setProperty(
    "--form-labelErrorColor",
    themeVariables.formLabelErrorColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTextColor",
    themeVariables.formInputTextColorDark
  );
  document.documentElement.style.setProperty(
    "--form-taTextColor",
    themeVariables.formTaTextColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaShadow",
    themeVariables.formInputTaShadowDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaRegularBorderColor",
    themeVariables.formInputTaRegularBorderColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaFocusBorderColor",
    themeVariables.formInputTaFocusBorderColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaErrorBorderColor",
    themeVariables.formInputTaErrorBorderColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaHoverBorderColor",
    themeVariables.formInputTaHoverBorderColorDark
  );
  document.documentElement.style.setProperty(
    "--form-inputTaHelperTextColor",
    themeVariables.formInputTaHelperTextColorDark
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonBgColor",
    themeVariables.formSubmitButtonBgColorDark
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonTextColor",
    themeVariables.formSubmitButtonTextColorDark
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonHoverColor",
    themeVariables.formSubmitButtonHoverColorDark
  );
  document.documentElement.style.setProperty(
    "--footer-emailCardBgColor",
    themeVariables.footerEmailCardBgColorDark
  );
  document.documentElement.style.setProperty(
    "--footer-emailCardShadow",
    themeVariables.footerEmailCardShadowDark
  );
  document.documentElement.style.setProperty(
    "--footer-phoneCardBgColor",
    themeVariables.footerPhoneCardBgColorDark
  );
  document.documentElement.style.setProperty(
    "--footer-phoneCardShadow",
    themeVariables.footerPhoneCardShadowDark
  );
  // + BUTTONS
  document.documentElement.style.setProperty(
    "--btn-successBgColor",
    themeVariables.buttonSuccessBgColorDark
  );
  document.documentElement.style.setProperty(
    "--btn-generalBgColor",
    themeVariables.buttonGeneralBgColorDark
  );
  document.documentElement.style.setProperty(
    "--btn-activeBgColor",
    themeVariables.buttonActiveBgColorDark
  );
  document.documentElement.style.setProperty(
    "--btn-textColor",
    themeVariables.buttonTextColorDark
  );
  // + NAVIGATION DOTS
  document.documentElement.style.setProperty(
    "--navDot-BgColor",
    themeVariables.navDotBgColorDark
  );
  // + PAGINATION
  document.documentElement.style.setProperty(
    "--pagination-textColor",
    themeVariables.paginationTextColorDark
  );
  document.documentElement.style.setProperty(
    "--pagination-rowsTextColor",
    themeVariables.paginationRowsTextColorDark
  );
  document.documentElement.style.setProperty(
    "--pagination-buttonBgHoverColor",
    themeVariables.paginationButtonBgHoverColorDark
  );
  // + SOCIAL
  document.documentElement.style.setProperty(
    "--social-bgHoverColor",
    themeVariables.socialBgHoverColorDark
  );
}

function toggleThemeToLight() {
  const themeVariables = getThemeVariables();

  // default renk degerlerine donus:
  // + TEXT COLORS
  document.documentElement.style.setProperty(
    "--text-general",
    themeVariables.textGeneralLight
  );
  document.documentElement.style.setProperty(
    "--text-important",
    themeVariables.textImportantLight
  );
  document.documentElement.style.setProperty(
    "--text-header",
    themeVariables.textHeaderLight
  );
  // + BG COLORS
  document.documentElement.style.setProperty(
    "--gray-color",
    themeVariables.grayColorLight
  );
  // + APP
  document.documentElement.style.setProperty(
    "--app-BgColor",
    themeVariables.appBgColorLight
  );
  document.documentElement.style.setProperty(
    "--app-evensPageBgColor",
    themeVariables.appEvensPageBgColorLight
  );
  document.documentElement.style.setProperty(
    "--app-oddsPageBgColor",
    themeVariables.appOddsPageBgColorLight
  );
  // + CURSOR
  document.documentElement.style.setProperty(
    "--cursor-color",
    themeVariables.cursorColorLight
  );
  // + NAVBAR
  document.documentElement.style.setProperty(
    "--navbar-bgColor",
    themeVariables.navbarBgColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-linkColor",
    themeVariables.navbarLinkColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-linkHoverColor",
    themeVariables.navbarLinkHoverColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-hamburgerBgColor",
    themeVariables.navbarHamburgerBgColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-hamburgerLinkColor",
    themeVariables.navbarHamburgerLinkColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-scrollLinkBgColor",
    themeVariables.navbarScrollLinkBgColorLight
  );
  document.documentElement.style.setProperty(
    "--navbar-scrollLinkShadow",
    themeVariables.navbarScrollLinkShadowLight
  );
  // + HEADER
  document.documentElement.style.setProperty(
    "--header-BadgeShadow",
    themeVariables.headerBadgeShadowLight
  );
  // + WORK
  document.documentElement.style.setProperty(
    "--work-cardBgColor",
    themeVariables.workCardBgColorLight
  );
  document.documentElement.style.setProperty(
    "--work-cardTextColor",
    themeVariables.workCardTextColorLight
  );
  document.documentElement.style.setProperty(
    "--work-cardShadow",
    themeVariables.workCardShadowLight
  );
  // + SKILLS
  document.documentElement.style.setProperty(
    "--skills-yearColor",
    themeVariables.skillsYearColorLight
  );
  document.documentElement.style.setProperty(
    "--skills-badgeBgColor",
    themeVariables.skillsBadgeBgColorLight
  );
  document.documentElement.style.setProperty(
    "--skills-badgeShadow",
    themeVariables.skillsBadgeShadowLight
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipTextColor",
    themeVariables.skillsTooltipTextColorLight
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipBgColor",
    themeVariables.skillsTooltipBgColorLight
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipArrowColor",
    themeVariables.skillsTooltipArrowColorLight
  );
  document.documentElement.style.setProperty(
    "--skills-tooltipShadow",
    themeVariables.skillsTooltipShadowLight
  );
  // + FOOTER
  document.documentElement.style.setProperty(
    "--form-labelRegularColor",
    themeVariables.formLabelRegularColorLight
  );
  document.documentElement.style.setProperty(
    "--form-labelFocusColor",
    themeVariables.formLabelFocusColorLight
  );
  document.documentElement.style.setProperty(
    "--form-labelErrorColor",
    themeVariables.formLabelErrorColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTextColor",
    themeVariables.formInputTextColorLight
  );
  document.documentElement.style.setProperty(
    "--form-taTextColor",
    themeVariables.formTaTextColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaShadow",
    themeVariables.formInputTaShadowLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaRegularBorderColor",
    themeVariables.formInputTaRegularBorderColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaFocusBorderColor",
    themeVariables.formInputTaFocusBorderColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaErrorBorderColor",
    themeVariables.formInputTaErrorBorderColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaHoverBorderColor",
    themeVariables.formInputTaHoverBorderColorLight
  );
  document.documentElement.style.setProperty(
    "--form-inputTaHelperTextColor",
    themeVariables.formInputTaHelperTextColorLight
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonBgColor",
    themeVariables.formSubmitButtonBgColorLight
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonTextColor",
    themeVariables.formSubmitButtonTextColorLight
  );
  document.documentElement.style.setProperty(
    "--form-submitButtonHoverColor",
    themeVariables.formSubmitButtonHoverColorLight
  );
  document.documentElement.style.setProperty(
    "--footer-emailCardBgColor",
    themeVariables.footerEmailCardBgColorLight
  );
  document.documentElement.style.setProperty(
    "--footer-emailCardShadow",
    themeVariables.footerEmailCardShadowLight
  );
  document.documentElement.style.setProperty(
    "--footer-phoneCardBgColor",
    themeVariables.footerPhoneCardBgColorLight
  );
  document.documentElement.style.setProperty(
    "--footer-phoneCardShadow",
    themeVariables.footerPhoneCardShadowLight
  );
  // + BUTTONS
  document.documentElement.style.setProperty(
    "--btn-successBgColor",
    themeVariables.buttonSuccessBgColorLight
  );
  document.documentElement.style.setProperty(
    "--btn-generalBgColor",
    themeVariables.buttonGeneralBgColorLight
  );
  document.documentElement.style.setProperty(
    "--btn-activeBgColor",
    themeVariables.buttonActiveBgColorLight
  );
  document.documentElement.style.setProperty(
    "--btn-textColor",
    themeVariables.buttonTextColorLight
  );
  // + NAVIGATION DOTS
  document.documentElement.style.setProperty(
    "--navDot-BgColor",
    themeVariables.navDotBgColorLight
  );
  // + PAGINATION
  document.documentElement.style.setProperty(
    "--pagination-textColor",
    themeVariables.paginationTextColorLight
  );
  document.documentElement.style.setProperty(
    "--pagination-rowsTextColor",
    themeVariables.paginationRowsTextColorLight
  );
  document.documentElement.style.setProperty(
    "--pagination-buttonBgHoverColor",
    themeVariables.paginationButtonBgHoverColorLight
  );
  // + SOCIAL
  document.documentElement.style.setProperty(
    "--social-bgHoverColor",
    themeVariables.socialBgHoverColorLight
  );
}

export { toggleThemeToDark, toggleThemeToLight };
