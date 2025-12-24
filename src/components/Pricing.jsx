function Pricing() {
  const plans = [
    {
      title: "Same State",
      price: 15,
      highlight: false,
      features: [
        "Insurance not included",
        "1 day delivery",
        "Tracking option",
        "Help center access",
      ],
      buttonStyle: "btn-outline-primary",
    },
    {
      title: "Domestic",
      price: 25,
      highlight: false,
      features: [
        "Insurance included",
        "1 day delivery",
        "Priority tracking support",
        "Help center access",
      ],
      buttonStyle: "btn-primary",
    },
    {
      title: "International",
      price: 39,
      highlight: true,
      features: [
        "Insurance included",
        "3 days delivery",
        "Tracking and email support",
        "Help center access",
      ],
      buttonStyle: "btn-primary",
    },
  ];

  return (
    <section id="pricing">
      <div className="container py-5">

        {/* Header */}
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">
            Pricing
          </h1>
          <p className="fs-5 text-body-secondary">
            We offer affordable pricing for packages and bulk deliveries (50 kg+),
            with customized deals for our customers.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {plans.map((plan, index) => (
            <div className="col" key={index}>
              <div
                className={`card mb-4 rounded-3 shadow-sm ${
                  plan.highlight ? "border-primary" : ""
                }`}
              >
                <div
                  className={`card-header py-3 ${
                    plan.highlight ? "text-bg-primary border-primary" : ""
                  }`}
                >
                  <h4 className="my-0 fw-normal">{plan.title}</h4>
                </div>

                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    ${plan.price}
                    <small className="text-body-secondary fw-light">
                      /package
                    </small>
                  </h1>

                  <ul className="list-unstyled mt-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <button
                    className={`w-100 btn btn-lg ${plan.buttonStyle}`}
                  >
                    Get Delivery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
