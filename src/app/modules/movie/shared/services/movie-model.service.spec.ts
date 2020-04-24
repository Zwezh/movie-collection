/* tslint:disable:no-unused-variable */

import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';

import { MovieModelService } from './movie-model.service';

describe('Service: MovieList', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MovieModelService]
        });
    });

    it('should ...', inject([MovieModelService], (service: MovieModelService) => {
        expect(service).toBeTruthy();
    }));
});
