import { ArrowLineUp } from "phosphor-react";

interface BackToTopButtonProps {
  backToTopButtonIsVisible: boolean;
  scrollToTop: () => void;
}

export const BackToTopButton = ({
  backToTopButtonIsVisible,
  scrollToTop,
}: BackToTopButtonProps) => {
  return (
    <button
      className={`fixed bottom-5 left-4 md:bottom-10 md:left-8 flex flex-col items-center justify-center p-2 bg-primary-100 border border-white rounded-full cursor-pointer ${
        backToTopButtonIsVisible
          ? "opacity-100 transition-all duration-200"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ArrowLineUp className="w-5 h-5 text-white" weight="fill" />
    </button>
  );
};
