const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Phone: +91 443-434-343</p>
          <p>Email: rahulsinghkb56.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Location</h3>
          <p>Uttrakand, India</p>
          <p>City, State, ZIP</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Other</h3>
          <p>About Us</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
      <div className="my-7 text-center ">
        <p>@copyright2024 Task Management System</p>
      </div>
    </footer>
  );
};

export default Footer;
