import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Перетяжка салона грузовиков</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus possimus qui labore, dignissimos suscipit itaque
                dolore cumque optio ipsam. Itaque!
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Перетяжка руля</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Culpa,adipisicing elit. Culpa,adipisicing elit.
                Culpa,adipisicing elit. Culpa,adipisicing elit. Culpa, dolorem?
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
