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
      .post('http://localhost:5000/shipments/register', formData)
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
               <h1> New Shipment </h1> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui segment">
                <form className="ui form">
                  <div className="form-row">
                    <label>Booking ID :</label>
                    <br></br>
                    <input
                      placeholder="Id"
                      type="text"
                      value={this.state.bookingId}
                      onChange={this.handleChange}
                      name="bookingId"
                      className="form-control"
                    />
                  </div>

                  <div className="form-row">
                    <label>Origin :</label>
                    <input
                      placeholder="Origin"
                      type="text"
                      value={this.state.origin}
                      onChange={this.handleChange}
                      name="origin"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Destination :</label>
                    <br></br>
                    <input
                      placeholder="Destination"
                      type="text"
                      value={this.state.destination}
                      onChange={this.handleChange}
                      name="destination"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Cargo :</label>
                    <br></br>
                    <input
                      placeholder="Cargo"
                      type="text"
                      value={this.state.cargo}
                      onChange={this.handleChange}
                      name="cargo"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Product :</label>
                    <br></br>
                    <input
                      placeholder="Product"
                      type="text"
                      value={this.state.product}
                      onChange={this.handleChange}
                      name="product"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Container Quantity :</label>
                    <br></br>
                    <input
                      placeholder="Container Quantity"
                      type="text"
                      value={this.state.containerQuantity}
                      onChange={this.handleChange}
                      name="containerQuantity"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Container Type :</label>
                    <br></br>
                    <input
                      placeholder="Type"
                      type="text"
                      value={this.state.containerType}
                      onChange={this.handleChange}
                      name="containerType"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Container Temperature :</label>
                    <br></br>
                    <input
                      placeholder="Temperature"
                      type="text"
                      value={this.state.containerTemperature}
                      onChange={this.handleChange}
                      name="containerTemperature"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Terms and Condition :</label>
                    <br></br>
                    <input
                      placeholder="Provide some Terms and Condition"
                      type="text"
                      value={this.state.termCondition}
                      onChange={this.handleChange}
                      name="termCondition"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Internal Reference No. :</label>
                    <br></br>
                    <input
                      placeholder="Reference No."
                      type="text"
                      value={this.state.internalReference}
                      onChange={this.handleChange}
                      name="internalReference"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Customer :</label>
                    <input
                      placeholder="customer"
                      type="text"
                      value={this.state.customer}
                      onChange={this.handleChange}
                      name="customer"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>CHA :</label>
                    <input
                      placeholder="Custom House Agent"
                      type="text"
                      value={this.state.cha}
                      onChange={this.handleChange}
                      name="cha"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>ff :</label>
                    <input
                      placeholder="Freight Forwarder"
                      type="text"
                      value={this.state.ff}
                      onChange={this.handleChange}
                      name="ff"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Type :</label>
                    <input
                      placeholder="type"
                      type="text"
                      value={this.state.type}
                      onChange={this.handleChange}
                      name="type"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Incoterm :</label>
                    <input
                      placeholder="incoterm"
                      type="text"
                      value={this.state.incoterm}
                      onChange={this.handleChange}
                      name="incoterm"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Pick Drop :</label>
                    <input
                      placeholder="Pick Drop"
                      type="text"
                      value={this.state.pickDrop}
                      onChange={this.handleChange}
                      name="pickDrop"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Origin Country:</label>
                    <input
                      placeholder="Origin Country"
                      type="text"
                      value={this.state.originCountry}
                      onChange={this.handleChange}
                      name="originCountry"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Destination Country :</label>
                    <input
                      placeholder="Destination Country"
                      type="text"
                      value={this.state.destinationCountry}
                      onChange={this.handleChange}
                      name="destinationCountry"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Stuffing Location :</label>
                    <input
                      placeholder="Stuffing Location"
                      type="text"
                      value={this.state.stuffingLocation}
                      onChange={this.handleChange}
                      name="stuffingLocation"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>DeStuffing Location :</label>
                    <input
                      placeholder="DeStuffing Location"
                      type="text"
                      value={this.state.deStuffingLocation}
                      onChange={this.handleChange}
                      name="deStuffingLocation"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Origin Services :</label>
                    <input
                      placeholder="Origin Services"
                      type="text"
                      value={this.state.originServices}
                      onChange={this.handleChange}
                      name="originServices"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Destination Services :</label>
                    <input
                      placeholder="Destination Services"
                      type="text"
                      value={this.state.destinationServices}
                      onChange={this.handleChange}
                      name="destinationServices"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Weight :</label>
                    <input
                      placeholder="Weight"
                      type="text"
                      value={this.state.weight}
                      onChange={this.handleChange}
                      name="weight"
                      className="form-control"
                    />
                  </div>

                  <div className="field">
                    <label>Shipping Line :</label>
                    <input
                      placeholder="Shipping Line"
                      type="text"
                      value={this.state.shippingLine}
                      onChange={this.handleChange}
                      name="shippingLine"
                      className="form-control"
                    />
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    
                    onClick={e => this.handleSubmit(e)}
                  >
                    Create
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
