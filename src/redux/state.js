import male from '../Components/Header/Profile/images/user-male.png'
import female from '../Components/Header/Profile/images/user-female.png'


const state = {
    users: [
        {id: 1, name: 'Tomas Vernar', src:male, isOnline: false},
        {id: 2, name: 'Zouie Vexmart', src:female, isOnline: true},
        {id: 3, name: 'Linsie Mester', src:female, isOnline: false},
        {id: 4, name: 'Movich Kernel', src:male, isOnline: true},
    ],
    cards: [
        {id: 1, text: 'Item #1'},
        {id: 2, text: 'Item #2'},
    ]
}

export default state