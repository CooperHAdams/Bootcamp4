import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Add from './components/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      ignore: [],
      list: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  ignoreUpdate(id) {
    const iglist = this.state.ignore.concat([id])
    this.setState({
      ignore: iglist
    })
  }

  addBuild(name, code, address, long, lat) {
      const length = this.state.list.length
      const Building = {
        id: length+1,
        name: name,
        code: code,
        address: address,
        coordinates: {
          latitude: parseFloat(lat),
          longitude: parseFloat(long)
        }
      }
      var newList = this.state.list.concat([Building])
      this.setState({
        list: newList
      })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data= {this.state.list}
                    filterText = {this.state.filterText}
                    selectedBuilding = {this.state.selectedBuilding}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    ignore = {this.state.ignore}
                    ignoreUpdate = {this.ignoreUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <Add 
              data = {this.state.list}
              addBuild = {this.addBuild.bind(this)}
            />
            <div className="column2">
              <ViewBuilding 
                selectedBuilding = {this.state.selectedBuilding}
                data = {this.state.list}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
