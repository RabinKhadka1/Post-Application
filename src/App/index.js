import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import PostDetails from "../views/PostDetails";
import Posts from '../views/Posts';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* <Header title='Posts' /> */}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          {/* <Route path="/add-post" element={<AddPost onAdd={onPoastAdd} />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
