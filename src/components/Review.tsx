const feedback = [
  {
    "name": "Poorvi Bajpai",
    "title": "Impressive Quality and Design!",
    "feedback": "I recently purchased this product, and I must say I'm impressed. The quality is outstanding, with durable materials that feel luxurious. The design is also stylish and versatile, making it a perfect addition to any wardrobe. I highly recommend this product!"
  },
  {
    "name": "Anamika Singh",
    "title": "Fantastic Product!",
    "feedback": "This product exceeded my expectations! The craftsmanship is superb, and the attention to detail is evident. It's comfortable to wear and has quickly become my favorite. I'm very happy with my purchase and would definitely buy from this brand again."
  },
  {
    "name": "Anaya Pandey",
    "title": "Excellent Customer Experience!",
    "feedback": "Not only is the product amazing, but the customer experience was also top-notch. The delivery was prompt, and the packaging was impressive. I appreciate the effort the brand puts into ensuring customer satisfaction. Highly recommended!"
  },
  {
    "name": "Shivam Singh",
    "title": "Outstanding Product!",
    "feedback": "I can't say enough good things about this product! From the moment I received it, I was blown away by the quality and attention to detail. The materials used are top-notch, and the design is both trendy and timeless. It's clear that a lot of thought and effort went into creating this product. I'm extremely satisfied with my purchase and would highly recommend it to anyone looking for a high-quality, stylish item."
  }

]
const Review = () => {
  return (
    <>
      <h1 className="text-3xl my-3 font-serif border-b-2 border-b-zinc-700 inline-block ">Customer Reviews & Ratings</h1>
      <hr />
      {feedback.map((feed, i) => (
        <div key={i}>
          <div className="flex items-start my-4">
            <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                    className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                    src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/200`}
                    alt="Profile picture"
                    onError={(e) => e.currentTarget.src = "https://picsum.photos/id/1/200/200"}
                  />
                  <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner" />
                </div>
                <svg
                  className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                </svg>
              </div>
            </div>
            <div className="ml-6">
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">{feed.name}</span>
                <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
              </p>
              <div className="flex items-center mt-1">
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <div className="flex items-center mt-4 text-gray-600">
                <div className="flex items-center">
                  <span className="text-sm">Product Quality</span>
                  <div className="flex items-center ml-2">
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center ml-4">
                  <span className="text-sm">Purchasing Experience</span>
                  <div className="flex items-center ml-2">
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-bold">{feed.title}</span>
                <p className="mt-1">
                  {feed.feedback}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                <button className="flex items-center">
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                  </svg>
                  <span className="ml-2">Share</span>
                </button>
                <div className="flex items-center">
                  <span>Was this review helplful?</span>
                  <button className="flex items-center ml-6">
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                    </svg>
                    <span className="ml-2">56</span>
                  </button>
                  <button className="flex items-center ml-4">
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                    </svg>
                    <span className="ml-2">10</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <hr />
        </div>
      ))
      }
      <>
        <div className="a-section a-spacing-small">
          {" "}
          <div className="a-section a-spacing-small aok-align-center">
            {" "}
            <img
              alt="Sustainability features"
              src="https://m.media-amazon.com/images/I/019h+CPo68L.svg"
              className="aok-inline-block aok-align-center"
              height={24}
              width={24}
            />{" "}
            <div className="a-section climatePledgeFriendlyAttributePillText aok-inline-block aok-align-center">
              {" "}
              <h2
                className="a-size-medium-plus a-color-base a-text-bold"
                dir="auto"
              >
                {" "}
                Sustainability features{" "}
              </h2>{" "}
            </div>{" "}
          </div>{" "}
          <div className="a-section">
            {" "}
            <p className="a-size-base a-color-base" dir="auto">
              {" "}
              This product has sustainability features recognized by trusted
              certifications.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="a-section a-spacing-base">
          {" "}
          <div className="a-row a-spacing-small">
            {" "}
            <div className="a-column a-span4">
              {" "}
              <div className="a-section a-spacing-mini">
                {" "}
                <span className="a-size-base-plus a-text-bold" dir="auto">
                  {" "}
                  Safer chemicals{" "}
                </span>{" "}
              </div>{" "}
              <div className="a-section a-spacing-mini">
                {" "}
                <p className="a-size-base" dir="auto">
                  {" "}
                  Made with chemicals safer for human health and the
                  environment.{" "}
                </p>{" "}
              </div>{" "}
              <div className="a-section a-spacing-mini">
                {" "}
                <span className="a-size-small a-color-secondary" dir="auto">
                  {" "}
                  As certified by{" "}
                </span>{" "}
              </div>{" "}
              <div className="a-section climatePledgeFriendlyAttribute">
                {" "}
                <span
                  className="a-declarative"
                  data-action="a-modal"
                  data-csa-c-type="widget"
                  data-csa-c-func-deps="aui-da-a-modal"
                  data-a-modal='{"padding":"none","name":"CPFBottomSheet-OEKO-TEX_STANDARD_100","width":"800","header":" "}'
                  id="CPF-BTF-Certificate-Card-OEKO-TEX_STANDARD_100"
                  data-csa-c-id="9eyrce-ncoon7-iwjl2q-2gquum"
                >
                  {" "}
                  <div className="a-section a-spacing-none aok-inline-block climatePledgeFriendlyAttributePill climatePledgeFriendlyBottomNone aok-align-center">
                    {" "}
                    <img
                      alt="OEKO-TEX STANDARD 100"
                      src="https://m.media-amazon.com/images/I/51YvKwF01yL._SS128_.jpg"
                      className="climatePledgeFriendlyAlignMiddle"
                      height={24}
                      width={24}
                    />{" "}
                    <div className="a-section aok-inline-block aok-align-center climatePledgeFriendlyAttributePillText">
                      {" "}
                      <a
                        className="a-size-base a-align-center a-link-normal"
                        href="#"
                        dir="auto"
                      >
                        {" "}
                        OEKO-TEX STANDARD 100{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </span>{" "}
                <div
                  className="a-popover-preload"
                  id="a-popover-CPFBottomSheet-OEKO-TEX_STANDARD_100"
                >
                  {" "}
                  <div className="a-section a-padding-medium">
                    {" "}
                    <div className="a-section a-spacing-small">
                      {" "}
                      <img
                        alt="OEKO-TEX STANDARD 100"
                        src="https://m.media-amazon.com/images/I/51YvKwF01yL._SS128_.jpg"
                        className="aok-inline-block aok-align-center"
                        height={32}
                        width={32}
                      />{" "}
                      {/* <span
                  className="a-size-medium a-color-base climatePledgeFriendlyAlignMiddle climatePledgeFriendlyPaddingLeft8px a-text-bold"
                  dir="auto"
                >
                  {" "} */}
                      {/* OEKO-TEX STANDARD 100{" "}
                </span>{" "}
              </div>{" "}
              <hr
                aria-hidden="true"
                className="a-spacing-small a-divider-normal"
              />{" "}
              <div className="a-section a-spacing-base">
                {" "} */}
                      {/* <p>
                  STANDARD 100 by OEKO-TEX requires every component of a
                  textiles product—including all thread, buttons, and trims—to
                  be tested against a list of more than 1,000 harmful regulated
                  and unregulated chemicals which may be harmful to human
                  health. The assessment process is globally standardized,
                  independently conducted, and updated at least once a year
                  based on new scientific information or regulatory
                  requirements. Certification focus: #ProductSafety and
                  #ChemicalsUsed.
                </p> */}
                      <p>
                        <span
                          className="a-declarative"
                          data-action="CPF-OpenExternalLink"
                          data-cpf-openexternallink="{}"
                        >
                          {/* <a href="https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex">
                      Learn more about this certification
                    </a> */}
                        </span>
                      </p>{" "}
                    </div>{" "}
                    <hr
                      aria-hidden="true"
                      className="a-spacing-small a-divider-normal"
                    />{" "}
                    {/* <h3
                className="a-size-base a-spacing-micro a-spacing-top-base a-color-base a-text-bold"
                dir="auto"
              >
                {" "}
                Certification Number{" "}
              </h3>{" "}
              <span className="a-size-small a-color-base" dir="auto">
                {" "}
                68252{" "}
              </span>{" "} */}
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        {/* <div className="a-section a-spacing-small climatePledgeFriendlyAlignMiddle">
          {" "}
          <div className="a-section a-spacing-mini climatePledgeFriendlyBottomNone aok-align-center">
            {" "}
            <span className="a-size-mini"> Part of </span>{" "}
          </div>{" "}
          <div className="a-section a-spacing-small climatePledgeFriendlyProgramName aok-align-center">
            {" "}
            <img
              alt="Sustainability features"
              src="https://m.media-amazon.com/images/I/11qFTG64RvL.png"
              className="climatePledgeFriendlyAlignMiddle"
              height={34}
              width={34}
            />{" "}
            <div className="a-section climatePledgeFriendlyAttributePillText aok-inline-block aok-align-center">
              {" "}
              <span className="a-size-base-plus">
                {" "}
                Climate Pledge Friendly{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div> */}
      </>
      <br /><br /><br />
    </>
  );
};

export default Review;
