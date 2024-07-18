import React, { useState } from 'react';
import LoginForm from '@marketing_components/LoginForm';
import SignupForm from '@marketing_components/SignupForm';

function RegistrationPage() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                    id="login-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="login"
                    aria-selected={activeTab === 'login'}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
                    id="signup-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="signup"
                    aria-selected={activeTab === 'signup'}
                    onClick={() => setActiveTab('signup')}
                  >
                    Signup
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <LoginForm />
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'signup' ? 'show active' : ''}`}
                  id="signup"
                  role="tabpanel"
                  aria-labelledby="signup-tab"
                >
                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
