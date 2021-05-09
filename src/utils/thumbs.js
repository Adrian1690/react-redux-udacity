export const getUserClass = userId => {
    switch(userId){
        case 'sarahedo':
            return 'sarahedo';
        case 'tylermcginnis':
            return 'tylermcginnis';
        case 'johndoe':
                return 'johndoe';
        default:
            return '';
    }
}