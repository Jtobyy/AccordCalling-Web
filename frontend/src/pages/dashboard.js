import Box from "@mui/material/Box";

import Header from "../components/header"
import { Navigate, useLocation } from "react-router-dom";

import Overview from "../components/dashboard/overview";
import AddFunds, { AddFundsSuccessful, AddFundsFailed } from "../components/dashboard/addFunds";
import ConfirmAddFunds from "../components/dashboard/confirmAddFunds";
import MyAccount from "../components/dashboard/myAccount";
import EditProfile from "../components/dashboard/editProfile";
import ChangePassword from "../components/dashboard/changePassword";
import ContactSupport from "../components/dashboard/contactSupport";
import CallRecords from "../components/dashboard/callRecords";
import ConfirmBuyPlan, { BuyPlanFailed, BuyPlanSuccessful } from "../components/dashboard/plansConfirmation";
import { CheckoutForm } from "../components/dashboard/checkoutForm";


export default function Dashboard() {
    const location = useLocation();
    const props = location.state;

    if (!sessionStorage.getItem('token') || sessionStorage.getItem('token') === "undefined")
        return <Navigate to="/Signin" />
    else
    return (
        <Box component='div' py={15} bgcolor="#F8F8F8" sx={{ px: {xs: 3, sm: 5,  lg: 15}, minHeight:'100vh'}}>
            <Header />
            {(() => {
                if (props.page == 'overview')
                    return <Overview />
                else if (props.page == 'addfunds')
                    return <AddFunds />
                else if (props.page == 'makePayment')
                    return <CheckoutForm amount={props.amount} />
                else if (props.page == 'confirmAddFunds')
                    return <ConfirmAddFunds />
                else if (props.page == 'addFundsSuccessful')
                    return <AddFundsSuccessful />
                else if (props.page == 'addFundsFailed')
                    return <AddFundsFailed />
                else if (props.page == 'myaccount')
                    return <MyAccount />
                else if (props.page == 'editprofile')
                    return <EditProfile />
                else if (props.page == 'changepassword')
                    return <ChangePassword />
                else if (props.page == 'contactsupport')
                    return <ContactSupport />
                else if (props.page == 'callrecords')
                    return <CallRecords />


                else if (props.page == 'confirmBuyPlan')
                    return <ConfirmBuyPlan plan={props.plan} price={props.price} country={props.country} />
                else if (props.page == 'buyPlanSuccessful')
                    return <BuyPlanSuccessful number={props.number} />
                else if (props.page == 'buyPlanFailed')
                    return <BuyPlanFailed message={props.message} />
            })()}
        </Box>
    )
}