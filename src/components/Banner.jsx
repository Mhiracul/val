import { useState } from "react";
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import TypeWriter from "./Testimonials";

function ValentineCard({ onAccept }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccept = () => {
    setIsOpen(true);
    onAccept();
  };

  return (
    <div className="flex justify-center items-center px-10 h-screen">
      <Transition
        show={!isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute px-10 inset-0 bg-black bg-opacity-50"></div>
      </Transition>
      <div className="relative bg-white p-20 rounded-lg shadow-red-500 shadow-lg">
        <Transition
          show={!isOpen}
          enter="transition-transform duration-500"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          <div className="text-center w-full flex flex-col items-center">
            <h2 className="md:text-4xl text-xl font-mukta font-extrabold mb-4">
              <TypeWriter
                text={`Hey Love,<br />There is Something I have been Meaning to Ask You,<br />And I Hope I get A Positive Response On This.<br />Will you be my val?`}
              />{" "}
            </h2>
            <div className="flex gap-4 items-start ">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAccept}
              >
                Yes
              </button>
              <button
                className="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAccept}
              >
                No
              </button>
            </div>
          </div>
        </Transition>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">
              A Romantic Message
            </h2>
            <p className="text-gray-700">
              You are the light of my life, the beat of my heart, and the love
              of my soul. Every moment with you is a blessing, and I cherish
              every second spent by your side. Happy Valentine{"'"}s Day!
            </p>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default ValentineCard;

ValentineCard.propTypes = {
  onAccept: PropTypes.func.isRequired,
};
