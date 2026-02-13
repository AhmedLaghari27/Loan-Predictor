import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import Home from '../frontend/src/pages/Home';
import About from '../frontend/src/pages/About';
import { theme } from './theme';
import { Header } from '../frontend/src/components/Header';
import LoanEligibilityForm from '../frontend/src/pages/CheckEligibility';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Header />  {/* Add this */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/check-eligibility" element={<LoanEligibilityForm />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;