import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

export const Dashboard = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                <h1>Welcome to Your Dashboard</h1>
                <h3>You are authenticated</h3>
                <button onClick={signOut}>Signout</button>
                </div>
            )}
        </Authenticator>
    )
}