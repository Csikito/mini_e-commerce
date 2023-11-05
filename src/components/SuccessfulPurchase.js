import React from "react";
import { Link } from "react-router-dom";
import successfull from "../assets/image/successfull/successfull.png";
import confetti from "canvas-confetti";

const SuccessfulPurchase = () => {
  const handleFire = () => {
    var duration = 6 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  setTimeout(() => {
    handleFire();
  }, 500);

  return (
    <main className="w-full  h-[79vh] ">
      <div className="flex flex-col items-center  ">
        <img
          src={successfull}
          alt="successfull-purchase"
          className=" w-[500px] p-10 "
        />
        <p className="text-center text-2xl">
          <span className="font-bold text-[--color-light-blue]">
            Congratulations
          </span>
          , we will deliver your order soon!
        </p>
        <Link
          to="/mini_e-commerce"
          className="xs:w-[100px] md:w-[400px]  tracking-wider sm:py-2 mx-5 xs:mx-0 mt-5 sm:mt-10 text-2xl space rounded-[5px] bg-gradient-to-t from-[--btn-color-blue] to-[--color-light-blue] bg-opacity-90 text-white text-center hover:scale-105 duration-300"
        >
          Back to home page
        </Link>
      </div>
    </main>
  );
};

export default SuccessfulPurchase;
