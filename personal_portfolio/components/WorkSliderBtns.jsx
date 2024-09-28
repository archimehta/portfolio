import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSliderBtns = ({ swiper, containerStyles, btnStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => {
          if (swiper) swiper.slidePrev(); // Ensure swiper exists before calling slidePrev
        }}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => {
          if (swiper) swiper.slideNext(); // Ensure swiper exists before calling slideNext
        }}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
