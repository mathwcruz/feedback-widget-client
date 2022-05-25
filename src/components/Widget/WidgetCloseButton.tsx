import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

import { useTranslation } from "hooks/useTranslation";

export const WidgetCloseButton = () => {
  const { currentTranslation } = useTranslation();

  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-200 hover:text-zinc-100"
      title={
        currentTranslation?.components?.widget?.widgetCloseButton?.button
          ?.title || "Close feedback form"
      }
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
};
