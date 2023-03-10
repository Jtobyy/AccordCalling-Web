import Box from "@mui/material/Box";

import Header from "../components/header"
import { useLocation } from "react-router-dom";

import Overview from "../components/dashboard/overview";
import AddFunds, { AddFundsSuccessful } from "../components/dashboard/addFunds";
import ConfirmAddFunds from "../components/dashboard/confirmAddFunds";
import MyAccount from "../components/dashboard/myAccount";


export default function Dashboard() {
    const location = useLocation();
    const props = location.state;

    return (
        <Box component='div' py={15} bgcolor="#D8D8D8" sx={{ px: {xs: 3, sm: 5}, minHeight:'100vh'}}>
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
            })()}
        </Box>
    )
}