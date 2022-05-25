/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "hooks/useTranslation";
import { WidgetCloseButton } from "components/Widget/WidgetCloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export const FeedbackSuccessStep = ({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) => {
  const { currentTranslation } = useTranslation();

  return (
    <>
      <header>
        <WidgetCloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src="/check.svg" alt="Feedback sent" />
        <span className="text-xl mt-2 font-text">
          {currentTranslation?.components?.widget?.widgetForm?.steps
            ?.feedbackSuccessStep?.heading || "We appreciate the feedback"}
        </span>
        <button
          className="py-2 px-6 mt-6 bg-primary-100 rounded-[4px] border-transparent text-sm leading-6 hover:bg-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-100 focus:ring-primary-100"
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          {currentTranslation?.components?.widget?.widgetForm?.steps
            ?.feedbackSuccessStep?.button || "I want to send another"}
        </button>
      </div>
    </>
  );
};
