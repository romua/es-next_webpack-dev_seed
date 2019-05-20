import { ajax } from 'rxjs/ajax';
import axios from 'axios';

export const githubUsers$ = ajax('https://api.github.com/users?per_page=6');

export const githubUsersPromise = axios('https://api.github.com/users?per_page=5');