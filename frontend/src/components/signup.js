import { Paper, Typography, Box, Stack, FormControlLabel, Radio } from "@mui/material";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";

const countries = [
    {
        value: '+234',
        label: 'Nigeria',
    }, {
        value: '+233',
        label: 'Ghana',
    }, {
        value: '+255',
        label: 'Tanzania',
    }, {
        label: "Canada",
        value: "+1"
    }, {
        label: "Afghanistan",
        value: "+93"
    }, {
        label: "Albania",
        value: "+355"
    }, {
        label: "Algeria", 
        value: "+213"
    }, {
        label: "American Samoa",
        value: "+1-684"
    },{
        label: "Andorra", value: "+376"
    }, {
        label: "Anguilla", value: "+1-264"
    },{
        label: "Angola", value: "+244"
    }, {
        label: "Antarctica", value: "+672"
    }, {
        label: "Antigua and Barbuda", value: "+1-268"
    }, {
        label: "Argentina", value: "+54"
    }, {
        label: "Armenia", value: "+374"
    }, {
        label: "Aruba", value: "+297"
    }, {
        label: "Australia", value: "+61"
    }, {
        label:"Austria", value: "+43"
    }, {
        label:"Azerbaijan", value: "+994"
    }, {
        label:"Bahamas", value: "+1-242"
    }, {
        label:"Bahrain", value: "+973"
    }, {
        label:"Bangladesh", value: "+880"
    }, {
        label:"Barbados", value: "+1-246"
    }, {
        label:"Belarus", value: "+375"
    }, {
        label:"Belgium", value: "+32"
    }, {
        label: "Benin", value: "+229"
    }, {
        label: "Bermuda", value: "+1-441"
    }, {
        label: "Bhutan", value: "+975"
    }, {
        label: "Bolivia", value: "+591"
    }, {
        label: "Bosnia and Herzegovina", value: "+387"
    }, {
        label: "Botswana", value: "+267"
    }, {
        label: "Brazil", value: "+55"
    }, {
        label:"British Indian Ocean Territory", value: "+246"
    }, {
        label: "British Virgin Islands", value: "+1-284"
    }, {
        label: "Brunei", value: "+673"
    }, {
        label: "Bulgaria", value: "+359"
    }, {
        label: "Burkina Faso", value: "+226"
    }, {
        label: "Burundi", value: "+257"
    }, {
        label: "Cambodia", value: "+855"
    }, {
        label: "Cameroon", value: "+237"
    }, {
        label:"Cape Verde", value: "+238"
    }, {
        label:"Cayman Islands", value: "+1-345"
    }, {
        label: "Central African Republic", value: "+236"
    }, {
        label: "Chad", value: "+235"
    }, {
        label: "Chile", value: "+56"
    }, {
        label: "China", value: "+86"
    }, {
        label: "Christmas Island", value: "+61"
    }, {
        label: "Belize", value: "+501"
    }, {
        label: "Cocos Islands", value: "+61"
    }, {
        label: "Colombia", value: "+57"
    }, {
        label: "Comoros", value: "+61"
    }, {
        label: "Christmas Island", value: "+269"
    }, {
        label: "Cook Islands", value: "+682"
    }, {
        label: "Costa Rica", value: "+506"
    }, {
        label: "Croatia", value: "+385"
    }, {
        label: "Cuba", value: "+53"
    }, {
        label: "Curacao", value: "+599"
    }, {
        label: "Cyprus", value: "+357"
    }, {
        label: "Czech Republic", value: "+420"
    }, {
        label: "Democratic Republic of the Congo", value: "+243"
    }, {
        label: "Denmark", value: "+45"
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }, {
        label: 
    }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            
            
            
            
            


            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            "Djibouti", value: "+253"
            "Dominica", value: "+1-767"
            "Dominican Republic", value: "+1-809"
            "East Timor", value: "+670"
            "Ecuador", value: "+593"
            "Egypt", value: "+20"
            "El Salvador", value: "+503"
            "Equatorial Guinea", value: "+240"
            "Eritrea", value: "+291"
            "Estonia", value: "+372"
            "Ethiopia", value: "+251"
            "Falkland Islands", value: "+500"
            "Faroe Islands", value: "+298"
            "Fiji", value: "+679"
            "Finland", value: "+358"
            "France", value: "+33"
            "French Polynesia", value: "+689"
            "Gabon", value: "+241"
            "Gambia", value: "+220"
            "Georgia", value: "+995"
            "Germany", value: "+49"
            "Ghana", value: "+233"
            "Gibraltar", value: "+350"
            "Greece", value: "+30"
            "Greenland", value: "+299"
            "Grenada", value: "+1-473"
            "Guam", value: "+1-671"
            "Guatemala", value: "+502"
            "Guernsey", value: "+44-1481"
            "Guinea", value: "+224"
            "Guinea-Bissau", value: "+245"
            "Guyana", value: "+592"
            "Haiti", value: "+509"
            "Honduras", value: "+504"
            "Hong Kong", value: "+852"
            "Hungary", value: "+36"
            "Iceland", value: "+354"
            "India", value: "+91"
            "Indonesia", value: "+62"
            "Iran", value: "+98"
            "Iraq", value: "+964"
            "Ireland", value: "+353"
            "Isle of Man", value: "+44-1624"
            "Israel", value: "+972"
            "Italy", value: "+39"
            "Ivory Coast", value: "+225"
            "Jamaica", value: "+1-876"
            "Japan", value: "+81"
            "Jersey", value: "+44-1534"
            "Jordan", value: "+962"
            "Kazakhstan", value: "+7"
            "Kenya", value: "+254"
            "Kiribati", value: "+686"
            "Kosovo", value: "+383"
            "Kuwait", value: "+965"
            "Kyrgyzstan", value: "+996"
            "Laos", value: "+856"
            "Latvia", value: "+371"
            "Lebanon", value: "+961"
            "Lesotho", value: "+266"
            "Liberia", value: "+231"
            "Libya", value: "+218"
            "Liechtenstein", value: "+423"
            "Lithuania", value: "+370"
            "Luxembourg", value: "+352"
            "Macau", value: "+853"
            "Macedonia", value: "+389"
            "Madagascar", value: "+261"
            "Malawi", value: "+265"
            "Malaysia", value: "+60"
            "Maldives", value: "+960"
            "Mali", value: "+223"
            "Malta", value: "+356"
            "Marshall Islands", value: "+692"
            "Mauritania", value: "+222"
            "Mauritius", value: "+230"
            "Mayotte", value: "+262"
            "Mexico", value: "+52"
            "Micronesia", value: "+691"
            "Moldova", value: "+373"
            "Monaco", value: "+377"
            "Mongolia", value: "+976"
            "Montenegro", value: "+382"
            "Montserrat", value: "+1-664"
            "Morocco", value: "+212"
            "Mozambique", value: "+258"
            "Myanmar", value: "+95"
            "Namibia", value: "+264"
            "Nauru", value: "+674"
            "Nepal", value: "+977"
            "Netherlands", value: "+31"
            "Netherlands Antilles", value: "+599"
            "New Caledonia", value: "+687"
            "New Zealand", value: "+64"
            "Nicaragua", value: "+505"
            "Niger", value: "+227"
            "Nigeria", value: "+234"
            "Niue", value: "+683"
            "North Korea", value: "+850"
            "Northern Mariana Islands", value: "+1-670"
            "Norway", value: "+47"
            "Oman", value: "+968"
            "Pakistan", value: "+92"
            "Palau", value: "+680"
            "Palestine", value: "+970"
            "Panama", value: "+507"
            "Papua New Guinea", value: "+675"
            "Paraguay", value: "+595"
            "Peru", value: "+51"
            "Philippines", value: "+63"
            "Pitcairn", value: "+64"
            "Poland", value: "+48"
            "Portugal", value: "+351"
            "Puerto Rico", value: "+1-787"
            "Qatar", value: "+974"
            "Republic of the Congo", value: "+242"
            "Reunion", value: "+262"
            "Romania", value: "+40"
            "Russia", value: "+7"
            "Rwanda", value: "+250"
            "Saint Barthelemy", value: "+590"
            "Saint Helena", value: "+290"
            "Saint Kitts and Nevis", value: "+1-869"
            "Saint Lucia", value: "+1-758"
            "Saint Martin", value: "+590"
            "Saint Pierre and Miquelon", value: "+508"
            "Saint Vincent and the Grenadines", value: "+1-784"
            "Samoa", value: "+685"
            "San Marino", value: "+378"
            "Sao Tome and Principe", value: "+239"
            "Saudi Arabia", value: "+966"
            "Senegal", value: "+221"
            "Serbia", value: "+381"
            "Seychelles", value: "+248"
            "Sierra Leone", value: "+232"
            "Singapore", value: "+65"
            "Sint Maarten", value: "+1-721"
            "Slovakia", value: "+421"
            "Slovenia", value: "+386"
            "Solomon Islands", value: "+677"
            "Somalia", value: "+252"
            "South Africa", value: "+27"
            "South Korea", value: "+82"
            "South Sudan", value: "+211"
            "Spain", value: "+34"
            "Sri Lanka", value: "+94"
            "Sudan", value: "+249"
            "Suriname", value: "+597"
            "Svalbard and Jan Mayen", value: "+47"
            "Swaziland", value: "+268"
            "Sweden", value: "+46"
            "Switzerland", value: "+41"
            "Syria", value: "+963"
            "Taiwan", value: "+886"
            "Tajikistan", value: "+992"
            "Tanzania", value: "+255"
            "Thailand", value: "+66"
            "Togo", value: "+228"
            "Tokelau", value: "+690"
            "Tonga", value: "+676"
            "Trinidad and Tobago", value: "+1-868"
            "Tunisia", value: "+216"
            "Turkey", value: "+90"
            "Turkmenistan", value: "+993"
            "Turks and Caicos Islands", value: "+1-649"
            "Tuvalu", value: "+688"
            "U.S. Virgin Islands", value: "+1-340"
            "Uganda", value: "+256"
            "Ukraine", value: "+380"
            "United Arab Emirates", value: "+971"
            "United Kingdom", value: "+44"
            "United States", value: "+1"
            "Uruguay", value: "+598"
            "Uzbekistan", value: "+998"
            "Vanuatu", value: "+678"
            "Vatican", value: "+379"
            "Venezuela", value: "+58"
            "Vietnam", value: "+84"
            "Wallis and Futuna", value: "+681"
            "Western Sahara", value: "+212"
            "Yemen", value: "+967"
            "Zambia", value: "+260"
            "Zimbabwe", value: "+263"
]

export default function Signup() {
    const [country, setCountry] = useState('+234');
    const [number, setNumber] = useState('');

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
                <Box bgcolor="#EEEEEE" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Create your account</Typography>

            <Stack direction='column' pt={6}>
                <TextField
                    id="outlined-select-country"
                    select
                    label="Country"
                    defaultValue="+234"
                    helperText="Please select your country"
                    onChange={(e) => setCountry(e.target.value)}
                    >
                         {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}</TextField>
                    <Stack display='flex' direction='row' mt={3}>
                        <TextField id="outlined-basic" 
                                   variant="outlined" 
                                   value={country}
                                   sx={{ width: '70px'}}
                                   disabled/>
                        <TextField label="Phone number" 
                                   variant="outlined" 
                                   sx={{ ml: 2, flexGrow: 1 }}
                                   onKeyUp={(e) => {setNumber(country + e.target.value)}}/>
                    </Stack>
                    
                    <Typography variant="body2" mt={3} color="#2E368F">
                        We will be sending a 4 digit verification code to the number provided
                    </Typography>
                    
                    <RouterLink to='/Auth' state={{page: 'otp', number: number}} style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Proceed
                        </Button>
                    </RouterLink>
                
                    <Typography variant="body2" mt={4}>
                        Already have an account?
                        <RouterLink to='/Signin'> <Link color="#2E368F" variant="span">Sign in</Link></RouterLink>
                    </Typography>
                    {/* <Link color="#2E368F" mt={3} textAlign="right" >Sign in</Link>
                    <Button  color='success' href="#plans" variant="contained"
                    
                    sx={{  my: 3, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none' }}>
                        Log in
                    </Button>
            
                     */}
                    
                </Stack>
        </Paper>
    )
}