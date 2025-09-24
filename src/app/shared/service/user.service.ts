import { Injectable } from '@angular/core';
import { Iuser } from '../models/userInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArray:Array<Iuser>=[
        {
            userId: '1',
            userName: "Amit Sharma",
            userRole: "admin",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            description: "Amit is responsible for managing the platform, ensuring smooth operations and user satisfaction. He has over 7 years of experience in system administration and leadership."
        },
        {
            userId: '2',
            userName: "Neha Verma",
            userRole: "candidate",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            description: "Neha is an enthusiastic candidate applying for a software developer role. She loves solving coding challenges and is passionate about frontend technologies."
        },
        {
            userId: '3',
            userName: "Rohit Gupta",
            userRole: "candidate",
            image: "https://randomuser.me/api/portraits/men/50.jpg",
            description: "Rohit is a candidate skilled in data analysis and backend development. He aims to contribute to scalable application building and efficient data handling."
        },
        {
            userId: '4',
            userName: "Priya Singh",
            userRole: "admin",
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            description: "Priya manages user accounts and permissions, ensuring security and compliance. She has expertise in cloud infrastructure and DevOps practices."
        },
        {
            userId: '5',
            userName: "Karan Mehta",
            userRole: "candidate",
            image: "https://randomuser.me/api/portraits/men/12.jpg",
            description: "Karan is a motivated candidate who specializes in mobile app development. He has a creative mindset and enjoys building user-friendly mobile applications."
        }
    ];

  constructor() { }
  fetchAllUsers():Observable<Iuser[]>{
    return of(this.usersArray)
  }
fetchUserDetails(id:string):Observable<Iuser>{
let getUser=this.usersArray.find(user=>user.userId===id) as Iuser
return of(getUser) 
}
newUserObj(user:Iuser){
this.usersArray.push(user)
}
updatedUser(userObj:Iuser){
let getIndex=this.usersArray.findIndex(user=>user.userId===userObj.userId);
this.usersArray[getIndex]=userObj
}
removeUser(userObj:Iuser){
let getIndex=this.usersArray.findIndex(user=>user.userId===userObj.userId)
this.usersArray.splice(getIndex ,1)
}


}
