import React from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

class App extends React.Component {

  constructor(props) {
    console.log('App contructor')
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Mazda', year: 2010 },
        { name: 'Audi', year: 2016 },
      ],
      pageTitle: 'React Components',
      showCars: false
    }
  }


  toggleCarsHandler = (newTitle) => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // changeTitleHandler = (pageTitle) => {
  //   this.setState({ pageTitle })
  // }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })

  }

  deleteHandler(index) { //внутри такой функции нельзя обращаться к this, потому что она не стрелочная. Ее нужно забайндить
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({ cars })
  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }


  render() {
    // const cars = this.state.cars
    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              // onChangeTitle={() => this.changeTitleHandler(car.name)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div className="App">
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
        <Counter />
        </ClickedContext.Provider>
        <hr />

        <button
          style={{ marginTop: '20px' }}
          onClick={this.toggleCarsHandler}>
          Toggle Cars
          </button>

          <button onClick={()=> this.setState({clicked: true})}>Change clicked</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>

        {/* <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        /> */}

      </div>
    );
  }
}

export default App
