import React, { useState } from 'react';

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return (
    <div className="flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5">
        <button
          type="button"
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Open First Modal
        </button>
        <button
          type="button"
          className="border border-blue-100 text-gray-800 hover:text-white active:bg-black hover:bg-black flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md hover:shadow-lg outline-none focus:outline-none"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal
        </button>
      </div>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">May your life be filled with success and achievements. Congratlations!</h2>
          <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold" onClick={() => setShowModal(false)}></button>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;
