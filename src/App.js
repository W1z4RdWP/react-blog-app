import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { format } from 'date-fns';

function App() {

const [posts, setPosts] = useState([
  {
    id: 1,
    title: "Моя первая публикация",
    datetime: "2 Июля, 2024г. 13:06:32",
    body: "Я посвящаю данную статью своей маме, бабушке, дедушке, папе, дочке, сыну, брату, дяде, тете, двоюродным братьям и сестрам, племянникам и племянницам, кузенам, свекру и свекрови, тестю и теще, деверам и золовкам, отчиму и мачехе, прабабушке и прадедушке, внучатым племянникам и племянницам, правнукам и правнучкам, сводным братьям и сестрам, зятьям и невесткам, шурину и деверю, свояченице и золовке, дедушке и бабушке со стороны супруга/супруги, родителям супруга/супруги, детям супруга/супруги от предыдущего брака, пасынку и падчерице, отчиму и мачехе супруга/супруги, сводным братьям и сестрам супруга/супруги, зятю и невестке супруга/супруги, шурину и деверю супруга/супруги, свояченице и золовке супруга/супруги."
  },
  {
    id: 2,
    title: "Мой второй пост",
    datetime: "2 Июля, 2024г. 13:08:31",
    body: "Вторая публикация - еще интереснее чем первая. Это всегда так, ведь мы учимся на своих ошибках и с каждым новым повторением чего-то, мы делаем это чуточку лучше!"
  },
  {
    id: 3,
    title: "Мой третий пост",
    datetime: "2 Июля, 2024г. 13:09:42",
    body: "Текст123"
  }
])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody]= useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const filteredResults = posts.filter(post=>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  },[posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "yyyy-MM-dd");
    const newPost = {id, title: postTitle, datetime, body: postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }


  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path='/' element={<Home posts={searchResults}/>} />
        <Route exact path='/post' element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>} />
        <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} ></Route>
        <Route path="*" element={<Missing />} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
