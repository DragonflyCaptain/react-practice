import RouterPath from './routerPath';

// const Home      = lazy( () => import('../containers/counter'))
// const LoginPage = lazy(() => import('../containers/login'));
// const TodoList  = lazy( () => import('../containers/todoList'))
import HomePage             from '../page/home';
import LoginPage            from '../components/login';
import RotatePhotosPage     from '../page/rotatingPhoto';
// import QuestionTablePage    from '../page/rotatingPhoto';



export default {
    HomePage: {
        component: HomePage,
        path: RouterPath.Home
    },
    LoginPage: {
        component: LoginPage,
        path: RouterPath.Login
    },
    RotatePhotosPage: {
        component: RotatePhotosPage,
        path: RouterPath.RotatePhotos
    },
    QuestionTablePage: {
        component: 'QuestionTablePage',
        path: RouterPath.QuestionTable
    },
}