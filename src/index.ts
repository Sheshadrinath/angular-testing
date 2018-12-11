import { Observable } from 'rxjs';
import { allUsers, weeklyGoal } from './data/data';

//The function name is 'subscribe' since the Observable constructor expects the name to be 'subscribe'
//'subscriber' are objects that implements interfave 'Observer'. So this needs next(), error(), complete()
function subscribe(subscriber) {
    for(let user in allUsers) {
        subscriber.next(user);
    }
}

//Pass the above function as parameter
var allUserObservable$ = new Observable(subscribe);
allUserObservable$.subscribe(user => console.log(user));