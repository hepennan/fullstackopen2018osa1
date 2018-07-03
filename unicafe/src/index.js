import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            kaikki: []
        }
        this.kasvataHyva = this.kasvataHyva.bind(this)
        this.kasvataNeutraali = this.kasvataNeutraali.bind(this)
        this.kasvataHuono = this.kasvataHuono.bind(this)
    }

    kasvataHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1,
            kaikki: this.state.kaikki.concat(1)
        })
    }

    kasvataNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            kaikki: this.state.kaikki.concat(0)
        })

    }

    kasvataHuono = () => {
        this.setState({
            huono: this.state.huono + 1,
            kaikki: this.state.kaikki.concat(-1)
        })

    }

    laskeKeskiarvo = (t) => {
        let sum = 0
        t.forEach(element => {
            sum += element
        });
        let k = sum * t.length / 100
        return k.toFixed(1)
    }

    laskePositiiviset = (t) => {
        if (t.length === 0) {
            return 0
        }
        let positiivisia = 0
        t.forEach(element => {
            if (element > 0) {
                positiivisia += 1
            }
        })

        let p = positiivisia / t.length * 100
        return p.toFixed(1)
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <div>
                    <button onClick={this.kasvataHyva}>
                        hyvä
            </button>
                    <button onClick={this.kasvataNeutraali}>
                        neutraali
            </button>
                    <button onClick={this.kasvataHuono}>
                        huono
            </button>
                </div>
                <div>
                    <h1>statistiikka</h1>
                    <p>hyvä {this.state.hyva}</p>
                    <p>neutraali {this.state.neutraali}</p>
                    <p>huono {this.state.huono}</p>
                    <p>keskiarvo {this.laskeKeskiarvo(this.state.kaikki)}</p>
                    <p>positiivisia {this.laskePositiiviset(this.state.kaikki)} %</p>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

