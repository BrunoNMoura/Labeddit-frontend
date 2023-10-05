import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom";
import { LabedditContext } from "../global/LabedditContext";
import { NotFound } from "../pages/notFound/NotFound";
import Signup from "../pages/signup/SignupPage";
import Login from "../pages/login/LoginPage";
import Post from "../pages/posts/PostPage";
import { useContext } from "react";
import Comments from "../pages/comments/CommentsPage";

export function Router() {
    const context = useContext(LabedditContext)

    function RedirectLogin({ children, redirectTo }) {
        const loged = context.userLoged != null
        return (!loged) ? children : <Navigate to={redirectTo} />
    }
    function ProtectedRoute({ children, redirectTo }) {
        const loged = context.userLoged != null
        return (loged) ? children : <Navigate to={redirectTo} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <RedirectLogin redirectTo={'/posts'}>
                        <Login />
                    </RedirectLogin >}
                />
                <Route path='/singup' element={
                    <RedirectLogin redirectTo={'/posts'}>
                        <Signup />
                    </RedirectLogin >}
                />
                <Route path={"/posts"} element={
                    <ProtectedRoute redirectTo={'/'}>
                        <Post />
                    </ProtectedRoute>}
                />
                <Route path={"/comments"} element={
                    <ProtectedRoute redirectTo={'/'}>
                        <Comments />
                    </ProtectedRoute>}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}