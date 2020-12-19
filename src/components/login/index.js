import React from "react";

import {Button} from "@material-ui/core";

import {auth, provider} from "../../services/firebase";
import {actionTypes} from "../../state/reducer";
import {useStateValue} from "../../state/StateProvider";
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
                    Slack by LuciKritZ
				</h1>
				<p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/LuciKritZ"
					>
						Find me here!
					</a>
				</p>
				<Button onClick={signIn}>
                    Sign in with Google
				</Button>
				<h6>
                    Inspired by&nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/CleverProgrammer"
					>
						@CleverProgrammer
					</a>
				</h6>
			</div>
		</div>
	);
}

export default Login;
