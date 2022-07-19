import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import userEvent from "@testing-library/user-event";

export const Progress = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                <h1>Welcome {user.username}</h1>
                <h3>You are authenticated</h3>
                <button onClick={signOut}>Signout</button>
                </div>
            )}
        </Authenticator>
    )
}