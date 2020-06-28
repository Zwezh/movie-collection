/* tslint:disable:no-unused-variable */

import {
    inject,
    TestBed
} from '@angular/core/testing';

import { WishesApiService } from './wishes-api.service';

describe('Service: MovieListApi', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WishesApiService]
        });
    });

    it('should ...', inject([WishesApiService], (service: WishesApiService) => {
        expect(service).toBeTruthy();
    }));
});
