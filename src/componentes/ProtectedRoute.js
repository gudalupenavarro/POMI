import { useAuth } from "../context/AhthContext";

export function ProtectedRoute({ children }) {
    const { user,  loading } = useAuth();

    if (loading) return <h1> Loading </h1>;

    if(!user) return <navigate to = "/login"/ > ;

    return<> { children } </>;
}