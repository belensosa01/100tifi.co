const Home = () => {
  const view = `
  <div class="Characters"> 
    <article class="Character-item">
      <a href="/1/">
        <img src="image" alt="name">
        <h2>Name</h2>
      </a>
    </article>
  </div>
  `
  return view
}

// Lo exportamos ya que nos permite identificar si este archivo puede ser utilizado dentro de otros archivos de JS
export default Home
