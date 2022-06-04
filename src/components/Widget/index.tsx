import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { useTranslation } from "next-i18next";

import { WidgetForm } from "./WidgetForm";

const I18N_BASE_PATH = "components:widget";

export const Widget = () => {
  const { t } = useTranslation();

  return (
    <Popover className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-primary-100 rounded-full px-3 h-12 text-white dark:text-gray-300 flex items-center group border border-white dark:border-gray-300">
        <ChatTeardropDots weight="bold" className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          {t(`${I18N_BASE_PATH}.feedbackButtonText`, "Feedback")}
        </span>
      </Popover.Button>
    </Popover>
  );
};
