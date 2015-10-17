sApp.factory('globals', function() {

    var Service = {};

    Service.locations = [
        {
            id: 1,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: '100 Willmont Drive',
            address2: '',
            city: 'Waukesha',
            state: 'WI',
            zip: '53189',
            coords: '',
            images:[],
            office: {
                hours:{
                    monday: '2pm-5pm',
                    tuesday: '9am-12pm',
                    wednesday: '9am-12pm',
                    thursday: 'by appointment',
                    friday: '2pm-5pm',
                    saturday: '9am-12pm',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Near the corner of Hwy 59 and Hwy 164',
            sizes:[
                '5x8', '5x12', '10x10',
                '10x15', '12x15', '10x20',
                '10x25', '11x25', '10x30',
                '10x40', '20x20', '20x25', '20x30'
            ]
        },{
            id: 2,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: 'N27 W23139 Roundy Drive',
            address2: '',
            city: 'Pewaukee',
            state: 'WI',
            zip: '53072',
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Just north of I-94 near Hwy F and Capital Drive in Pewaukee',
            sizes:[
                '5x5', '8x10', '10x10',
                '10x15', '10x20',
                '10x25', '11x25', '10x30',
                '20x20'
            ]
        },{
            id: 3,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: 'W223 N3554 Duplainville Road',
            address2: '',
            city: 'Pewaukee',
            state: 'WI',
            zip: '53072',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Just north of I-94 near Hwy F and Capital Drive in Pewaukee',
            sizes:[
                '5x8', '5x12', '10x10',
                '10x15', '12x15', '10x20',
                '10x25', '11x25', '10x30',
                '10x40', '20x20', '20x25', '20x30'
            ]
        },{
            id: 4,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: 'S83 W18550 Saturn Drive',
            address2: '',
            city: 'Muskego',
            state: 'WI',
            zip: '53150',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Two Block West Of City Hall & Police Dept. Complex in the Muskego Industrial Park',
            sizes:[
                '5x5', '5x10', '10x10',
                '10x15', '10x20',
                '10x22', '10x30',
                '10x40', '30x40'
            ]
        },{
            id: 5,
            name: 'Badger Storage',
            phone: '1-262-597-5444',
            email: 'Sturtevantstorage@gmail.com',
            fax: '1-262-458-4286',
            after_hours_phone: '1-262-995-4884',
            address1: '1587 22nd Avenue',
            address2: '',
            city: 'Kenosha',
            state: 'WI',
            zip: '53140',
            images:[],
            office: {
                hours:{
                    monday: '2pm-5pm',
                    tuesday: '10am-1pm',
                    wednesday: '10am-1pm',
                    thursday: '10am-1pm',
                    friday: '10am-1pm',
                    saturday: '10am-1pm',
                    sunday: 'by appointment'
                }
            },
            driving_tip: '',
            sizes:[
                '5x5', '5x10', '10x10',
                '10x15', '10x20',
                '10x25', '10x30',
                '10x40'
            ]
        },{
            id: 6,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-995-4884',
            address1: '125 North Oakridge Drive',
            address2: '',
            city: 'North Prairie',
            state: 'WI',
            zip: '53153',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Corner of Hwy 59 and Oakridge Dr. Next to the Sheriff\'s Dept',
            amenities: 'Climate Controlled units available in 5x4 5x10 10x10 10x15 only',
            sizes:[
                '5x4', '5x10', '10x10',
                '10x15', '10x20',
                '10x25','10x27', '10x30',
                '25x30'
            ]
        },{
            id: 7,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-995-4884',
            address1: '133 North Oakridge Drive',
            address2: '',
            city: 'North Prairie',
            state: 'WI',
            zip: '53153',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Corner of Hwy 59 and Oakridge Dr. Next to the Sheriff\'s Dept',
            amenities: 'Climate Controlled units available in 5x4 5x10 10x10 10x15 only',
            sizes:[
                '5x4', '5x10', '10x10',
                '10x15', '10x20',
                '10x25','10x27', '10x30',
                '25x30'
            ]
        },{
            id: 8,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: '320 Venture Dr.',
            address2: '',
            city: 'Dousman',
            state: 'WI',
            zip: '53118',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Located just south of the intersection of Hwy 18 and Hwy 67',
            amenities: '',
            sizes:[
                '5x10', '10x10',
                '10x15', '10x20', '10x22',
                '10x25','10x30', '10x40',
                '24x50'
            ]
        },{
            id: 9,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: '340 Venture Dr.',
            address2: '',
            city: 'Dousman',
            state: 'WI',
            zip: '53118',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Located just south of the intersection of Hwy 18 and Hwy 67',
            amenities: '',
            sizes:[
                '5x10', '10x10',
                '10x15', '10x20', '10x22',
                '10x25','10x30', '10x40',
                '24x50'
            ]
        },{
            id: 10,
            name: 'All One Self Storage LLC',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: 'Commercial Dr',
            address2: '',
            city: 'Mukwanago',
            state: 'WI',
            zip: '53149',
            images:[],
            office: {
                hours:{
                    monday: 'by appointment',
                    tuesday: 'by appointment',
                    wednesday: 'by appointment',
                    thursday: 'by appointment',
                    friday: 'by appointment',
                    saturday: 'by appointment',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Located just south of the intersection of Hwy 59 and Hwy 83',
            amenities: 'Fenced and gated outdoor parking.',
            sizes:[]
        },{
            id: 11,
            name: 'Badger Storage',
            phone: '1-262-553-9800',
            email: 'Sturtevantstorage@gmail.com',
            fax: '1-262-458-4286',
            after_hours_phone: '1-262-822-2851',
            address1: '1280 Sheridan Road',
            address2: '',
            city: 'Kenosha',
            state: 'WI',
            zip: '53140',
            images:[],
            office: {
                hours:{
                    monday: '2pm-5pm',
                    tuesday: '2pm-5pm',
                    wednesday: '2pm-5pm',
                    thursday: '2pm-5pm',
                    friday: '2pm-5pm',
                    saturday: '10am-1pm',
                    sunday: 'by appointment'
                }
            },
            driving_tip: 'Located at the Corner of Hwy E and Hwy 32. 1 Mile East of Parkside College. 1 Mile of North of Carthage College.',
            amenities: '',
            sizes:[
                '5x5','5x10', '10x10',
                '10x15', '10x20', '10x25',
                '10x30', '10x40'
            ]
        },{
            id: 12,
            name: 'Badger Storage',
            phone: '1-262-597-5444',
            email: 'Sturtevantstorage@gmail.com',
            fax: '1-262-458-4286',
            after_hours_phone: '1-262-995-4884',
            address1: '1280 Sheridan Road',
            address2: '',
            city: 'Kenosha',
            state: 'WI',
            zip: '53140',
            images:[],
            office: {
                hours:{
                    monday: '2pm-5pm',
                    tuesday: '10am-1pm',
                    wednesday: '10am-1pm',
                    thursday: '10am-1pm',
                    friday: '10am-1pm',
                    saturday: '10am-1pm',
                    sunday: 'by appointment'
                }
            },
            driving_tip: '',
            amenities: '',
            sizes:[
                '5x5','5x10', '10x10',
                '10x15', '10x20', '10x25',
                '10x30', '10x40'
            ]
        }
    ];

    return Service;

});
