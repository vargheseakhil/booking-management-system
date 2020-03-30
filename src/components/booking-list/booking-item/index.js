import React, {Fragment} from 'react'
import { func, shape, string } from 'prop-types'
import * as Images from '../../../assets/images'
import { pagePlaceholders } from '../../../service/util/constants'
import './index.css'

const BookingItem = ({item, handleUpdate, pageName}) => {
    const { customerDetail ={} } = item
    const { availableTime, address } = customerDetail
    const placeHolders = pagePlaceholders[pageName]
    const statusLogo = Images[pageName]
   return (
    <div className="booking-card">
        <div className="booking-card__container">
            <div className="booking-card__status flex">
                <div className="flex-column">
                  <label className="orange bold">{placeHolders.statusLabel}</label>
                  <label className="grey">{`${item.time}, ${item.date}`}</label>
                </div>
                <img className="status__img" src={statusLogo} alt="Status" />
            </div>
            <div className="booking-card__customer flex">
                <div className="booking-card__customer__details flex">
                    <img src={Images.avatar} alt="Avatar"/>
                    <div className="booking-card__customer__card flex-column bold">
                    <label className="blue">{customerDetail.name}</label>
                    <label>{customerDetail.place}</label>
                    </div>
                </div>
                <div className="booking-card__deals__details">
                    <img src={Images.handShake} alt="" />
                    <label className="bold">
                        {`You two had ${item.noOfDeals} deals before`}
                    </label>
                </div>
            </div>
            <div className="booking-card__schedule_label bold grey">{placeHolders.availableAt}</div>
            {pageName !== 'Payment' ?
                <Fragment>
                    <div className="flex-column">
                    <div className="flex">
                        <img src={Images.clipArtTime} alt="" />
                        <div className="booking-card__schedule__details_from flex">
                            <label className="bold">{availableTime.fromDate}</label>
                            <label className="bold">{availableTime.fromTime}</label>
                        </div>
                    </div>
                    { pageName !== 'Service' ?
                    <div  className="booking-card__schedule__details_to flex">
                        <label className="bold">{availableTime.ToDate}</label>
                        <label className="bold">{availableTime.ToTime}</label>
                    </div> : null }
                    </div>
                    <div className="booking-card__location">
                        <img src={Images.clipArtLocation} alt="" />
                        <label className="blue bold">{`${address[0]},${address[1]},${address[2]}`}</label>
                    </div>
                </Fragment> :
                <Fragment>
                <div className="booking-card__price">
                    <img src={Images.PaymentIcon} alt="" />
                    <div className="booking-card__schedule__details_from flex">
                        <label className="bold">{pagePlaceholders.invoiceLabel}</label>
                    </div>
                </div>
                <div className="booking-card__price_session flex">
                    <label className="">{pagePlaceholders.sessionCost}</label>
                    <label className="orange bold">{item.sessionCost}</label>
                </div>
                </Fragment>
            }
            <div className="booking-card__button__container">
                <button className={pageName === 'Service' ? 'secondary' : 'primary'}>{placeHolders.leftButton}</button>
                <button className="secondary" onClick={() => handleUpdate(item.id)}>{placeHolders.rightButton}</button>
                <div className="booking-card__button__container__more">
                    <img src={Images.more} alt=""/>
                    <label className="blue bold">More</label>
                </div>
            </div>
        </div>
    </div>
   )
}

BookingItem.propTypes = {
    item: shape({}).isRequired,
    handleUpdate: func,
    pageName: string.isRequired,
}

BookingItem.defaultProps = {
    handleUpdate: x => x
}

export default BookingItem