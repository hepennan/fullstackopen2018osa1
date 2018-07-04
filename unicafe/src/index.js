import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      kaikki: []
    };
    this.kasvataHyva = this.kasvataHyva.bind(this);
    this.kasvataNeutraali = this.kasvataNeutraali.bind(this);
    this.kasvataHuono = this.kasvataHuono.bind(this);
  }

  kasvataHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      kaikki: this.state.kaikki.concat(1)
    });
  };

  kasvataNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      kaikki: this.state.kaikki.concat(0)
    });
  };

  kasvataHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      kaikki: this.state.kaikki.concat(-1)
    });
  };

  laskeKeskiarvo = t => {
    let sum = 0;
    t.forEach(element => {
      sum += element;
    });
    let k = (sum * t.length) / 100;
    return k.toFixed(1);
  };

  laskePositiiviset = t => {
    if (t.length === 0) {
      return 0;
    }
    let positiivisia = 0;
    t.forEach(element => {
      if (element > 0) {
        positiivisia += 1;
      }
    });

    let p = (positiivisia / t.length) * 100;
    return p.toFixed(1);
  };

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button handleClick={this.kasvataHyva} text="hyvä" />
          <Button handleClick={this.kasvataNeutraali} text="neutraali" />
          <Button handleClick={this.kasvataHuono} text="huono" />
        </div>

        <Statistics
          hyva={this.state.hyva}
          neutraali={this.state.neutraali}
          huono={this.state.huono}
          keskiarvo={this.laskeKeskiarvo(this.state.kaikki)}
          positiivisia={this.laskePositiiviset(this.state.kaikki)}
        />
      </div>
    );
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = props => {
  return (
    <div>
      <h1>statistiikka</h1>
      <Statistic maara={props.hyva} text="hyvä" />
      <Statistic maara={props.neutraali} text="neutraali" />
      <Statistic maara={props.huono} text="huono" />
      <Statistic maara={props.keskiarvo} text="keskiarvo" />
      <Statistic maara={props.positiivisia} text="positiivisia" laatu="%" />
    </div>
  );
};

const Statistic = props => {
  return (
    <p>
      {props.text} {props.maara} {props.laatu}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
