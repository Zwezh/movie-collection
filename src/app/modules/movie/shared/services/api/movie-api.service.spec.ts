/* tslint:disable:no-unused-variable */

import {
    inject,
    TestBed
} from '@angular/core/testing';

import { MovieApiService } from './movie-api.service';

describe('Service: MovieListApi', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MovieApiService]
        });
    });

    it('should ...', inject([MovieApiService], (service: MovieApiService) => {
        expect(service).toBeTruthy();
    }));
});
