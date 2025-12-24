function Features3() {
  return (
    <section id="features-3">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          {/* Card 1 */}
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/images/small package.webp"
                className="card-img-top"
                height="225"
                alt="Small packages"
              />

              <div className="card-body">
                <pre className="card-text">
Small Packages & Goods
Delivered.
(Weight: 7 kg – 15 kg)
                </pre>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View list
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/images/electronic appliances.cms"
                className="card-img-top"
                height="225"
                alt="Electronics"
              />

              <div className="card-body">
                <pre className="card-text">
Electronics & Appliances
Budget-friendly pricing
                </pre>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View list
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/images/car.webp"
                className="card-img-top"
                height="250"
                alt="Vehicles"
              />

              <div className="card-body">
                <pre className="card-text">
Vehicles & Large Items
Items like beds and wardrobes.
                </pre>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">
                      View list
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features3;
