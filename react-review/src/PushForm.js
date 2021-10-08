

function PushForm({topics, num, setTopics, setNum}) {


  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target[0].value
    const body = event.target[1].value
    event.target[0].value = ''
    event.target[1].value = ''
    
    const newTopics = [...topics]
    newTopics.push({num: num, title: title, body: body})
    setTopics(newTopics)
    setNum(num+1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" name="title"/>
      </div>
      <div>
        <label htmlFor="body">body</label>
        <textarea name="body" id="" cols="20" rows="2"></textarea>
      </div>
      <button>입력</button>
    </form>
  )
}

export default PushForm