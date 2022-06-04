const I18N_BASE_PATH = "utils:feedbackTypes";

export const feedbackTypes = {
  BUG: {
    title: `${I18N_BASE_PATH}.bug.title`,
    image: {
      fileName: "bug",
      alt: `${I18N_BASE_PATH}.bug.image.alt`,
    },
  },
  IDEA: {
    title: `${I18N_BASE_PATH}.idea.title`,
    image: {
      fileName: "idea",
      alt: `${I18N_BASE_PATH}.idea.image.alt`,
    },
  },
  OTHER: {
    title: `${I18N_BASE_PATH}.other.title`,
    image: {
      fileName: "thought",
      alt: `${I18N_BASE_PATH}.other.image.alt`,
    },
  },
};
