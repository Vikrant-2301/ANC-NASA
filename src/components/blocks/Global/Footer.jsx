const Footer = () => {
  return (
    <div className="relative z-10 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className=" justify-center items-center">
        <p className="text-center text-sm text-white">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
