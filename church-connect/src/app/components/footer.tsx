function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#212529] text-[#fff]">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p>Copyright &copy; {new Date().getFullYear()} ChurchConnect.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
