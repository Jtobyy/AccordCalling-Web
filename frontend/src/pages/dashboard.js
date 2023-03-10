import Box from "@mui/material/Box";

import Header from "../components/header"
import { useLocation } from "react-router-dom";

import Overview from "../components/dashboard/overview";
import AddFunds, { AddFundsSuccessful } from "../components/dashboard/addFunds";
import ConfirmAddFunds from "../components/dashboard/confirmAddFunds";
import MyAccount from "../components/dashboard/myAccount";
import EditProfile from "../components/dashboard/editProfile";
import ChangePassword from "../components/dashboard/changePassword";
import ContactSupport from "../components/dashboard/contactSupport";
import CallRecords from "../components/dashboard/callRecords";


export default function Dashboard() {
    const location = useLocation();
    const props = location.state;

    return (
        <Box component='div' py={15} bgcolor="#F8F8F8" sx={{ px: {xs: 3, sm: 5,  lg: 15}, minHeight:'100vh'}}>
            <Header />
            {(() => {
                if (props.page == 'overview')
                    return <Overview />
                if (props.page == 'addfunds')
                    return <AddFunds />
                if (props.page == 'confirmAddFunds')
                    return <ConfirmAddFunds />
                if (props.page == 'addFundsSuccessful')
                    return <AddFundsSuccessful />
                if (props.page == 'myaccount')
                    return <MyAccount />
                if (props.page == 'editprofile')
                    return <EditProfile />
                if (props.page == 'changepassword')
                    return <ChangePassword />
                if (props.page == 'contactsupport')
                    return <ContactSupport />
                if (props.page == 'callrecords')
                    return <CallRecords />
            })()}
        </Box>
    )
}