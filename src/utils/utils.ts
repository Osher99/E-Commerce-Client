import Ps5BundleImage from '../img/EA_FC_24_Bundle_PS5.jpg';
import XboxBundleImage from '../img/xbox_bundle.jpg';
import SwitchBundleImage from '../img/swithc_bundle.jpg';

export const getMainSliderItems = (): any[] => {
    return [
        {
            img: Ps5BundleImage,
            pretitle: 'מארז קונסולה PS5 1TB & משחק פיפא EA FC 24',
            titlePart1: 'חסוך עד 20%',
            titlePart2: 'על הזמנה ראשונה באתר',
            btnText: 'קנה עכשיו'
        },
        {
            img: XboxBundleImage,
            pretitle: 'מארז Xbox Series X 1TB & Forza Horizon 5',
            titlePart1: 'חסוך עד 20%',
            titlePart2: 'על הזמנה ראשונה באתר',
            btnText: 'קנה עכשיו'
        },
        {
            img: SwitchBundleImage,
            pretitle: 'קונסולה נינטנדו סוויץ Nintendo Switch OLED POKEMON SCARLET & VIOLET',
            titlePart1: 'חסוך עד 20%',
            titlePart2: 'על הזמנה ראשונה באתר',
            btnText: 'קנה עכשיו'
        }
    ];
};

export const generateUniqueId = () => {
    return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
};

export const getFullAddress = (city: string, street: string, houseNumber: string, apartment: string, zipCode: string) => {
    let fullAddress = `${street} ${houseNumber}`;

    if (apartment && apartment !== '') fullAddress += `/${apartment}`;

    fullAddress += `, ${city}`;

    if (zipCode && zipCode !== '') fullAddress += `, ${zipCode}`

    return fullAddress;
};
