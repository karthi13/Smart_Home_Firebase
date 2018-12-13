import React,{ Component} from 'react';
import '../CSS/style.css';
import { faThermometerHalf, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import currentConditions from '../images/environment.png';
import humidity from '../images/airhumidity.png';
import carbon from '../images/airCo2.png';
// import ReactDOM from 'react-dom';
// import { connect } from "react-redux";
// import fetchNewReading from '../actions/actionTypeConstants';


const iconStyle = {
    marginLeft: 0,
    marginRight: 10
}

class EnvironmentComponent extends Component {


    // componentDidMount(){
    //     this.props.fetchNewReading();
    // }


    render() {
        return (
            <div className="card-env">
                <div className="row">
                    <img hspace={15} height={22} width={22} src={currentConditions} /> Current Conditions
            </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-3 col-xs-3">
                        <div className="row">
                            {/* <img hspace={15} src={temp} /> */}
                            <FontAwesomeIcon size='2x' icon={faThermometerHalf} fixedWidth={10} style={iconStyle} /> Temperature
                    </div>
                        <div className="row">
                            <span style={{ marginLeft: 50 }}>{25}</span><span>&deg;C</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-3">
                        <div className="row">
                            <FontAwesomeIcon size='2x' icon={faTachometerAlt} fixedWidth={10} style={iconStyle} /> Pressure
                    </div>
                        <div className="row">
                            <span style={{ marginLeft: 35, marginRight: 5 }}>{25}</span><span> hPa</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-3">
                        <div className="row">
                            <img style={{ marginRight: 15 }} height={32} width={32} src={humidity} /> Humidity
                    </div>
                        <div className="row">
                            <span style={{ marginLeft: 50, marginRight: 2 }}>{25}</span><span> &#37;</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-xs-3">
                        <div className="row">
                            <img style={{ marginRight: 15 }} height={32} width={32} src={carbon} /> CO2
                    </div>
                        <div className="row">
                            <span style={{ marginLeft: 25, marginRight: 2 }}>{25}</span><span> ppm</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }




}
// const mapStateToProps = state => ({
//     ...state
// });
// const mapDispatchToProps = dispatch => ({
//     fetchNewReading: () => dispatch(fetchNewReading)
// });
export default EnvironmentComponent;
// export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentComponent);