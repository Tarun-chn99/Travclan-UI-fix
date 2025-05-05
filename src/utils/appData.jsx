
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5) ;



export const navLinks = [
    {
        id: generateId(),
        title: "Products",
        link: '#',
        isDropdown: true,
        dropdownItems: [
            {
                id: generateId(),
                title: 'Flights',
                link: 'https://home.travclan.com/flights-product-page'
            },
            {
                id: generateId(),
                title: 'Hotels',
                link: 'https://home.travclan.com/hotels-product-page/'
            },
            {
                id: generateId(),
                title: 'Packages',
                link: 'https://home.travclan.com/agentreviews/'
            },
            {
                id: generateId(),
                title: 'Free Website',
                link: 'https://home.travclan.com/mysite/'
            },
            {
                id: generateId(),
                title: 'Hotel API',
                link: 'https://volt.travclan.com/'
            },
            {
                id: generateId(),
                title: 'Flight API',
                link: 'https://volt.travclan.com/flights'
            },
            {
                id: generateId(),
                title: 'FAQs',
                link: 'https://home.travclan.com/travclan-faq-help/'
            }
        ]
    },
    {
        id: generateId(),
        title: "Community",
        link: '#',
        isDropdown: true,
        dropdownItems: [
            {
                id: generateId(),
                title: 'RSVP for OTM',
                link: 'https://explore.travclan.com/'
            },
            {
                id: generateId(),
                title: 'Blogs',
                link: 'https://home.travclan.com/blogs-employee/'
            }
        ]
    },
    {
        id: generateId(),
        title: "Company",
        link: '#',
        isDropdown: true,
        dropdownItems: [
            {
                id: generateId(),
                title: 'About Us',
                link: 'https://s3.ap-south-1.amazonaws.com/com.travclan.cms.production/appcms/About_TravClan.pdf'
            },
            {
                id: generateId(),
                title: 'TravClan Trust Gaurantee',
                link: 'https://home.travclan.com/trustguarantee'
            },
            {
                id: generateId(),
                title: 'Contact Us',
                link: 'https://home.travclan.com/contact-us/'
            },
            {
                id: generateId(),
                title: 'Raise Escalation',
                link: 'https://home.travclan.com/contact-us/'
            }
        ]
    },
    {
        id: generateId(),
        title: "Careers",
        link: '#',
        isDropdown: true,
        dropdownItems: [
            {
                id: generateId(),
                title: 'Work with Us',
                link: 'https://home.travclan.com/careers/'
            },
            {
                id: generateId(),
                title: 'Positions',
                link: 'https://home.travclan.com/careers/'
            }
        ]
    },
    {
        id: generateId(),
        title: "Download App",
        link: 'https://home.travclan.com/download-app/',
        isDropdown: false,
    }
]

