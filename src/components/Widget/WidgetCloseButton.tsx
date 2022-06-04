import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import { useTranslation } from "next-i18next";

const I18N_BASE_PATH = "components:widget.widgetCloseButton";

export const WidgetCloseButton = () => {
  const { t } = useTranslation();

  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-200 dark:text-gray-300 hover:text-zinc-100 dark:hover:text-gray-200"
      title={t(`${I18N_BASE_PATH}.button.title`, "Close feedback form")}
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};
