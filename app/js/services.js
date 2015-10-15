sApp.factory('globals', function() {

    var Service = {};

    Service.locations = [
        {
            name: 'Waukesha, WI',
            phone: '1-262-547-8989',
            email: 'Alloneselfstorage@gmail.com',
            fax: '1-262-970-8989',
            after_hours_phone: '1-262-352-8989',
            address1: '100 Willmont Drive',
            address2: '',
            city: 'Waukesha',
            state: 'WI',
            zip: '53189',
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
        },        {
            name: 'Pewaukee, WI',
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
        },        {
            name: 'Pewaukee, WI',
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
            name: 'Muskego, WI',
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
        },
    ];

    return Service;

});
