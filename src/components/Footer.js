import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer ">
        <div class="container-fluid about ">
          <div class="row">
            <div class="col-xs-6 col-sm-3">
              <h6 class="text-uppercase text-white">Information</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Benefits</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-6 col-sm-3 column">
              <h6 class="text-uppercase text-white">About</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-3 column">
              <h6 class="text-uppercase text-white">Stay Posted</h6>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    title="No spam, we promise!"
                    placeholder="Tell us your email"
                  />
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#alertModal"
                    type="button"
                  >
                    Subscribe for updates
                  </button>
                </div>
              </form>
            </div>
            <div class="col-xs-12 col-sm-3 text-xs-right">
              <h6 class="text-uppercase text-white ">Follow</h6>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a rel="nofollow" href="" title="Twitter">
                    <i class="fab fa-lg fa-twitter"></i>
                  </a>
                  &nbsp;
                </li>
                <li class="list-inline-item">
                  <a rel="nofollow" href="" title="Facebook">
                    <i class="fab fa-lg fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    rel="nofollow"
                    href="https://www.instagram.com/mathews_jos/"
                    title="Instagram"
                  >
                    <i class="fab fa-lg fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    rel="nofollow"
                    href="https://www.linkedin.com/in/mathews-jose-7b2557126/"
                    title="Linkedin"
                  >
                    <i class="fab fa-lg fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span class="pull-right text-muted small">
            <a href="https://github.com/mathewsjose1998">
              Made by mathews jose
            </a>{" "}
            ©2021
          </span>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
