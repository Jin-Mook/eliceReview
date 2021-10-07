import Content from './Content'


function App() {
  const topics = [
    {key: 0, title: "hello", body: "main page"},
    {key: 1, title: "html", body: "html is ..."},
    {key: 2, title: "css", body: "css is ..."},
  ]

  return (
    <>
      <Content topic={topics}/>
      <form>
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title"/>
        </div>
        <div>
          <label htmlFor="body">body</label>
          <textarea name="body" id="" cols="30" rows="10"></textarea>
        </div>
        <button>입력</button>
      </form>

    </>
  );
}

export default App;
