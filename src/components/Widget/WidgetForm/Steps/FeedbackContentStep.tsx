/* eslint-disable @next/next/no-img-element */
import { FormEvent, useCallback, useMemo, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { useTranslation } from "next-i18next";

import { FeedbackType } from "components/Widget/WidgetForm";
import { WidgetCloseButton } from "components/Widget/WidgetCloseButton";
import { ScreenshotButton } from "components/Widget/WidgetForm/ScreenshotButton";
import { Loading } from "components/Loading";

import { api } from "services/api";
import { feedbackTypes } from "utils/widget-feedback-types";

const I18N_BASE_PATH = "components:widget.widgetForm.steps.feedbackContentStep";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const { t } = useTranslation();

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const feedbackTypeInfo = useMemo(
    () => feedbackTypes[feedbackType],
    [feedbackType]
  );

  const handleSubmitFeedback = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        setIsLoading(true);
        await api.post("feedbacks", {
          type: feedbackType,
          comment,
          screenshot,
        });

        setIsLoading(false);
        onFeedbackSent();
      } catch (error) {
        throw new Error(`Failed to send feedback: ${error}`);
        setIsLoading(false);
      }
    },
    [comment, feedbackType, onFeedbackSent, screenshot]
  );

  return (
    <>
      <header>
        <button
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 dark:text-gray-300 dark:hover:text-zinc-100"
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={`/assets/icons/${feedbackTypeInfo.image.fileName}.svg`}
            alt={t(feedbackTypeInfo.image.alt, feedbackTypeInfo.image.alt)}
            className="w-6 h-6"
          />
          {t(feedbackTypeInfo?.title, feedbackTypeInfo?.title)}
        </span>
        <WidgetCloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-300 dark:placeholder-zinc-300 text-zinc-100 dark:text-gray-300 border-zinc-400 dark:border-gray-300 bg-transparent rounded-[4px] focus:border-zinc-400 dark:focus:border-gray-300 focus:ring-zinc-400 dark:focus:ring-gray-300 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-600 dark:scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thin"
          placeholder={t(
            `${I18N_BASE_PATH}.form.textarea.placeholder`,
            "Tell us in detail what's going on"
          )}
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className="p-2 transition-all disabled:hover:bg-primary-100 dark:disabled:hover:bg-dark-background disabled:cursor-not-allowed disabled:opacity-50 dark:disabled:border-gray-300 bg-primary-100 dark:disabled:bg-dark-background rounded-[4px] border border-white dark:border-dark-background flex-1 flex justify-center items-center text-sm font-semibold hover:bg-primary-300 dark:hover:bg-dark-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-300 dark:focus:ring-offset-dark-background focus:ring-primary-300 dark:focus:ring-dark-background"
            type="submit"
            disabled={!comment?.length || isLoading}
            title={
              !comment?.length
                ? t(
                    `${I18N_BASE_PATH}.form.button.title`,
                    "Please enter a comment"
                  )
                : ""
            }
          >
            {isLoading ? (
              <Loading />
            ) : (
              t(`${I18N_BASE_PATH}.form.button.text`, "Send feedback")
            )}
          </button>
        </footer>
      </form>
    </>
  );
};
