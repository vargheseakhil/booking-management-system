import React, {Fragment} from 'react'
import * as Images from '../../assets/images'
import './index.css'

const AddBanner = () => {
    return (
        <Fragment>
        <div className="add-banner">
            <img src={Images.addBanner} alt="Banner" />
            <div className="add-banner__details">
                <label className="blue bold">Yoga and Pilate Training</label>
                <label className="bold">TRAINING-FITNESS</label>
                <label className="small">This Yoga and Pilate training session is designed for all levels of trainees...</label>
                <div className="flex">
                    <label className="grey bold small">For one session</label>
                    <label className="orange bold">$80</label>
                </div>
            </div>
        </div>
        <div className="elipse-container">
          <img src={Images.Ellipse} alt="Ellipse" />
          <img src={Images.EllipseLight} alt="Ellipse Light" />
        </div>
        </Fragment>
    )
}

export default AddBanner