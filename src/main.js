// import Person from './person/person';
// import Employee from './employee/employee';
import { githubUsers$, githubUsersPromise } from './API/asyncAwitApi';
import { map } from 'rxjs/operators'

// const p1 = new Person(new Date(1993, 10, 13), 'First', 'Person');
// const e1 = new Employee();
//
// console.log(p1);
// console.log(e1);

githubUsers$
    .pipe(
        map(request => request.response)
    )
    .subscribe(
        {
          next: next => {
            console.log('obs next:', next);
          },
          error: err => {

          },
          complete: () => {

          }
        }
    );

async function getUsers() {
  const request = await githubUsersPromise;
  return request.data;
}

getUsers()
    .then(data => console.log('data from async function', data));