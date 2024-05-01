export default function DataCreator() {
    // Function to generate a random Persian name
    const generateRandomPersianName = () => {
        // Array of sample Persian names
        const names = [
            "محمد",
            "علی",
            "فاطمه",
            "زهرا",
            "حسین",
            "عباس",
            "ناصر",
            "سید",
            "نازنین",
            "سارا",
            "آرمان",
            "مینا",
            "نگین",
            "پارسا",
            "مهران",
            "الهام",
            "شهرزاد",
            "بهناز",
            "مریم",
            "ناهید",
            "مهدی",
            "مهرداد",
            "مرتضی",
            "مهراب",
            "سجاد",
            "رضا",
            "رضوان",
            "سحر",
            "رامین",
            "سعید"
          ];

        // Randomly select a name from the array
        return names[Math.floor(Math.random() * names.length)];
    };

    // Function to generate a random Persian last name
    const generateRandomPersianLastName = () => {
        // Array of sample Persian last names
        const lastNames = [
            "خانی",
            "رضایی",
            "احمدی",
            "محمدی",
            "صادقی",
            "قاسمی",
            "موسوی",
            "رحمانی",
            "کریمی",
            "حسینی",
            "جعفری",
            "علوی",
            "کاظمی",
            "صالحی",
            "مجیدی",
            "نوروزی",
            "نجفی",
            "جوادی",
            "اکبری",
            "نواب",
            "نظری",
            "رستمی",
            "کریمیان",
            "محمودی",
            "طاهری",
            "فرشیدی",
            "علمداری",
            "سلطانی",
            "اکبرزاده",
            "حسنی"
          ];
          
        // Randomly select a last name from the array
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    };

    // Function to generate a random 10-digit number
    const generateRandomMeli = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000); // Generate a random 10-digit number
    };

    // Function to generate a random 10-digit number
    const generateID = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000); // Generate a random 10-digit number
    };

    // Function to generate random map coordinate locations in Iran
    const generateRandomLocation = () => {
        const minLat = 25.0; // Minimum latitude of Iran
        const maxLat = 40.0; // Maximum latitude of Iran
        const minLng = 44.0; // Minimum longitude of Iran
        const maxLng = 63.0; // Maximum longitude of Iran

        const latitude = minLat + Math.random() * (maxLat - minLat); // Generate random latitude
        const longitude = minLng + Math.random() * (maxLng - minLng); // Generate random longitude

        return { latitude, longitude };
    };

    // Function to generate random logins for the past 7 days
    const generateRandomLogins = () => {
        const logins = {};
        for (let i = 1; i <= 7; i++) {
            logins[`day${i}`] = Math.floor(Math.random() * 100); // Generate a random 2-digit number for each day
        }
        return logins;
    };

    // Generate an array of objects with 50 data points
    const dataArray = Array.from({ length: 50 }, (_, index) => ({
        id: generateID(),
        order: index + 1,
        date: Math.floor(Date.now() - Math.random() * 10000000000), // Random date within the past 100 days
        name: generateRandomPersianName(),
        lastName: generateRandomPersianLastName(),
        meli: generateRandomMeli(),
        location: generateRandomLocation(), // Random map coordinate location in Iran
        logins: generateRandomLogins(), // Random logins for the past 7 days
    }));

    // Log the generated array
    console.log(JSON.stringify(dataArray, null, 2));

}