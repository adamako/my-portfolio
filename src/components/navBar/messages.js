import { defineMessages } from "react-intl";

export const scope = "app.components.navBar";

export default defineMessages({
  home: {
    id: `${scope}.fields.home`,
    defaultMessage: "Home",
  },
  about: {
    id: `${scope}.fields.about`,
    defaultMessage: "About",
  },
  resume: {
    id: `${scope}.fields.resume`,
    defaultMessage: "Resume",
  },
});
