import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 

const QRCodeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-80">
        <h3 className="text-xl text-center text-gray-800 mb-4">
          Scan the QR Code to Download the App
        </h3>
        <div className="flex justify-center mb-4">
          <QRCodeCanvas value="http://localhost:5173/" size={200} />
        </div>
        <button
          onClick={onClose}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QRCodeModal;
