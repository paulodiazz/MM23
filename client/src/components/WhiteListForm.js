import React, { Fragment, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import '../assets/styles/main.css';
import '../assets/styles/form.css';

const WhiteListForm = ({state, changeWhitelist}) => {

    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace();

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const [datos, setDatos] = useState({
        email: '',
        wallet: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = async (event) => {
        event.preventDefault();
        // var uri = "/add-whitelist";
        
        // if(datos.email.length > 0 && datos.wallet.length > 0) {
        //     uri = uri.concat("?email=", datos.email, "&wallet=", datos.wallet);
        // } else if(datos.email.length > 0) {
        //     uri = uri.concat("?email=", datos.email);
        // } else if(datos.wallet.length > 0) {
        //     uri = uri.concat("?wallet=", datos.wallet);
        // } else {
        //     return 0
        // }
        // fetch(uri, {
        //     method: 'POST'
        // });
        
        try {
            console.log("1");
            await doc.useServiceAccountAuth({
              client_email: CLIENT_EMAIL,
              private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr1k94VQ3QMJtc\nvn0g/+Ccu5on4dFGBtpP+Ctf7iq8MbHLRXHRIWay8Drjfj2B2Gt4Ku0prBcYg0Q3\n4RU3vH1z60FL+E8wH0pM5iGZALk5MpX7Ety81Fnnyc5JpuLuIL6JueUZpfzTCNPE\nfJN0bPC+rZFby8eTqK6HgYLoANjZzPcWUdMpAPVEpiugkIJhXHK1h1k0kh4zsXIj\nF5XrbSlJdfXs9dunzJ1hWhFpmDhC4/a5Mq9g9AoONcBzp+MBJSXd7HvTVR+k/DiT\npIaSrhVEK9N82uoIydMcBKxS5Hy9cjLtdhSyOQXsgmxP6yhieaaZrLK/mLxoHJEM\n43k+Dpp9AgMBAAECggEABUCSVcQXXVg6/qYo43MTioVDOtOKM4jk/KhCEfDQ60cp\nxZci2ZvnstgozwhhbDOKypW/Tk4fBGYKVgEbrN3M4aS2O0XEv9ylxzA9vlqfqFBA\nqTexBqMgxPbg+gg8K/MIXko2QGb999vvdk3beowtsJpUCAY0XH6w213zSLcyUASv\nUjf1dF+bHhlUgraiTr16h+8RVr7s1qmpjBYhogKtv6SbtdrHe4ov1Mh4hCW7E44v\nl3+AR43KyTZ1S4w7lZ3jsST5fJYx8l6UnQKgffNWddm+O53pqRoqjYC5+ha3cZlY\nUR398uL39NcrxeO6MVvhXqSN6B125RTEqEm3nehPMQKBgQDU8VsxGqxg5FhMXXGb\n1TI4Py3JYX1RlJGt/F+JqGtZd/gV0UhXQeRuPJqPxJnGmOQFtAvSXCPkLkUhZmPQ\nQDRUtJtXz/ahjvBt5GMs+9K/yf+2Fo6OFguDbseqXARgW7vKOiRVJnvx4GaG2YW+\nMlPeul5Z4sVzShGkr8rWmDUBjQKBgQDOlS+fNVVNhH9AmDJukslkgAY9k/QKRE9q\nKXThfRIpmBpR3dMV0v5UOMe/4VJahX+3CjarJQwrf05AhLJXG1yTZ5w+d094zmEj\nTstGxHU77ohZa0OJnXxG6eaPkd05kAJRw/OB5gNtDtV/JuE3Nf9v/rP/j443LMuc\n//dWNvSosQKBgQDNj4SJnYckLapzZY1DcoZ9N7gae+r+8t3CyCrt91BR2Pb7EMG1\nwh0isYw/Fvmfdn5AZzM2Sc43+tavTGk0YpZh4stG9LHP+e1tGBkJFru2euhHvfS1\nguBwa2OBuDxdTJC2wnPKY1EpCIfQy3FJTsoZ620jdj9HcQwhH7Y+fEZHDQKBgCLs\nN3O7qWMEXhrGX+gvalpSBjwMsfm2WJKC1Z507UgYzYI/dLrAw3vraWE3rxtcbB2+\nXUWLasZDrC/d/uQY3QqSPmiU9NtgUC2O2XBqL8Nk7KnpJy6xb9vxGKf2qaZcgPff\nn1+7SaL7Gf53zSTvPPJq5XTziMAtE3LEFsT9X1jRAoGBAJa+WTdgABuY960PN433\nIPnPQ+Gp5O5MbppmCDvLeZS4G0T+uo5yhb+Byv2KZ+GsESo0IlwK1SLmc2mkr4Sz\nki5uPolZtBR3Ayb6MuUTbKgzjRFJeXKSm5HUWgbAl+y8QQ/2N4r38beDeiudJw+5\nSsQ805jEoQC77hxR1qYo51Ef\n-----END PRIVATE KEY-----\n",
            });
            console.log("2");

            // loads document properties and worksheets
            await doc.loadInfo();
            console.log("3");
        
            const sheet = doc.sheetsById[SHEET_ID];
            console.log("4");
            const result = await sheet.addRow({
                "Email": datos.email,
                "Wallet": datos.wallet
            });
            console.log("5");
            datos.email = ''
            datos.wallet = ''
            changeWhitelist(!state)
          } catch (e) {
            console.error('Error: ', e);
          }
    }

    return (
        <>
            {state && 
                <div className="overlay">
                    <Fragment>
                        <form className="container text-center bg-light py-4 whitelist" onSubmit={sendData}>
                            <h1 className="text-uppercase">Whitelist</h1>
                            <button className="cerrar" onClick={() => changeWhitelist(!state)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </button>
                            <div className="row py-2">
                                <input type="email" name="email" className="form-control mx-auto" placeholder="mail@example.com" onChange={handleInputChange}></input>
                            </div>
                            <div className="row py-2">
                                <input type="text" name="wallet" className="form-control mx-auto" placeholder="Wallet" onChange={handleInputChange}></input>
                            </div>
                            <button className="blue-button gradient-button-3" type="submit">Submit</button>
                        </form>
                    </Fragment>
                </div>
            }
        </>
    );
}
export default WhiteListForm;