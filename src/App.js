import './App.scss';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { createContext } from 'react';

export const GraphContext = createContext(null);

function App() {
  const initialGraphData = {
    checkingAccount: [25, 70, 45, 60, 46, 44, 60, 32, 80, 40, 100],
    cashFlow: [
      { category: 'August', value1: 10, value2: 20 },
      { category: 'September', value1: 15, value2: 25 },
      { category: 'October', value1: 20, value2: 30 },
      { category: 'November', value1: 15, value2: 25 },
      { category: 'December', value1: 20, value2: 30 },
      { category: 'January', value1: 20, value2: 30 },
    ],
    Invoice: [10, 30, 40, 20, 50],
    accountWatchlist: [
      { account: 'Sales', month: '1194.78', ytd: '11,418.29' },
      { account: 'Advertising', month: '6879.02', ytd: '9,271.36' },
      { account: 'Inventory', month: '4,692.26', ytd: '9,768.09' },
      { account: 'Entertainment', month: '0.00', ytd: '0.00' },
      { account: 'Product', month: '4,652.10', ytd: '2,529.00' },
    ],
  };

  const [graphData, setGraphdata] = useState(initialGraphData);

  return (
    <GraphContext.Provider value={{ graphData, setGraphdata }}>
      <>
        <div className="App">
          <Header />
          <div className="Body">
            <Navbar />
            <Routes>
              <Route path="/*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </>
    </GraphContext.Provider>
  );
}

export default App;


