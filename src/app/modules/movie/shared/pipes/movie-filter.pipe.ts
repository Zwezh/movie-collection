import { Pipe, PipeTransform } from '@angular/core';

import { IMovie } from '../interfaces';


@Pipe({
    name: 'movieFilter',
    pure: false
})
export class MovieFilterPipe implements PipeTransform {

    transform(movieCollection: Array<IMovie>, search: string, type: string): Array<IMovie> {

        if (!movieCollection) return null;
        if (!search) return movieCollection;

        search = search.toLowerCase();

        return movieCollection.filter((item: IMovie) => {
            return type ?
                item[type].toLowerCase().includes(search) :
                JSON.stringify(item).toLowerCase().includes(search);
        });
    }

}
