/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from "phosphor-react";
import { FormEvent, useCallback, useMemo, useState } from "react";

import { FeedbackType } from "components/Widget/WidgetForm";
import { WidgetCloseButton } from "components/Widget/WidgetCloseButton";
import { ScreenshotButton } from "components/Widget/WidgetForm/ScreenshotButton";
import { Loading } from "components/Loading";

import { api } from "services/api";
import { feedbackTypes } from "utils/widget-feedback-types";

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
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={`/${feedbackTypeInfo.image.fileName}.svg`}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo?.title}
        </span>
        <WidgetCloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-[4px] focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Tell us in detail what's going on"
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className="p-2 transition-all disabled:hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            type="submit"
            disabled={!comment?.length || isLoading}
            title={!comment?.length ? "Please enter a comment" : undefined}
          >
            {isLoading ? <Loading /> : "Send feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
