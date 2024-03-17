
import {ClickIt, SubscribeComponent, FetchDataComponent} from './folder/useE1';
import Header from './header';
import Footer from './footer';
import  {GetPosts,AddPostComponet}  from './folder/JSONsever';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div> <ClickIt /></div>
        <div> <SubscribeComponent /></div>
        <div> <FetchDataComponent /></div>
        <div> <GetPosts /></div>
        <div> <AddPostComponet /></div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
