import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Auth0Provider } from '@auth0/auth0-react';
import ProjectDetail from './pages/ProjectDetail';

const queryClient = new QueryClient();

// your_domain.auth0.com
const REACT_APP_AUTH0_DOMAIN='dev-46eqp2s4.eu.auth0.com';

///your_client_id
const REACT_APP_AUTH0_CLIENT_ID='XV6sNmaUfgpOEiG0L8ssjdbPdmUtSFor';

const App: React.FC = () => {
  return (
    <Auth0Provider
    domain={REACT_APP_AUTH0_DOMAIN}
    clientId={REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      audience: 'http://localhost:8081/',
      redirect_uri: window.location.origin
    }}
  >
    <QueryClientProvider client={queryClient}>
      <Router>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </Container>
      </Router>
    </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;