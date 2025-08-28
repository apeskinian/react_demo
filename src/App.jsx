import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function hideModelHandler() {
    setModalVisible(false);
  }

  function showModelHandler() {
    setModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModelHandler}/>
      <main>
        <PostsList isPosting={modalVisible} onStopPosting={hideModelHandler} />
      </main>
    </>
  )
}

export default App;
