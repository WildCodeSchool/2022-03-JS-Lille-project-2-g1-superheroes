import SCard from "./Style";

function Card() {
  return (
    <SCard>
      <div className="card">
        <h1>Flash</h1>
        <h2>352</h2>
        <section className="capacity">
          <ul className="namePower">
            <li className="strengh">strengh</li>
            <li className="power">power</li>
            <li className="speed">speed</li>
          </ul>
          <ul className="numbers">
            <li className="pointStrengh">100</li>
            <li className="pointPower">100</li>
            <li className="pointSpeed">100</li>
          </ul>
        </section>
        <div className="identity">
          <p> Full Name: Dark Flash </p>
          <p>Race: Human</p>
        </div>
      </div>
    </SCard>
  );
}

export default Card;
