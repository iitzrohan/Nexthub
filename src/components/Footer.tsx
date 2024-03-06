export default function Footer() {
  return (
    <footer className="rounded-lg bg-neutral p-6 text-neutral-content">
      <div className="m-auto flex max-w-[1536px] justify-between md:justify-around">
        <div className="flex flex-col gap-2">
          <span className="footer-title">Services</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="footer-title">Company</span>
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div className="hidden flex-col gap-2 sm:flex">
          <span className="footer-title">Legal</span>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}
