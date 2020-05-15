import {
    Pipe,
    PipeTransform
} from '@angular/core';

import { IMovie } from '../interfaces';

@Pipe({
    name: 'movieOrderBy',
    pure: false
})
export class MovieOrderByPipe implements PipeTransform {

    transform(collection: Array<IMovie>, order: string = '', column: string = ''): Array<IMovie> {
        if (!collection || order === '' || !order) { return collection; }
        if (collection.length <= 1) { return collection; }
        if (!column || column === '') { return collection; }
        return this.orderBy(collection, order, column);
    }

    private orderBy(collection: Array<IMovie>, order: string, column: string): Array<IMovie> {
        collection.sort((a: IMovie, b: IMovie) => {
            if (a[column] < b[column]) {
                return -1;
            } else if (a[column] > b[column]) {
                return 1;
            } else {
                return 0;
            }
        });
        return [...collection];
    }
}
