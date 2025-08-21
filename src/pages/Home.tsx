import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Perfect
            <span>Domestic Worker</span>
          </h1>
          <p className="hero-subtitle">
            Connect with reliable, experienced domestic workers who will help make your home a better place.
          </p>
          <Link to="/servants" className="hero-button">
            See Maids
          </Link>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who Are We?</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid grid-2">
            <div>
              <h3 className="vision-title">
                Your Trusted Partner in Home Care
              </h3>
              <p className="vision-description">
                MaidMatch is a leading platform that connects families with qualified domestic workers. 
                We understand that finding the right person to care for your home and family is crucial, 
                which is why we've built a comprehensive system to ensure quality matches.
              </p>
              <p className="vision-description">
                Our platform features carefully vetted professionals from around the world, 
                each bringing their unique skills and cultural backgrounds to create a diverse 
                and reliable workforce for your household needs.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number blue">500+</div>
                  <div className="stat-label">Happy Families</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number blue">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
                alt="Happy family with domestic worker"
                style={{ borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Vision</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="grid grid-3">
            <div className="vision-card">
              <div className="vision-icon blue">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="vision-title">Trust & Safety</h3>
              <p className="vision-description">
                We prioritize the safety and well-being of both families and workers through 
                comprehensive background checks and ongoing support.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="vision-icon green">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="vision-title">Quality Service</h3>
              <p className="vision-description">
                Every domestic worker in our network is carefully selected and trained 
                to provide exceptional service tailored to your family's needs.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="vision-icon purple">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="vision-title">Easy Matching</h3>
              <p className="vision-description">
                Our advanced matching system helps you find the perfect domestic worker 
                based on your specific requirements and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
