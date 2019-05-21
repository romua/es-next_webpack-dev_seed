import Person from './person/person';
import Employee from './employee/employee';
import { githubUsers$, githubUsersPromise } from './API/asyncAwitApi';
import { map } from 'rxjs/operators'
import { bubbleSortingV1, bubbleSortingV2 } from './sorting/bubble';
import { selectionSort } from './sorting/selection';


function SORTING_ALGORITHMS(inputArray) {
  const bubble_v1_start = performance.now();
  const bubble_v1_result = bubbleSortingV1([...inputArray]);
  const bubble_v1_end = performance.now();
  console.log(`Sorting of ${[...inputArray]} with BUBBLE took %c ${(bubble_v1_end - bubble_v1_start)} milliseconds. `, 'color: red', `Result ${bubble_v1_result}`);

  const bubble_v2_start = performance.now();
  const bubble_v2_result = bubbleSortingV2([...inputArray]);
  const bubble_v2_end = performance.now();
  console.log(`Sorting of ${[...inputArray]} with BUBBLE took %c ${(bubble_v2_end - bubble_v2_start)} milliseconds. `, 'color: red', `Result ${bubble_v2_result}`);

  const selection_v1_start = performance.now();
  const selection_v1_result = selectionSort([...inputArray]);
  const selection_v1_end = performance.now();
  console.log(`Sorting of ${[...inputArray]} with SELECTION took %c ${(selection_v1_end - selection_v1_start)} milliseconds. `, 'color: red', `Result ${selection_v1_result}`);

}

SORTING_ALGORITHMS([9, 1, 7, 4, 6, 6, 1, 2, 0, 22, 11, 330, 123213, 0, 11, 77, 44, 2, 1, 33]);


function OOP() {
  const p1 = new Person(new Date(1993, 10, 13), 'First', 'Person');
  const e1 = new Employee();
  console.log(p1);
  console.log(e1);
}

function ASYNC() {
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
}
