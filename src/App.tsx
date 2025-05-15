import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';
import { QRCodeProvider } from './contexts/QRCodeContext';

function App() {
  return (
    <QRCodeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="generator" element={<Generator />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QRCodeProvider>
  );
}

export default App;