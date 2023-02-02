export default function Footer() {
  return (
    <div>
      <footer className="mx-auto my-8 flex h-16 max-w-6xl border-t border-navy-100 py-6 text-sm text-navy-300 lg:border-t lg:border-navy-100">
        <div className="basis-1/2 grid-cols-8 px-4 sm:px-8">
          <div>&copy; ProviderTrust, Inc. Data distilled in Tennessee.</div>
        </div>
        <div className="basis-1/2 px-4 text-right sm:px-8 ">
          <div>
            <a className="text-navy-300 hover:text-navy-600" href="/privacy">
              Privacy Policy
            </a>
            <span className="px-3">|</span>
            <a href="/terms" className="text-navy-300 hover:text-navy-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
