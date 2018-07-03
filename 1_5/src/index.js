import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
 
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }


    const Otsikko = (props) => {
        return (
            <h1>{props.kurssi.nimi}</h1>
        )
    }


    const Sisalto = (props) => {
        return (
            <div>
                <Osat osa={props.kurssi.osat[0]} />
                <Osat osa={props.kurssi.osat[1]} />
                <Osat osa={props.kurssi.osat[2]} />
            </div>
        )
    }
    

    const Osat = (props) => {
        return (
            <p>{props.osa.nimi} {props.osa.tehtavia}</p>
        )
    }

    const Yhteensa = (props) => {
        return (
            <p>Yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää</p>
        )
    }

 
  

  return (
    <div>
      <Otsikko kurssi = {kurssi} />
      <Sisalto kurssi = {kurssi} />
      <Yhteensa kurssi = {kurssi} />


    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

