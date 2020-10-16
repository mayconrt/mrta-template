import React, { Fragment } from 'react'
import Papa from 'papaparse'
import ButtonUpLoad from '../../Components/Buttons/Button'

class FileReader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
  
    this.props.setData(data)

  }

  render() {
    return (
      <Fragment>
        <ButtonUpLoad onClick={e=>this.importCSV('teste')} text='upload'/>
        <input
          className="csv-input ma-input"
          type="file"
          // ref={input => {
          //   this.filesInput = input;
          // }}
          name="file"
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default FileReader;