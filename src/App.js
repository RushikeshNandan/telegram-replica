// Before
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// After
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Usage Before
<Router>
  <Switch>
    <Route path="/path1">
      <Component1 />
    </Route>
    <Route path="/path2">
      <Component2 />
    </Route>
  </Switch>
</Router>

// Usage After
<Router>
  <Routes>
    <Route path="/path1" element={<Component1 />} />
    <Route path="/path2" element={<Component2 />} />
  </Routes>
</Router>
