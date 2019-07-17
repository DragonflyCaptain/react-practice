export const routerPath = {
    Home: "/",
    Login: '/login',
    RotatePhotos: '/rotatephotos',
    QuestionTable: '/question/table',
    Map: '/basicmap',
    Hook: '/hooks'
}

export const routerConfig = [
    {
        name: 'Home',
        path: routerPath.Home,
        key: '1',
        icon: 'dashboard'
    }, {
        name: 'Photo',
        key: '2',
        icon: 'smile',
        children: [
            {
                path: routerPath.RotatePhotos,
                key: '2-1',
                name: 'RotatePhotos'
            }
        ]
    }, {
        name: 'question',
        key: '3',
        icon: 'smile',
        children: [
            {
                path: routerPath.QuestionTable,
                key: '3-1',
                name: 'QuestionTable'
            }
        ]
    }, {
        name: 'map',
        key: '4',
        icon: 'smile',
        children: [
            {
                path: routerPath.Map,
                key: '4-1',
                name: 'Map'
            }
        ]
    }, {
        name: 'Hook',
        key: '5',
        icon: 'facebook',
        path: routerPath.Hook
    }
]