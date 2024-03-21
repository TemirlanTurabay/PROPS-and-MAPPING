import React from 'react';
import Post from './Post';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';

const posts = [
  {
    id: 1,
    author: "Authors name",
    topic: "Topics name",
    date: "7 july",
    title: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    timing: "12 min read",
    type: "Selected for you"
  },
  {
    id: 2,
    author: "Authors name",
    topic: "Topics name",
    date: "7 july",
    title: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    timing: "12 min read",
    type: "Selected for you"
  },
  {
    id: 3,
    author: "Authors name",
    topic: "Topics name",
    date: "7 july",
    title: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    timing: "12 min read",
    type: "Selected for you"
  }
];

function App() {
  return (
    <div>
      <Header/>
      <Intro/>
      <div id="cardscolumn" style={{ display: 'flex', flexDirection: 'column', width: '1440px', height: '1152px', padding: '0px 160px 0px 160px', gap: '40px' }}>
      {posts.map(function(post, index){
        return <Post key = {index} author = {post.author} topic = {post.topic} date = {post.date} title = {post.title} text = {post.text} timing = {post.timing} type = {post.type}/>
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App