// WhyJerushaligneIsDifferent.jsx
import HeroBreadcrumb from "../components/HeroBreadcrumb"
import "../styles/whyjerush.css";

export default function WhyJerushaligneIsDifferent() {
    return (
        <>
            <HeroBreadcrumb
                title="Why Jerushaligne Is Different"
                subtitle="Let's See What Makes Us Different"
                image="/images/comparison/girl.webp"
            />
            <section className="why-hero">

                <div className="why-hero-container">

                    {/* LEFT CONTENT */}
                    <div className="why-hero-content">
                        <span className="why-badge">ALIGNERS</span>

                        <h1 className="why-title">
                            Why Jerushaligne Is Different
                        </h1>

                        <p className="why-text">
                            At Jerushaligne, we specialize in creating high-quality clear aligners designed specifically
                            for adults. Our mission is to provide effective and discreet orthodontic solutions that fit seamlessly
                            into your lifestyle. With our state-of-the-art technology and personalized treatment plans, we
                            ensure each aligner is custom-made to deliver optimal results.
                        </p>

                        <p className="why-text">
                            Our clear aligners are crafted to be virtually invisible, offering a comfortable and convenient 
                            alternative to traditional braces. Whether you’re looking to correct minor dental issues or achieve a 
                            complete smile makeover.  
                        </p>

                        <a href="/our-outlets" className="why-btn">
                            Find a Nearby Centre
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="why-hero-image">
                        <div className="image-circle">
                            <img
                                src="/images/aligner.png"
                                alt="Clear Aligner Smile"
                            />
                        </div>
                    </div>
                </div>
            </section>
    </>
    );
}
