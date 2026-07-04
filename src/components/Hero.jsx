import banner from "../assets/banner.png";

export default function Hero() {
  return (
    <section id="home" style={{ marginTop: "72px" }}>
      <img
        src={banner}
        alt="Championship Banner"
        style={{
          width: "100%",
          display: "block",
        }}
      />
    </section>
  );
}