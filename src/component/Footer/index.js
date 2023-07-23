import './index.css'

const Footer = () => (
  <div className="footer-card">
    <div className="footer-images-container">
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/visa.svg"
        alt="visa"
        className="footer-img"
      />
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/mc.svg"
        alt="master-card"
        className="footer-img"
      />
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/maestro.svg"
        alt="maestro"
        className="footer-img"
      />
      <img
        src="https://d1cj8q6w07zyiq.cloudfront.net/mytransfers/images/amex.svg"
        alt="american express"
        className="footer-img"
      />
    </div>
    <p className="footer-details">© AeroJunction. 2023. All rights reserved.</p>
  </div>
)

export default Footer
