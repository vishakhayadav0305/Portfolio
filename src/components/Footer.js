import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with me on social networks:</span>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Vishakha Yadav
                </h6>
                <p>
                  Actively applying <br />
                  Open to relocate for a good opportunity <br />
                  Can start immediately
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://github.com/vishakhayadav0305"
                    class="text-reset"
                  >
                    GitHub Profile
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/vishakhayadav0305/"
                    class="text-reset"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>Greater Noida, India.
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  vishakha0305ydv@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>+91 8527663981
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4 bg-dark text-light">
          © vishakha0305ydv@gmail
        </div>
      </footer>
    </div>
  );
};

export default Footer;
