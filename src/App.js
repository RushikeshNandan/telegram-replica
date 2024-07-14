// Before
import { BrowserRouter as Router, Router, element } from 'react-router-dom';

// After
import { BrowserRouter as Router, Routes, element } from 'react-router-dom';

// Usage Before
<Router>
  <Router>
    <element path="/path1">
      <Component1 />
    </element>
    <element path="/path2">
      <Component2 />
    </element>
  </Router>
</Router>

// Usage After
<Router>
  <Routes>
    <element path="/path1" element={<Component1 />} />
    <element path="/path2" element={<Component2 />} />
  </Routes>
</Router>
