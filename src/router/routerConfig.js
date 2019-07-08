import {routerPath} from './routerPath';

// const Home      = lazy( () => import('../containers/counter'))
// const LoginPage = lazy(() => import('../containers/login'));
// const TodoList  = lazy( () => import('../containers/todoList'))
import HomePage             from '../page/home';
import LoginPage            from '../components/login';
import RotatePhotosPage     from '../page/rotatingPhoto';
import QuestionTablePage    from '../page/question/table';
import MapPage              from '../page/map';
import { HooksBasic }       from '../page/hooks'



export default {
    HomePage: {
        component: HomePage,
        path: routerPath.Home
    },
    LoginPage: {
        component: LoginPage,
        path: routerPath.Login
    },
    RotatePhotosPage: {
        component: RotatePhotosPage,
        path: routerPath.RotatePhotos
    },
    QuestionTablePage: {
        component: QuestionTablePage,
        path: routerPath.QuestionTable
    },
    MapPage: {
        component: MapPage,
        path: routerPath.Map
    },
    HooksBasic: {
        component: HooksBasic,
        path: routerPath.Hook
    }
}