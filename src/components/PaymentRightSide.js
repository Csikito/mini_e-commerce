import React from "react";

const PaymentRightSide = () => {
  return (
    <div className="w-full max-w-full lg:max-w-1/3 lg:w-auto mx-4 ">
      <div className="mb-10  px-5 rounded-lg bg-white shadow-lg">
        <h1 className="text-xl font-semibold text-gray-700 text-center">
          Shipping information
        </h1>
        <div className="my-3">
          <input
            type="text"
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div className="my-3">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="my-3 ">
          <div className="mb-2">
            <label htmlFor="" className="text-gray-700">
              Address
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2 pb-5">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Country"
              required
            />
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Town"
              required
            />
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Street"
              required
            />
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="ZIP code"
              required
            />
          </div>
        </div>
      </div>
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white ">
        <div className="flex flex-col justify-center items-center">
          <ul className="flex">
            <li className="mx-2">
              <img
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Card payment
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxLength="22"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                maxLength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label htmlFor="" className="text-gray-700">
                  Expired
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  defaultValue="MM"
                >
                  <option disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block min-w-[80px] w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  defaultValue="YY"
                >
                  <option disabled>YY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className=" p-4">
          <button className="submit-button px-4 py-3 rounded-full bg-[--bg-color-img] text-[--color-light-blue] hover:text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            Pay now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PaymentRightSide;
