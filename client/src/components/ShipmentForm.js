import React from 'react';
import axios from 'axios';

class ShipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingId: '',
      origin: '',
      destination: '',
      cargo: '',
      product: '',
      containerDetail: '',
      containerQuantity: '',
      containerType: '',
      containerTemperature: '',
      termCondition: '',
      internalReference: '',
      customer: '',
      cha: '',
      ff: '',
      type: '',
      incoterm: '',
      pickDrop: '',
      originCountry: '',
      destinationCountry: '',
      stuffingLocation: '',
      deStuffingLocation: '',
      originServices: '',
      destinationServices: '',
      weight: '',
      shippingLine: ''
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      bookingId: this.state.bookingId,
      origin: this.state.origin,
      destination: this.state.destination,
      cargo: this.state.cargo,
      product: this.state.product,
      containerDetail: this.state.containerDetail,
      containerQuantity: this.state.containerQuantity,
      containerType: this.state.containerType,
      containerTemperature: this.state.containerTemperature,
      termCondition: this.state.termCondition,
      internalReference: this.state.internalReference,
      customer: this.state.customer,
      cha: this.state.cha,
      ff: this.state.ff,
      type: this.state.type,
      incoterm: this.state.incoterm,
      pickDrop: this.state.pickDrop,
      originCountry: this.state.originCountry,
      destinationCountry: this.state.destinationCountry,
      stuffingLocation: this.state.stuffingLocation,
      deStuffingLocation: this.state.deStuffingLocation,
      originServices: this.state.originServices,
      destinationServices: this.state.destinationServices,
      weight: this.state.weight,
      shippingLine: this.state.shippingLine
    };

    axios
      .post('localhost:5000//shipments/register', formData, {
        headers: {
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'multipart/form-data'
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const container = {
      marginTop: '58px',
      marginBottom: '70px',
      marginRight: '10px',
      marginLeft: '10px',
      width: '100%',
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'center'
    };
    return (
      <div style={container}>
        <div className="ui equal width grid">
          <div className="row">
            <div className="column">
              <div
                style={{ fontWeight: 'bold', textAlign: 'center' }}
                className="ui segment"
              >
                Shipment Creation
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="field">
                    <label>Booking ID</label>
                    <input
                      placeholder="Event Name"
                      type="text"
                      value={this.state.bookingId}
                      onChange={this.handleChange}
                      name="bookingId"
                    />
                  </div>

                  <div className="field">
                    <label>Origin</label>
                    <input
                      placeholder="Origin"
                      type="date"
                      value={this.state.origin}
                      onChange={this.handleChange}
                      name="origin"
                    />
                  </div>

                  <div className="field">
                    <label>Destination</label>
                    <input
                      placeholder="Destination"
                      type="date"
                      value={this.state.destination}
                      onChange={this.handleChange}
                      name="destination"
                    />
                  </div>

                  <div className="field">
                    <label>Cargo</label>
                    <input
                      placeholder="Cargo"
                      type="time"
                      value={this.state.cargo}
                      onChange={this.handleChange}
                      name="cargo"
                    />
                  </div>

                  <div className="field">
                    <label>Product</label>
                    <input
                      placeholder="Product"
                      type="time"
                      value={this.state.product}
                      onChange={this.handleChange}
                      name="product"
                    />
                  </div>

                  <div className="field">
                    <label>Container Quantity</label>
                    <input
                      placeholder="Container Quantity"
                      type="text"
                      value={this.state.containerQuantity}
                      onChange={this.handleChange}
                      name="containerQuantity"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ui button"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShipmentForm;
