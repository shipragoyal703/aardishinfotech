
"use client";

import Script from "next/script";

export default function NewsletterForm() {
  return (
    <>
      {/* Brevo configuration */}
      <Script
        id="brevo-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = 'Please enter a valid email address.';
            window.SMS_INVALID_MESSAGE = 'The information provided is invalid.';
            window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank.';
            window.GENERIC_INVALID_MESSAGE = 'Please check your information.';
            window.INVALID_NUMBER = 'Please enter a valid number.';
            window.INVALID_DATE = 'Please enter a valid date';
            window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected',
                selectedOption: '{quantity} selected',
                selectedOptions: '{quantity} selected'
              }
            };
            var AUTOHIDE = Boolean(0);
          `,
        }}
      />

      {/* Brevo form */}
      <div className="sib-form newsletter-brevo">
        <div id="sib-form-container">
          <div
            id="error-message"
            className="sib-form-message-panel"
          >
            <span className="sib-form-message-panel__inner-text">
              Your subscription could not be saved. Please try again.
            </span>
          </div>

          <div
            id="success-message"
            className="sib-form-message-panel"
          >
            <span className="sib-form-message-panel__inner-text">
              Thank you for subscribing! You are now on our mailing list.
            </span>
          </div>

          <div id="sib-container">
            <form
              id="sib-form"
              method="POST"
              action="https://63f587da.sibforms.com/serve/MUIFAKbz8ZVb1nt1wtiEVwxoD4taeaAH7A3kh1HG-Vbd8yW8MbTxb_AOidT0hDQtvIWi198Dt5H7-06xAanvVXZAcyFQJv67wgmz-nSxLI5WIJqYZV-7gnNyG8Q6rsoT1pT-AgY0ZlBjTcEoI7_FPaLSs3C14mrWOxFa_SBZjQ7PO1WqEhvqYI-kwXsrbTdg5IuA9pcPTSWXiLjChg=="
              data-type="subscription"
            >
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div className="entry__field">
                      <input
                        className="input"
                        type="email"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <label className="entry__error entry__error--primary"></label>
                </div>
              </div>

              <div className="sib-form-block">
                <button
                  className="sib-form-block__button sib-form-block__button-with-loader"
                  type="submit"
                  form="sib-form"
                >
                  <svg
                    className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  SUBSCRIBE
                </button>
              </div>

              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                className="input--hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="hidden"
                name="locale"
                value="en"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Load Brevo submission script */}
      <Script
        src="https://sibforms.com/forms/end-form/build/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}
