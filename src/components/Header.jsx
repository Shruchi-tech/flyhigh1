import { useEffect } from "react";

function Header() {
  // Alert on page load
  useEffect(() => {
    alert("Hello, Welcome to FlyHIGH");
  }, []);

  return (
    <section id="header">
      <div className="gradient-background">

        {/* Navigation */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bluesky"
                viewBox="0 0 16 16"
              >
                <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
              </svg>
              FlyHIGH
            </a>
          </div>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-dark me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header>

        {/* Hero / Banner */}
        <div className="px-4 py-5 text-center gradient-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bluesky"
            viewBox="0 0 16 16"
          >
            <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
          </svg>

          <h1 className="display-5 fw-bold text-body-emphasis">FlyHIGH</h1>

          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Globalization is better when we move with our loved ones together.
            </p>
            <p>
              We deliver all goods, appliances, and pets across the globe with utmost care.
              Your comfort is our responsibility
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Pet delivery
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Goods and Appliances
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Header;
