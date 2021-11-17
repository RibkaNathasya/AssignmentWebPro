import React from 'react';

class Hello extends React.Component {
  render() {
    const {name, prodi, year} = this.props;

    return(
      <h2>
        {name} from prodi {prodi}  
        is learning ReactJS in {year}</h2>
    );
  }
}

export default Hello;
