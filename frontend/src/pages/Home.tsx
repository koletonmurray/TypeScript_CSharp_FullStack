function Home() {
  const headshot = require('../JoelHiltonHeadshot.jpg');

  return (
    <div>
      <h1>Home</h1>
      <br></br>
      <img
        className="rounded"
        src={String(headshot)}
        alt="Headshot of Joel Hilton"
      />
    </div>
  );
}
export default Home;
