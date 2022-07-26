import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import "./css/emaillist.css"

function Emailtype() {
    return (
        <div class="emailtype">
            <div class="emailtype__options emailtype__options--active">
                <InboxIcon/>
                <p>Primary</p>
            </div>

            <div class="emailtype__options">
                <PeopleIcon/>
                <p>Social</p>
            </div>

            <div class="emailtype__options">
                <LocalOfferIcon/>
                <p>Promotions</p>
            </div>
        </div>
    )
}

export default Emailtype
