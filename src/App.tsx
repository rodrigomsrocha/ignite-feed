import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rodrigomsrocha.png",
      name: "Rodrigo Marques",
      role: "Web developer",
    },
    content: [
      { type: "paragraph" as const, content: "Fala galeraa 👋" },
      {
        type: "paragraph" as const,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link" as const, content: "👉 jane.design/doctorcare" },

      { type: "link" as const, content: "#novoprojeto #nlw" },
      { type: "link" as const, content: "#nlw" },
      { type: "link" as const, content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-07-16 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CEO @Rocketseat",
    },
    content: [
      { type: "paragraph" as const, content: "Fala galeraa 👋" },
      {
        type: "paragraph" as const,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link" as const, content: "👉 jane.design/doctorcare" },

      { type: "link" as const, content: "#novoprojeto" },
      { type: "link" as const, content: "#nlw" },
      { type: "link" as const, content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
