function Footer() {
  return (
    <footer className="pt-8 pb-4 bg-[#212529] text-white text-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-2">
        <p>&copy; {new Date().getFullYear()} ChurchConnect.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
