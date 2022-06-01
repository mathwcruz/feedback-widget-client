import { useCallback, useState } from "react";

import { feedbackTypes } from "utils/widget-feedback-types";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestarFeedback = useCallback(() => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }, []);

  return (
    <div className="bg-primary-100 dark:bg-dark-background border border-white dark:border-dark-background p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestarFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              onFeedbackRestartRequested={handleRestarFeedback}
              feedbackType={feedbackType}
            />
          )}
        </>
      )}
    </div>
  );
};
