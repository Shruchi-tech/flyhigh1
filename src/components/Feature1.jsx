function Feature1() {
  return (
    <section id="feature1">
      <div className="container">
        <div className="container col-xxl-8">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

            {/* Image */}
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/images/title family pic.jpg" // move your image to public/images/
                className="d-block mx-lg-auto img-fluid"
                alt="Family Moving"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Our Responsibility for Your Comfort.
              </h1>
              <p className="lead">
                Moving to a new place takes courage and often means leaving behind things we hold close to our hearts. While we can't bring your old home with you, we can help turn your new house into a home by delivering your loved belongings safely.
              </p>

              {/* Buttons */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                  International
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Domestic
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1;
