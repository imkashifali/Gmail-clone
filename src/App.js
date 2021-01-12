import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import Login from "./Login.js"
import SendMail from "./SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice.js";
import { auth } from "./firebase";
import {selectUser,login} from "./features/userSlice.js"
function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

useEffect(() => {
	auth.onAuthStateChanged(user => {
		if(user){
			//the user is logged IN
			dispatch(login({
				displayName : user.displayName,
				email:user.email,
				photoUrl:user.photoURL
			}))
		}
	})
}, [])
	return (
		<Router>
			{!user ? (<Login/>) : (
				<div className="app">
					<Header />
					<div className="app__body">
						<SideBar />

						<Switch>
							<Route path="/mail">
								<Mail />
							</Route>
							<Route path="/">
								<EmailList />
							</Route>
						</Switch>
					</div>
					{sendMessageIsOpen && <SendMail />}
				</div>
			)}
				
		</Router>
	);
}

export default App;