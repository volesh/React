interface IRocket{
    "mission_name": string,
    "launch_date_local": string,
    "launch_site": {
        "site_name_long": string
    },
    "links": {
        "article_link": any,
        "video_link": string
    },
    "rocket": {
        "rocket_name": string,
        "first_stage": {
            "cores": [
                {
                    "flight": number,
                    "core": {
                        "reuse_count": number,
                        "status": string
                    }
                }
            ]
        },
        "second_stage": {
            "payloads": [
                {
                    "payload_type": string,
                    "payload_mass_kg": number,
                    "payload_mass_lbs": number
                }
            ]
        }
    }
}

class User{
    constructor(public name:string, public age:number, public gender:string) {
         this.name = name;
         this.gender = gender;
         this.age = age;
    }
}
const user = new User('Max', 18, 'male')

const sum = (a:number,b:number):number =>{
    return a+b
}


function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:{age:number}, inc:number):object{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
console.log(incAge(user, 2));

