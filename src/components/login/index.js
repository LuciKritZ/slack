import React from "react";

import {Button} from "@material-ui/core";

import {auth, provider} from "../../services/firebase";
import {useStateValue} from "../../state/StateProvider";
import {actionTypes} from "../../state/reducer";
import "./style.css";

function Login() {
	const [, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://avatars3.githubusercontent.com/u/26204432?s=460&v=4"
					alt=""
				/>
				<h1>
                    Sign in to Slack by LuciKritZ
				</h1>
				<p>krishalshah.slack.com</p>
				<Button onClick={signIn}>
                    Sign in with Google
				</Button>
			</div>
		</div>
	);
}

export default Login;
